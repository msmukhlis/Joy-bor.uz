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
                <Advertising/>

        <div className="flex flex-col gap-2 px-[10%] bg-customGray py-8">
            <div className="flex gap-24">
                <div className="">
                    <div className="font-semibold text-gray-500">Hujjatlar</div>
                    {
                        documents.map((doc) => (
                            <div className="font-semibold py-3" key={doc.id}>{doc.name}</div>
                        ))
                    }

                </div>
                <div className="">
                    <div className="font-semibold text-gray-500">Bo’limlar</div>
                    {
                        department.map((doc) => (
                            <div className="font-semibold py-3" key={doc.id}>{doc.name}</div>
                        ))
                    }

                </div>
                <div className="">
                    <div className="font-semibold text-gray-500">Tarmoqlardagi sahifalarimiz</div>
                    <div className="flex items-center gap-5 text-2xl">

                        {
                            internet.map((intr) => (
                                <div className="font-semibold py-4 text-gray-500" key={intr.id}>{intr.name}</div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className="w-full border-2 font-semibold"></div>
            <div className="flex items-center justify-between py-2 text-gray-500">
                <div className="">© 2023 joy-bor.uz</div>
                <div className="">Design by Saidalikhan Sobirov</div>
            </div>
        </div>
        </>
    )
}
