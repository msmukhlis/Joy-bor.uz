import styles from "../Announcement/announcement.module.css";
import image from "../../../public/assets/photo/download.image.icon.svg"
import { useState } from "react";

const Announcement = () => {
   
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };

    return (
        <div className={styles.container_announcement}>
            <form className={styles.form}>
                <div className={styles.left_side}>
                    <label className={styles.label}>
                        E’lon sarlavhasini kiriting
                        <input type="text" placeholder="Ma’lumotni kiriting" />
                    </label>
                    <label className={styles.label}>
                        Xonalar sonini kiriting
                        <input type="number" placeholder="Ma’lumotni kiriting" />
                    </label>
                    <label className={styles.label}>
                        Uy maydonini kiriting
                        <input type="text" placeholder="Ma’lumotni kiriting" />
                    </label>
                    <label className={styles.label}>
                        Nechanchi qavatda joylashgan?
                        <input type="number" placeholder="Ma’lumotni kiriting" />
                    </label>
                    <label className={styles.label}>
                        Uy manzilini kiriting
                        <div className={styles.selects}>
                            <select>
                                <option value="" disabled>Viloyatni tanlang</option>
                                <option value="1">Toshkent</option>
                                <option value="2">Samarqand</option>
                            </select>
                            <select>
                                <option value="" disabled>Tuman yoki shaharni tanlang</option>
                                <option value="1">Mirobod tumani</option>
                                <option value="2">Yakkasaroy tumani</option>
                            </select>
                        </div>
                        <input type="text" placeholder="Uy manzilini kiriting" />
                    </label>
                </div>
                <div className={styles.right_side}>
                    <div className={styles.checkbox_box}>
                        <p>Uyni kim uchun berasiz? (Kategoriyadan tanlang)</p>
                        <div className={styles.inputs}>
                            <label>
                                <input type="checkbox" />
                                Barcha uchun
                            </label>
                            <label>
                                <input type="checkbox" />
                                Oila uchun
                            </label>
                            <label>
                                <input type="checkbox" />
                                Talabalarga
                            </label>
                            <label>
                                <input type="checkbox" />
                                Qizlarga
                            </label>
                            <label>
                                <input type="checkbox" />
                                Yigitlarga
                            </label>
                            <label>
                                <input type="checkbox" />
                                Qolganlari keladi...
                            </label>
                        </div>
                    </div>
                    <label>
                        Uyning remont holati
                        <select className={styles.right_select}>
                            <option value="" disabled>Ma'lumotni tanlang</option>
                            <option value="1">Euro remont</option>
                            <option value="2">without remont</option>
                        </select>
                    </label>
                    <label>
                        Qurilishda ishlatilgan
                        <select className={styles.right_select}>
                            <option value="" disabled>Ma'lumotni tanlang</option>
                            <option value="1">Euro remont</option>
                            <option value="2">without remont</option>
                        </select>
                    </label>
                    <label>
                        Uy narxini kiriting
                        <input className={styles.right_select} type="text" placeholder="Ma'lumotni kiriting" />
                    </label>
                </div>
            </form>
            <div className={styles.map}>
                <h2 className={styles.title_map}>Uy-joyni manzilini xaritada ko’rish</h2>
                <div className={styles.map_box}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        title="Google Map"
                    >
                        <a href="https://www.gps.ie/">gps tracker sport</a>
                    </iframe>
                </div>
            </div>
            <div className={styles.footer_side}>
                <div className={styles.left_footer}>
                    <p className={styles.title_left_footer}>Xonadon rasmlarini yuklang</p>
                   <div className={styles.files}>
                   <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className={styles.file_upload}>
                        <img src={image} alt="upload" />
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                    </div>
                   </div>
                </div>
                <div className={styles.right_footer}>
                    <p className={styles.title_right_footer}>Qo’shimcha ma’lumot kiriting</p>
                    <textarea className={styles.textarea} placeholder="Ma'lumotni kiriting"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Announcement;
