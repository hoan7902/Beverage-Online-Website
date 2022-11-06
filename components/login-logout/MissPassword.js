import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
export default function MissPassword() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles["auth-form-container-miss-password"]}>
            <form onSubmit={handleSubmit}>
                <h2 className={styles.title}>Quên mật khẩu</h2>
                <div>
                    <span className={styles["min-text-block"]}>
                        {`Chỉ cần nhập số điện thoại của bạn và bấm vào nút
                        "Gửi", chúng tôi sẽ gửi mật khẩu tạm thời đến số
                        điện thoại của bạn ngay lập tức`}
                    </span>
                </div>
                <div className={styles["phone-number"]}>
                    <div>
                        <span id={styles["phone-size"]}>Số điện thoại</span>
                    </div>
                    <div className={styles["phone-number-input-logo"]}>
                        <div className={styles["phone"]}>
                            <span className={styles["logo-number"]}>
                                <Image
                                    className={styles["phone-image"]}
                                    src={Logo}
                                    alt="Logo Việt Nam"
                                />
                                <span>+84</span>
                            </span>
                            <input
                                className={styles["phone-input"]}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className={styles["Orange_Button"]}>
                    <span>Gửi</span>
                </button>
            </form>
        </div>
    );
}
