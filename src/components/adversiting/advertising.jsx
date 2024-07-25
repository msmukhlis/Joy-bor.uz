import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";

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
    ];

    return (
        <>
            <div className="bg-customGray flex items-end  lg:flex-row gap-8 lg:gap-[10%] px-4 lg:px-[10%] pt-[3%]">
                <div className="hidden xl:block relative b-0 m-0" style={{ height: 'calc(100% + 150px)', width: '400px' }}>
                    <img className="lg:h-2xl w-full lg:w-auto" src="/assets/photo/phoneAdv.png" alt="Phone" style={{ height: 'calc(100% + 150px)' }} />
                </div>
                <div className="flex flex-col pb-4 lg:pb-8 gap-5">
                    <div className="text-2xl lg:text-3xl font-semibold">Bizni mobil ilovamiz orqali ko’prog’iga ega bo’ling!</div>
                    <div className="text-gray-500 text-lg">joy bor ilovasi orqali uy-joy toping va qulay takliflar haqida hammadan tezroq bilib oling</div>
                    <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 m-0">
                        <div className="bg-black rounded-lg flex items-center text-3xl lg:text-5xl gap-4 p-2 m-0 text-white">
                            <FaApple />
                            <div className="flex flex-col gap-0">
                                <div className="text-sm lg:text-base">Download on the</div>
                                <div className="text-xl lg:text-2xl">App Store</div>
                            </div>
                        </div>

                        <div className="bg-black rounded-lg flex items-center text-3xl lg:text-5xl gap-4 p-2 m-0 text-white">
                            <FaGooglePlay />
                            <div className="flex flex-col gap-0 ">
                                <div className="text-sm">GET IT ON </div>
                                <div className="text-xl lg:text-2xl">Google Play</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col pb-4 lg:pb-8 items-center lg:items-start">
                    <img className="w-32 h-32 lg:w-auto lg:h-auto" src="/assets/photo/QR.png" alt="QR Code" />
                    <div className="text-gray-500 text-lg text-center lg:text-left">
                        Yuklab olish uchun kamerangizni QR kodga qarating
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-[10%] flex flex-col  lg:flex-row  py-8 gap-6">
                {description.map((des) => (
                    <div key={des.id} className="flex flex-col gap-4">
                        <div className="font-bold text-lg">{des.name}</div>
                        <div className="font-semibold">{des.des}</div>
                        <div className="flex text-blue-500 items-center gap-4">
                            Ko'proq ko'rish
                            <GoTriangleDown />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Advertising;
