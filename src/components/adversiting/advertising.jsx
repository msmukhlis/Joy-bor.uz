import { FaApple } from "react-icons/fa";

const Advertising =()=>{

    return(
        <div className="Advertising bg-customGray">
            <div className=""></div>
            <div className="">
                <div className="text-3xl font-semibold">Bizni mobil ilovamiz orqali ko’prog’iga ega bo’ling!</div>
                <div className="text-gray-500  text-lg">joy bor ilovasi orqali uy-joy toping va qulay takliflar haqida hammadan tezroq bilib oling)</div>
                <div className="flex items-center gap-10 ">
                    <div className="bg-black rounded-lg ">
                    <FaApple />
                    <div className="flex flex-col gap-0 text-white">
                        <div className="text-sm">Download on the </div>
                        <div className="text-2xl">App store</div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Advertising;