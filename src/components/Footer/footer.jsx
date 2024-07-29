import { FaFacebookF, FaTelegramPlane } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"
import Advertising from "../adversiting/advertising"

export const Footer = () => {
    const documents = [
        {
            id: 1,
            name: "Foydalanish shartlari"
        },
        {
            id: 2,
            name: "Sotish uchun umumiy shartlar"
        },
        {
            id: 3,
            name: "Oferta"
        },
    ]

    const department = [
        {
            id: 1,
            name: "Ijaraga uy-joylar",
        },
        {
            id: 2,
            name: "Oila uchun uy-joylar",
        },
        {
            id: 3,
            name: "Talabalar uchun",
        },
    ]

    const internet = [
        {
            id: 1,
            name: <FaTelegramPlane />
        },
        {
            id: 2,
            name: <IoLogoInstagram />

        },
        {
            id: 3,
            name: <FaFacebookF />

        },
    ]
    return (

        <>
            <Advertising />

            <div className="flex flex-col gap-5 px-4 sm:px-[10%] bg-customGray py-8">
                <div className="flex     flex-col md:flex-row gap-8 md:gap-24 m-0 ">
                    <div className="m-0">
                        <div className="font-semibold text-gray-500">Hujjatlar</div>
                        {
                            documents.map((doc) => (
                                <div className="font-semibold py-3 hover:text-blue-400 cursor-pointer" key={doc.id}>{doc.name}</div>
                            ))
                        }
                    </div> 
                    <div className="m-0">
                        <div className="font-semibold text-gray-500">Bo’limlar</div>
                        {
                            department.map((doc) => (
                                <div className="font-semibold py-3 hover:text-blue-400 cursor-pointer" key={doc.id}>{doc.name}</div>
                            ))
                        }
                    </div>
                    <div className="m-0">
                        <div className="font-semibold text-gray-500">Tarmoqlardagi sahifalarimiz</div>
                        <div className="flex items-center gap-5 text-2xl">
                            {
                                internet.map((intr) => (
                                    <div className="font-semibold cursor-pointer hover:text-blue-400 py-4 text-gray-500" key={intr.id}>{intr.name}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full border-t-2 border-gray-200 mt-4"></div>
                <div className="flex flex-col sm:flex-row items-center justify-between py-2 text-gray-500">
                    <div>© 2023 joy-bor.uz</div>
                    <div>Design by Saidalikhan Sobirov</div>
                </div>
            </div>
        </>
    )
}
