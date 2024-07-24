

import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go"


const Advertising = () => {
    const description = [
        {
            id: 1,
            name: "Joy-bor.uz ilovasi haqida",
            des: "Joy-bor.uz - uy topish va sotish platformasidir. Bu platforma barchaga mos kelishi mumkin. Talabalar o’zlari uchun...",
        },
        {
            id: 2,
            name: "Ilova imkoniyatlari",
            des: "Bu yerda qo’shimcha ma’lumotlar yozib ketish uchun tashlab ketildi. Ilova va sayt haqida ma’lumotlar berilsa yaxshi bo’lardi.",
        },
        {
            id: 3,
            name: "Qo'shimcha",
            des: "Bu yerda qo’shimcha ma’lumotlar yozib ketish uchun tashlab ketildi. Ilova va sayt haqida ma’lumotlar berilsa yaxshi bo’lardi.",
        },
        {
            id: 4,
            name: "Qo'shimcha",
            des: "Bu yerda qo’shimcha ma’lumotlar yozib ketish uchun tashlab ketildi. Ilova va sayt haqida ma’lumotlar berilsa yaxshi bo’lardi.",
        },

    ]

    return (
        <>
            <div className="Advertising bg-customGray flex gap-[10%] px-[10%] pt-[3%]">
                <div className="" style={{ height: 'calc(100% + 150px)', overflow: 'visible' }}>
                    <img className="h-2xl" src="/assets/photo/phoneAdv.png" alt="" style={{  height: 'calc(100% + 150px)' }} />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-3xl font-semibold">Bizni mobil ilovamiz orqali ko’prog’iga ega bo’ling!</div>
                    <div className="text-gray-500  text-lg">joy bor ilovasi orqali uy-joy toping va qulay takliflar haqida hammadan tezroq bilib oling)</div>
                    <div className="flex items-center gap-10 m-0">
                        <div className="bg-black rounded-lg flex items-center text-5xl gap-4 p-2 m-0 text-white">
                            <FaApple />
                            <div className="flex flex-col gap-0 ">
                                <div className="text-sm">Download on the </div>
                                <div className="text-2xl">App store</div>
                            </div>

                        </div>
                        <div className="bg-black rounded-lg flex items-center text-5xl gap-4 p-2 m-0 text-white">
                            <FaGooglePlay />
                            <div className="flex flex-col  gap-0 ">
                                <div className="text-sm m-0">GET IT ON </div>
                                <div className="text-2xl">Google Play</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="m-0 flex flex-col items-center">
                    <img className="m-0" src="/assets/photo/QR.png" alt="" />
                    <div className="text-gray-500  text-lg text-center">
                        Yuklab olish uchun kamerangizni QR kodga qarating
                    </div>
                </div>
            </div>
            <div className="px-[10%] flex py-[4%]  gap-6">
                {
                    description.map((des) => (
                        <div key={des.id} className="flex flex-col gap-4">
                            <div className="font-bold  text-lg m-0">{des.name}</div>
                            <div className="font-semibold">{des.des}</div>
                            <div className="flex text-blue-500  items-center gap-4 m-0">
                                Ko'proq ko'rish
                                <GoTriangleDown className="m-0" />
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Advertising;