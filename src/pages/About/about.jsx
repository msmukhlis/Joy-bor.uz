import styles from "../About/about.module.css"
import ava from "../../../public/assets/photo/avatar.about.svg"
import { RiDashboardLine } from "react-icons/ri";
import { RiRuler2Line } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { ImPaintFormat } from "react-icons/im";
import { RiFlag2Line } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import houseMainPhoto from "../../../public/assets/photo/about.homePhoto.svg"
import houseSecondaryPhoto from "../../../public/assets/photo/about.homePhotoSecondary.svg"
import { IoIosArrowForward } from "react-icons/io";





 const About =()=>{

    return(
        <div className={styles.container_about}>
            <div className={styles.pic_info}>
                <div className={styles.left_side}>
                    <div className={styles.image_layout}>
                        <img src={houseMainPhoto} alt="house_photo" />
                    </div>
                    <div className={`${styles.client_panel} ${styles.bg_grey}`}>
                        <div className={styles.left_client_panel}>
                            <img src={ava} alt="ava" />
                            <div className={styles.client_info}>
                                <h4 className={styles.client_name}>Joniber Qarshiyev</h4>
                                <p className={styles.client_phone_number}>+99890***6263</p>
                            </div>
                        </div>
                        <div className={styles.right_client_panel}>
                            <button className={styles.btn1}>Muallifga yozish</button>
                            <button className={styles.btn2}>Telefon qilish</button>
                        </div>
                    </div>
                </div>
                <div className={styles.title_details}>
                    <h2 className={styles.title_title_details}>2-xonali kvartira sotiladi // Barcha sharoitlar mujassam</h2>
                    <div className={styles.display}>
                        <p className={styles.price}>Narxi:</p>
                        <p className={styles.price_number}>684 800 000 so'm</p>
                    </div>
                    <div>
                    <div className={`${styles.display} ${styles.padding_8px}`}>
                        <p className={`${styles.name_description} ${styles.bg_grey}`}><RiDashboardLine className={styles.icon}/>Xonalar soni:</p>
                        <p className={`${styles.value_description} ${styles.bg_grey}`}>2 ta</p>
                    </div>
                    <div className={`${styles.display} ${styles.padding_8px}`}>
                        <p className={`${styles.name_description} ${styles.bg_grey}`}><RiRuler2Line className={styles.icon}/>Maydoni k/m²:</p>
                        <p className={`${styles.value_description} ${styles.bg_grey}`}>64.3m²</p>
                    </div>
                    <div className={`${styles.display} ${styles.padding_8px}`}>
                        <p className={`${styles.name_description} ${styles.bg_grey}`}><BsHouseDoor className={styles.icon} />Qavati:</p>
                        <p className={`${styles.value_description} ${styles.bg_grey}`}>4-qavat</p>
                    </div>
                    <div className={`${styles.display} ${styles.padding_8px}`}>
                        <p className={`${styles.name_description} ${styles.bg_grey}`}><ImPaintFormat className={styles.icon} />Qurilishda ishlatilgan:</p>
                        <p className={`${styles.value_description} ${styles.bg_grey}`}>Beton bloklari</p>
                    </div>
                    <div className={`${styles.display} ${styles.padding_8px}`}>
                        <p className={`${styles.name_description} ${styles.bg_grey}`}><RiFlag2Line className={styles.icon} />Manzili:</p>
                        <p className={`${styles.value_description} ${styles.bg_grey}`}>Toshkent shahri, Chilonzor...</p>
                    </div>
                    </div>
                    <div>
                        <div className={`${styles.bg_grey} ${styles.extra_info}`}>
                            <p><IoInformationCircleOutline className={styles.icon} /> Qo’shimcha ma’lumot :</p>
                        </div>
                        <div className={`${styles.bg_grey} ${styles.info}`}>
                            <p>Juda ajoyib uy maza qilib yashash mumkin. Evro remont qilinagan barcha qulayliklar bor. Uyni maqtamiman suratlari orqali ham qanday yaxshi uy ekanligini bilib olasiz.</p>
                            <br />
                            <p>Uyni bo’lib to’lashga ham kelishamiz, oldindan 50% to’lov qilingandan keyin bo’lib to’lashga gaplashsak bo’ladi.</p>
                            <br />
                            <button className={styles.filter_btn}>
                                Ko’proq o’qish
                                <IoMdArrowDropdown className={styles.icon}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.map}>
                <h2 className={styles.title_map}>Uy-joyni manzilini xaritada ko’rish</h2>
                <div className={styles.map_box}>
                <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
                </div>
            </div>
            <div className={styles.other_announcement}>
                <h2 className={styles.announcement_title}>Shu kabi e’lonlar</h2>
                <button className={styles.btn_all}>Barchasi <IoIosArrowForward /></button>
            </div>
        </div>
    )
}
export default About;