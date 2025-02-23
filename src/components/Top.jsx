import { IoSettingsSharp } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

const Top = () => {
  return (
    <div className="border-b-2 border-[#11111122] px-8 py-4 flex justify-between items-center">
        <span className="text-3xl font-bold">All Notes</span>
        <div className="flex items-center w-1/4">
            <div id="input" className="search border-2 border-[#11111122] flex items-center p-2 rounded-[10px] w-[90%]">
                <IoSearchSharp className="w-[10%]"/>
                <input type="text" placeholder="Search by title or tags..." className="mx-2 outline-none w-[80%]"/>
                <ImCancelCircle className="hover:cursor-pointer w-[10%]"/>
            </div>
            <IoSettingsSharp className="ml-6 text-xl hover:cursor-pointer"/>
        </div>
    </div>
  )
}

export default Top
