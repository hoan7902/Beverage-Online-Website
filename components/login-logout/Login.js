import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from '../../styles/Login.module.css';
import Logo from '../../assets/image/vietnam-flag.png';
export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pass, setPass] = useState("");
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handlePassChange = (e) => {
        setPass(e.target.value);
    };
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const handleHidePassword = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles["auth-form-container-login"]}>
            <form onSubmit={handleSubmit} className={styles.login}>
                <h2 className={styles.title}>Đăng nhập</h2>
                <div className={styles["phone-number"]}>
                    <span id={styles["phone-size"]}>Số điện thoại</span>
                    <div className={styles["phone-number-input-logo"]}>
                        <div className={styles.phone}>
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
                <div className={styles["pass-word"]}>
                    <span id={styles["phone-size"]}>Mật khẩu</span>
                    <div className={styles["pass-word-input"]}>
                        <span className={styles["pass-word-input-hide"]}>
                            <input
                                className={styles["pass-input"]}
                                value={pass}
                                onChange={handlePassChange}
                                type={type}
                            />
                            <Icon
                                className={styles["pass-word-icon"]}
                                onClick={handleHidePassword}
                                icon={icon}
                            />
                        </span>
                    </div>
                </div>
                <span className={`${styles["min-text-gray"]} ${styles["min-text"]}`}>
                    Quên mật khẩu?
                    <a href="/misspassword" className={`${styles["forward"]} ${styles["min-text"]}`}>
                        Cài đặt lại mật khẩu
                    </a>
                </span>
                <button type="submit" className={styles["Orange_Button"]}>
                    <span>Đăng nhập</span>
                </button>
            </form>
            <div className={styles["note"]}>
            <span className={styles["medium-text"]}>
                Chưa có tài khoản?
                <a href="/register" className={styles.forward}>
                    Đăng ký
                </a>
            </span>
            </div>
            
        </div>
    );
}
