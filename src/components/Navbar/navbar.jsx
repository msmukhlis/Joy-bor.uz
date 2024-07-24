import { GoTriangleDown } from "react-icons/go"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate()

    const categores = [
        {
            id: 1,
            name: "Barchasi"
        },
        {
            id: 2,
            name: "Talabalar uchun"
        },
        {
            id: 3,
            name: "O’g’il bolalar uchun"
        },
        {
            id: 4,
            name: "Qiz bolalar uchun"
        },
        {
            id: 5,
            name: "Oila uchun"
        },
        {
            id: 6,
            name: "Sotuvdagi xonadon"
        },
    ]
    return (
        <div className=" flex flex-col gap-5">
            <div className="m-0 text-gray-500 bg-customGray px-[10%] py-4 flex justify-between">
                <div className="flex items-center gap-4 ">
                    O'zbek tili
                    <GoTriangleDown />
                </div>
                <div className="flex  items-center gap-10">
                    <div className="">E’lonlarim</div>
                    <div className="">Saqlanganlar</div>
                    <div className="">Xabarlar</div>
                    <div onClick={()=>{navigate("/home/profile")}} className="cursor-pointer">Profil</div>
                </div>
            </div>
            <div className="m-0 px-[10%] flex items-center justify-end gap-5">
                <button
                    onClick={() => { navigate("/auth/register") }}
                    className="bg-blue-500 border border-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Logo
                </button>
                <div className="w-full flex gap-5 items-center justify-end border-blue-500 border-2 py-1 px-1 rounded-lg">

                    <div className="flex m-0 items-center gap-4 text-gray-500">
                        Toshkent shahri
                        <GoTriangleDown />
                    </div>
                    <button
                        className="bg-blue-500 border border-blue-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-white hover:text-blue-500  focus:outline-none focus:ring-2 focus:ring-blue-500"

                    >
                        Izlash
                    </button>
                </div>
                <button
                    onClick={() => { navigate("/auth/register") }}

                    className="bg-transparent border border-blue-400 text-blue-400 font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Kirish
                </button>
            </div>
            <div className="m-0 px-[10%] flex items-center justify-between">
                <div className="text-gray-500">Kategoriyasi:</div>
                <div className="flex items-center gap-11 font-semibold">
                    {categores.map((category) => (
                        <div className="" key={category.id}>{category.name}</div>
                    ))}

                </div>
                <div className="flex items-center gap-4 font-semibold">
                    Barcha bo'limlar:
                    <GoTriangleDown />
                </div>
                <div className="font-semibold">
                    Filtrlash
                </div>
            </div>

            {/* <button className="" onClick={()=>{navigate('/home/profile')}}>click</button> */}
        </div>
    )
}