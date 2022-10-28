import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Image from "next/image";
import styles from '../../styles/Login.module.css';
import Logo from '../../assets/image/vietnam-flag.png';
const PassWord=({name})=>{
    const [pass, setPass] = useState('');
    
    const handlePassChange = (e) => {
      
        setPass(e.target.value);
    };
    const [type, setType] = useState("");
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
    return (
            <div className={styles["pass-word"]}>
                    <span id={styles["medium-text-icon"]}>{name}</span>
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
        
                
    );
}
export default function Register() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className={styles["auth-form-container-register"]}>
            <form onSubmit={handleSubmit} className={styles["register"]}>
                <h2 className={styles.title}>Đăng ký</h2>
                <div className={styles["phone-number"]}>
                    <span id={styles["medium-text-icon"]}>Số điện thoại</span>
                    <div className={styles["phone-number-input-logo"]}>
                        <div className={styles.phone}>
                            <span className={styles["logo-number"]}>
                                <Image
                                    className="phone-image"
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
                <PassWord name="Mật khẩu"/>
                <PassWord name="Nhập lại mật khẩu"/>
                <span className={styles["min-text"]}>
                    Vui lòng nhấn "Tiếp theo" để nhận mã xác thực. Mã
                    xác thực sẽ được gửi đến tin nhắn điện thoại của bạn
                </span>
                <button type="submit" className={styles["Orange_Button"]}>
                    <span>Tiếp theo</span>
                </button>
                
            </form>
            <div className={styles["note"]}>
            <span>
                    Đã có tài khoản?
                    <a href="/login" className={styles.forward}>
                        Đăng nhập
                    </a>
                </span>
            </div>
           
        </div>
    );
}
