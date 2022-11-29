import React, { useState } from "react";
import styles from "../../styles/Login.module.css";
export default function Authentication() {
  const [code, setCode] = useState("");
  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sleepy-scrubland-61892.herokuapp.com/user/verify-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: localStorage.getItem("phoneNumber"),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles["auth-form-container-miss-password"]}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Xác thực số điện thoại</h2>
        <div>
          <span className={styles["min-text-block"]}>
            Vui lòng nhập mã được gửi đến số điện thoại để xác thực và sau đó
            nhấn nút &quot;Gửi&quot;.
          </span>
        </div>
        <div className={styles["pass-word"]}>
          <span id={styles["medium-text-icon"]}>Mã xác thực</span>
          <div className={styles["pass-word-input"]}>
            <span className={styles["pass-word-input-hide"]}>
              <input
                className={styles["pass-input"]}
                value={code}
                onChange={handleCodeChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <button type="submit" className={styles["Orange_Button"]}>
          <span>Gửi</span>
        </button>
      </form>
    </div>
  );
}
