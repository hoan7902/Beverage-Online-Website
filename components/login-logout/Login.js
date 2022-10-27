import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pass, setPass] = useState("");
    // Function to handle phone number change
    const handlePhoneChange = (e) => {
        setPhoneNumberError("");
        setPhoneNumber(e.target.value);
    };
    // Function to handle password change
    const handlePassChange = (e) => {
        setPassError("");
        setPass(e.target.value);
    };
    // Function to hide or show password
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
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [passError, setPassError] = useState("");
    // Function to handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (phoneNumber !== "") {
            const phoneNumberRegex =
                /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;
            if (phoneNumberRegex.test(phoneNumber)) {
                setPhoneNumberError("");
            } else {
                setPhoneNumberError("Số điện thoại không hợp lệ");
            }
        } else {
            setPhoneNumberError("Hãy nhập số điện thoại");
        }
        if (pass !== "") {
        } else {
            setPassError("Hãy nhập mật khẩu");
        }
    };

    return (
        <div className="auth-form-container-login">
            <form onSubmit={handleSubmit} className="login">
                <h2>Đăng nhập</h2>
                <div className="phone-number">
                    <span id="phone-size">Số điện thoại</span>
                    <div className="phone-number-input-logo">
                        <div className="phone">
                            <span className="logo-number">
                                <Image
                                    className="phone-image"
                                    src="https://flyfood.vn/static/img/vietnam-flag.png"
                                    alt="Logo Việt Nam"
                                />
                                <span>+84</span>
                            </span>
                            <input
                                className="phone-input"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                type="text"
                            />
                        </div>
                        <div className="error">
                            {phoneNumberError && (
                                <div className="phone-number-error">
                                    {phoneNumberError}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pass-word">
                    <span id="pass-word-size">Mật khẩu</span>
                    <div className="pass-word-input">
                        <span className="pass-word-input--hide">
                            <input
                                className="pass-input"
                                value={pass}
                                onChange={handlePassChange}
                                type={type}
                            />
                            <Icon
                                className="pass-word-icon"
                                onClick={handleHidePassword}
                                icon={icon}
                            />
                        </span>
                    </div>
                    {passError && (
                        <div className="phone-number-error">{passError}</div>
                    )}
                </div>
                <span className="min-text-gray min-text">
                    Quên mật khẩu?
                    <a href="/misspassword" className="forward min-text">
                        Cài đặt lại mật khẩu
                    </a>
                </span>
                <button type="submit" className="Orange_Button">
                    <span>Đăng nhập</span>
                </button>
            </form>
            <span className="medium-text">
                Chưa có tài khoản?
                <a href="/register" className="forward">
                    Đăng ký
                </a>
            </span>
        </div>
    );
}
