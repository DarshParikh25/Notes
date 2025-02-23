import { IoMdHome } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";


const Navbar = () => {
    return (
        <div>
            <div id="logo">
                <img src="/src/assets/black-notes.png" className="h-10 w-24 mx-2" alt="" />
            </div>
            <div id="items" className="border-b-2 border-[#11111122]">
                <div id="first" className="flex w-full p-3 justify-start items-center relative mt-5 rounded-xl hover:bg-[#11111111] hover:cursor-pointer">
                    <IoMdHome />
                    <span className="px-2 text-sm">All Notes</span>
                    <FaAngleRight className="absolute right-2"/>
                </div>
                <div id="second" className="flex w-full p-3 justify-start items-center mb-3 rounded-xl hover:bg-[#11111111] hover:cursor-pointer">
                    <MdOutlineArchive />
                    <span className="px-2 text-sm">Archived Notes</span>
                </div>
            </div>
            <div id="tags">
                <h2 className="p-3 text-[#11111199] font-semibold text-lg">Tags</h2>
            </div>
        </div>
    )
}

export default Navbar