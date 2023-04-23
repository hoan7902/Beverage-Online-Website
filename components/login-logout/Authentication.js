import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Authentication() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Hãy nhập mã xác thực")
        .matches(/^[0-9]+$/, "Mã xác thực chỉ bao gồm chữ số")
        .min(6, "Mã xác thực có chính xác 6 chữ số")
        .max(6, "Mã xác thực có chính xác 6 chữ số"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (formik.errors.code) {
      setIsValid(false);
    } else setIsValid(true);
  }, [formik.errors.code]);
  const router = useRouter();
  const APIAuth = () => {
    fetch("https://beverage-store7902.onrender.com/user/verify-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: localStorage.getItem("phoneNumber"),
        code: Number(formik.values.code),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 116) {
          router.push("/");
        } else {
          setType("error");
          setMessage("Đăng nhập thất bại, mã xác thực không đúng");
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles["auth-form-container-miss-password"]}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.code}
                id="code"
                name="code"
                onChange={formik.handleChange}
                type="text"
              />
            </span>
          </div>
        </div>
        <div style={{ height: "10px", position: "relative" }}>
          {formik.errors.code && (
            <p
              style={{
                color: "#ff4d4f",
                fontSize: "14px",
                position: "absolute",
                bottom: "-18px",
                left: "0",
              }}
            >
              {" "}
              {formik.errors.code}{" "}
            </p>
          )}
        </div>
        <button
          type="submit"
          className={styles["Orange_Button"]}
          onClick={APIAuth}
          disabled={!isValid}
        >
          <span>Gửi</span>
        </button>
      </form>
    </div>
  );
}
