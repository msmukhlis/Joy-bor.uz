import { GoTriangleDown } from "react-icons/go"
import { useNavigate } from "react-router-dom"

export const Navbar =()=>{

    const navigate = useNavigate()
    return(
        <div className="nav">
            <div className="top text-gray-500 bg-customGray px-[10%] py-4">
                 <div className="flex items-center gap-4 ">
                     O'zbek tili
                     <GoTriangleDown />
                 </div>
            </div>

            {/* <button className="" onClick={()=>{navigate('/home/profile')}}>click</button> */}
        </div>
    )
}