import React, { useState, createContext, useContext } from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../contexts/AppProvider";
const PassWord = ({ name }) => {
  const { pass, setPass } = useContext(PassContext);
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
};
export const PassContext = createContext();
export default function Login() {
  const router = useRouter();
  const { setUser } = useAppContext();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pass, setPass] = useState("");
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // creates entity
    fetch("https://sleepy-scrubland-61892.herokuapp.com/user/login-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        password: pass,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response.data.user);
        if (response.code == 102) {
          // message.success("Đăng nhập thành công");
          router.push("/", "/");
        }
        // else if(response.code==103){
        //   message.error("Đăng nhập thất bại, mật khẩu không chính xác");
        // }
        // else if(response.code==110){
        //   message.error("Người dùng không tồn tại, vui lòng đăng ký");
        // }
        localStorage.setItem("_id", response.data.user._id);
        localStorage.setItem("phoneNumber", response.data.user.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <PassContext.Provider value={{ pass, setPass }}>
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
          <PassWord name="Mật Khẩu" />

          <span className={`${styles["min-text-gray"]} ${styles["min-text"]}`}>
            Quên mật khẩu?
            <Link href="/misspassword">
              <p className={styles["small-link"]}>Cài đặt lại mật khẩu</p>
            </Link>
          </span>
          <button type="submit" className={styles["Orange_Button"]}>
            <span>Đăng nhập</span>
          </button>
        </form>
        <div className={styles["note"]}>
          <span className={styles["medium-text"]}>
            Chưa có tài khoản?
            <Link href="/register">
              <p className={styles["custom-link"]}>Đăng ký</p>
            </Link>
          </span>
        </div>
      </div>
    </PassContext.Provider>
  );
}
