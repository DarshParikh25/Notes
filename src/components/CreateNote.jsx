import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import PropTypes from 'prop-types';
// import { useForm } from "react-hook-form";

const CreateNote = (props) => {
  const titleInputRef = useRef();
  const tagInputRef = useRef(null);
  const [createNew, setCreateNew] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [tagsList, setTagsList] = useState([]);
  // const { register } = useForm()

  const newNote = () => {
    setCreateNew(true)
  }

  const checkNoteCreated = () => {
    setCreateNew(false)
    setTagsList([])
  }

  const typeCheck = e => {
    setInputValue(e.target.value)
    if(e.target.value){
      setIsTyping(true)
    } else{
      setIsTyping(false)
    }
  }
  
  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      const newData = { id: Date.now(), text: inputValue };
      setTagsList([...tagsList, newData]);
      setInputValue('');
      tagInputRef.current.value = ''
      tagInputRef.current.focus();
      setIsTyping(false)
    }
  };

  const handleData = (e) => {
    e.preventDefault();
    const newData = {
      title: titleInputRef.current.value,
      tags: tagsList,
      date: new Date().toLocaleString()
    }
    props.data(newData)
    setCreateNew(false)
    setTagsList([])
  }

  const handleRemoveTag = (id) => {
    tagsList.splice(tagsList.findIndex(i => i.id === id), 1)
    console.log(tagsList)
  }

  return (
    <>
      <button onClick={newNote} className="flex items-center justify-center bg-[#0062ff] w-full rounded-lg hover:cursor-pointer hover:bg-[#0058e7]">
          <IoMdAdd className="font-bold text-white"/>
          <span className="text-white font-bold p-3">Create New Note</span>
      </button>
      {createNew && (
        <div className="popup w-[35vw] h-[70vh] absolute top-1/2 left-1/2 -translate-1/2 rounded-4xl bg-[#f3f3f3] p-8">
          <div className="flex justify-between items-center border-b-[3px] border-[#11111122] pb-8 px-2">
            <h2 className="text-3xl font-bold">Create New Note</h2>
            <GiCancel onClick={checkNoteCreated} className="text-2xl hover:cursor-pointer"/>
          </div>
          <form className="h-[90%] relative">
            <div className="w-full flex flex-col px-2 py-4">
              <label className="text-lg font-bold p-1">Enter Title</label>
              <input 
                type="text"
                name="title"
                ref={titleInputRef}
                className="py-2 px-3 mx-0.5 border-[#11111122] border-[3px] rounded-[10px] focus:border-[#3b82f6] outline-none"
                // {...register("title", {
                //   required: {
                //     value: true,
                //     message: 'required',
                //   },
                // })}
              />
            </div>
            <div className="w-full flex flex-col px-2">
              <label className="text-lg font-bold p-1">Enter Tags</label>
              <div className="tag flex justify-between items-center border-[#11111122] border-[3px] rounded-[10px]">
                <input 
                  type="text"
                  name="title"
                  onChange={typeCheck}
                  ref={tagInputRef}
                  className="py-2 px-3 mx-0.5 outline-none w-[90%]"
                /> 
                {isTyping && (
                  <div className="w-[10%] border-l-2 border-[#11111122] flex justify-center">
                    <IoMdAdd onClick={handleAddTag} className="p-2 w-[90%] h-full hover:cursor-pointer"/>
                  </div>)
                }
              </div>
            </div>
            <div id="tags" className="flex flex-wrap w-full h-[30%] mx-2.5 my-5"> 
              {tagsList && tagsList.map((item) => (
                <div key={item.id} className="w-fit px-2 py-1.5 flex justify-between items-center bg-gray-300 rounded-md mr-2.5 max-h-fit">
                  <span className="font-semibold">{item.text}</span>
                  <RxCross2 onClick={handleRemoveTag} className="text-xs hover:cursor-pointer"/>
                </div>
              ))}
            </div>
            <div className="absolute right-0">
              <button
                // onSubmit={handleSubmit}
                onClick={handleData}
                className="m-2 bg-[#3b82f6] text-white py-1.5 px-4 font-semibold rounded-md hover:cursor-pointer hover:bg-[#0058e7]"
              >
                Create
              </button>
              <button
                onClick={checkNoteCreated}
                className="m-2 bg-transparent border-1 border-[#111] rounded-md py-1.5 px-4 hover:cursor-pointer hover:bg-[#f4f4f4]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

CreateNote.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })),
    date: PropTypes.string.isRequired
  })
}

export default CreateNote