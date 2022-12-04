import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {useFormik } from "formik";
import * as Yup from 'yup';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function MissPassword() {
   const [open, setOpen] = useState(false);
   const [typeMess, setTypeMess] = useState("");
   const [message, setMessage] = useState("");
   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }
     setOpen(false);
   };
  const formik = useFormik({
    initialValues: {
      phone: "",
      pass: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Hãy nhập số điện thoại")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
          "Số điện thoại không hợp lệ"
        ),
    }),  
    onSubmit: (values) => {
      console.log(values);
      },
  });
  const APIForgetPass = () => {
    fetch("http://localhost:3000/user/forgot-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.code==119)
        {
          setTypeMess("success");
          setMessage("Mật khẩu đã được gửi đến số điện thoại của bạn");
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
         <Alert onClose={handleClose} severity={typeMess} sx={{ width: "100%" }}>
           {message}
         </Alert>
       </Snackbar>
      <form onSubmit={formik.handleSubmit}>
        <h2 className={styles.title}>Quên mật khẩu</h2>
        <div>
          <span className={styles["min-text-block"]}>
            Chỉ cần nhập số điện thoại của bạn và bấm vào nút &quot;Gửi&quot;,
            chúng tôi sẽ gửi mật khẩu tạm thời đến số điện thoại của bạn ngay
            lập tức
          </span>
        </div>
        <div style={{marginTop:"20px"}}>
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
                    type="text"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                 />
                </div>
             </div>
           </div>
           <div style={{height:"10px",position:"relative"}}>
           {formik.errors.phone && (
          <p style={{color:"#ff4d4f",fontSize:"14px",position:'absolute',bottom:"-12px",left:"0"}}> {formik.errors.phone} </p>
        )}
        </div>
        <button type="submit" className={styles["Orange_Button"]} onClick={APIForgetPass}>
          <span>Gửi</span>
        </button>
      </form>
    </div>
  );
}
