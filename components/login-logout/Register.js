import React, { useState, createContext, useContext } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
import Link from "next/link";
import styled from "styled-components";

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
const ConFirmPassWord = ({ name }) => {
  const { confirmpass, setConFirmPass } = useContext(ConFirmPassContext);
  const handelConFirmPassChange = (e) => {
    setConFirmPass(e.target.value);
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
            value={confirmpass}
            onChange={handelConFirmPassChange}
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
export const ConFirmPassContext = createContext();
export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const [pass, setPass] = useState("");
  const [confirmpass, setConFirmPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sleepy-scrubland-61892.herokuapp.com/user/create-user", {
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
        console.log(response);
        localStorage.setItem("phoneNumber", response.data.user.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <PassContext.Provider value={{ pass, setPass }}>
      <ConFirmPassContext.Provider value={{ confirmpass, setConFirmPass }}>
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

            <PassWord name="Mật khẩu" />
            <ConFirmPassWord name="Nhập lại mật khẩu" />

            <span className={styles["min-text"]}>
              Vui lòng nhấn &quot;Tiếp theo&quot; để nhận mã xác thực. Mã xác
              thực sẽ được gửi đến tin nhắn điện thoại của bạn
            </span>
            <button type="submit" className={styles["Orange_Button"]}>
              <Link href="/authentication">Tiếp theo</Link>
            </button>
          </form>
          <div className={styles["note"]}>
            <span style={{ display: "flex" }}>
              Đã có tài khoản?
              <Link href="/login">
                <CustomLink style={{ color: "orange" }}>Đăng nhập</CustomLink>
              </Link>
            </span>
          </div>
        </div>
      </ConFirmPassContext.Provider>
    </PassContext.Provider>
  );
}
const CustomLink = styled.p`
  padding-left: 5px;
  color: rgb(235, 113, 0);
  font-size: 16px;
  text-decoration: none;
  margin: 0;
  cursor: pointer;
`;
