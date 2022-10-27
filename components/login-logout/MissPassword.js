import React, { useState } from "react";
import Image from "next/image";
export default function MissPassword() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const handlePhoneChange = (e) => {
        setPhoneNumberError("");
        setPhoneNumber(e.target.value);
    };
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
    };
    return (
        <div className="auth-form-container-miss-password">
            <form onSubmit={handleSubmit}>
                <h2>Quên mật khẩu</h2>
                <span className="min-text-block">
                    Chỉ cần nhập số điện thoại của bạn và bấm vào nút
                    &quotGửi&quot, chúng tôi sẽ gửi mật khẩu tạm thời đến số
                    điện thoại của bạn ngay lập tức
                </span>
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
                <button type="submit" className="Orange_Button">
                    <span>Gửi</span>
                </button>
            </form>
        </div>
    );
}
