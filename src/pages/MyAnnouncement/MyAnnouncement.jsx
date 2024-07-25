import styles from "../MyAnnouncement/MyAnnouncement.module.css";
import image from "../../../public/assets/photo/Default.svg";
import { RiDashboardLine } from "react-icons/ri";
import { RiRuler2Line } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";

const MyAnnouncement = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left_side}>
                <h2 className={styles.title_left_side}>E’lonlarim</h2>
                <div className={styles.categories}>
                    <h3 className={styles.title_categories}>E’lonlarim bo’yicha saralash</h3>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxLabel}>
                            <input type="radio" name="filter" id="all" className={styles.radioCustom} />
                            <span className={styles.checkmark}></span>
                            Hammasi <span>(10)</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="radio" name="filter" id="active" className={styles.radioCustom} />
                            <span className={styles.checkmark}></span>
                            Faol e’lonlarim <span>(3)</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="radio" name="filter" id="pending" className={styles.radioCustom} />
                            <span className={styles.checkmark}></span>
                            Kutilayotgan e’lonlarim <span>(1)</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="radio" name="filter" id="inactive" className={styles.radioCustom} />
                            <span className={styles.checkmark}></span>
                            Nofaol e’lonlarim <span>(6)</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="radio" name="filter" id="rejected" className={styles.radioCustom} />
                            <span className={styles.checkmark}></span>
                            Rad etilgan e’lonlarim <span></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className={styles.right_side}>
                <div className={styles.card}>
                    <div className={styles.image_side}>
                        <img src={image} alt="house" />
                    </div>
                    <div className={styles.justify}>
                        <div className={styles.info_side}>
                            <span className={`${styles.status} ${styles.status_active}`}>E’loningiz faol</span>
                            <div className={styles.address}>
                                <p className={styles.address_grey}>Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <p className={styles.address_black}>4-xonali kvartira ijaraga beriladi // Oila uchun</p>
                            </div>
                            <div className={styles.icons}>
                                <p><RiDashboardLine className={styles.icon}/>3 xona</p>
                                <p><RiRuler2Line className={styles.icon}/>64.3m²</p>
                                <p><BsHouseDoor className={styles.icon} />4-qavat</p>
                            </div>
                            <p className={styles.price}>6 931 836 so'm/oy</p>
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.btn1}>E’lonni yakunlash</button>
                            <button className={styles.btn2}>Tahrirlash</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_side}>
                        <img src={image} alt="house" />
                    </div>
                    <div className={styles.justify}>
                        <div className={styles.info_side}>
                            <span className={`${styles.status} ${styles.status_pending}`}>E’loningiz tasdiqlanishi kutilmoqda</span>
                            <div className={styles.address}>
                                <p className={styles.address_grey}>Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <p className={styles.address_black}>4-xonali kvartira ijaraga beriladi // Oila uchun</p>
                            </div>
                            <div className={styles.icons}>
                                <p><RiDashboardLine className={styles.icon}/>3 xona</p>
                                <p><RiRuler2Line className={styles.icon}/>64.3m²</p>
                                <p><BsHouseDoor className={styles.icon} />4-qavat</p>
                            </div>
                            <p className={styles.price}>6 931 836 so'm/oy</p>
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.btn1}>E’lonni yakunlash</button>
                            <button className={styles.btn2}>Tahrirlash</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_side}>
                        <img src={image} alt="house" />
                    </div>
                    <div className={styles.justify}>
                        <div className={styles.info_side}>
                            <span className={`${styles.status} ${styles.status_notactive}`}>E’loningiz nofaol</span>
                            <div className={styles.address}>
                                <p className={styles.address_grey}>Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <p className={styles.address_black}>4-xonali kvartira ijaraga beriladi // Oila uchun</p>
                            </div>
                            <div className={styles.icons}>
                                <p><RiDashboardLine className={styles.icon}/>3 xona</p>
                                <p><RiRuler2Line className={styles.icon}/>64.3m²</p>
                                <p><BsHouseDoor className={styles.icon} />4-qavat</p>
                            </div>
                            <p className={styles.price}>6 931 836 so'm/oy</p>
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.btn1}>E’lonni yakunlash</button>
                            <button className={styles.btn2}>Tahrirlash</button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.image_side}>
                        <img src={image} alt="house" />
                    </div>
                    <div className={styles.justify}>
                        <div className={styles.info_side}>
                            <span className={`${styles.status} ${styles.status_rejected}`}>E’loningiz rad etildi</span>
                            <div className={styles.address}>
                                <p className={styles.address_grey}>Toshkent shahri, Yunusabot tumani 14-kvartal</p>
                                <p className={styles.address_black}>4-xonali kvartira ijaraga beriladi // Oila uchun</p>
                            </div>
                            <div className={styles.icons}>
                                <p><RiDashboardLine className={styles.icon}/>3 xona</p>
                                <p><RiRuler2Line className={styles.icon}/>64.3m²</p>
                                <p><BsHouseDoor className={styles.icon} />4-qavat</p>
                            </div>
                            <p className={styles.price}>6 931 836 so'm/oy</p>
                        </div>
                        <div className={styles.btns}>
                            <button className={styles.btn1}>E’lonni yakunlash</button>
                            <button className={styles.btn2}>Tahrirlash</button>
                        </div>
                    </div>
                </div>
                {/* Repeat the card block for other statuses */}
            </div>
        </div>
    );
};

export default MyAnnouncement;
