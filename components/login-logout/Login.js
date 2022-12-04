import React, { useState,useEffect} from "react";
import Image from "next/image";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppContext } from "../../contexts/AppProvider";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import {useFormik } from "formik";
import * as Yup from 'yup';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login(){
   const router = useRouter();
   const { setUser } = useAppContext();
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
      pass: Yup.string()
        .required("Hãy nhập mật khẩu")
        .matches(
          /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,"Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
        ),
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
  const [isValid,setIsValid]=useState(false);
  useEffect(()=>{
    if(formik.errors.pass||formik.errors.phone)
    {
      setIsValid(false);
    }
    else setIsValid(true);
  },[formik.errors.pass,formik.errors.phone])
  const APILogin=()=>{
    fetch("http://localhost:3000/user/login-user", {
       method: "POST",
       headers: {
         "content-type": "application/json",
         accept: "application/json",
       },
       body: JSON.stringify({
         phoneNumber: formik.values.phone,
         password: formik.values.pass,
       }),
     })
       .then((response) => response.json())
       .then((response) => {
         if (response.code == 102) {
           setTypeMess("success");
           setMessage("Đăng nhập thành công");
           setOpen(true);
           router.push("/", "/");
         }
         else if (response.code == 103) {
           
            setTypeMess("error")
            setMessage("Vui lòng nhập lại mật khẩu, mật khẩu không chính xác");
            setOpen(true);
         } 
         else if (response.code == 110&&formik.values.pass!=""&&formik.phone!="") {
              setTypeMess("error");
              setMessage("Người dùng không tồn tại, vui lòng đăng ký");
              setOpen(true);
          }
         else if (response.code == 101) {
           setTypeMess("error");
           setMessage("Tài khoản chưa xác thực");
           router.push("/authentication", "/authentication");
         }
         setUser(response.data.user);
         localStorage.setItem("_id", response.data.user._id);
         localStorage.setItem("phoneNumber", response.data.user.phoneNumber);
       })
       .catch((err) => {
         console.log(err);
       });
  }
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
  return (
    <section className={styles["auth-form-container-login"]}>
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
      <form  onSubmit={formik.handleSubmit} className={styles["login"]}>    
      <label className={styles["title"]}>Đăng nhập</label>
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
     <div className={styles["pass-word"]}>
       <span id={styles["pass-word-size"]}>Mật khẩu</span>
       <div className={styles["pass-word-input"]}>
         <span className={styles["pass-word-input-hide"]}>
         <input
          className={styles["pass-input"]}
          type={type}
          id="pass"
          name="pass"
          value={formik.values.pass}
          onChange={formik.handleChange}
        />
        <Icon
             className={styles["pass-word-icon"]}
             onClick={handleHidePassword}
             icon={icon}
           />
         </span>
      </div>
     </div>
     <div style={{height:"10px",position:"relative"}}>
           {formik.errors.pass && (
          <p style={{color:"#ff4d4f",fontSize:"14px",position:'absolute',bottom:"-16px",left:"0"}}> {formik.errors.pass} </p>
          
        )}
     </div>
    <span className={`${styles["min-text-gray"]} ${styles["min-text"]}`}>
             Quên mật khẩu?
             <Link href="/misspassword">
               <p className={styles["small-link"]}>Cài đặt lại mật khẩu</p>
             </Link>
           </span>
           <button className={styles["Orange_Button"]} type="submit" onClick={APILogin} disabled={!isValid}>Đăng nhập</button>
      </form>
        <div className={styles["note"]}>
          <span className={styles["medium-text"]}>
            Chưa có tài khoản?
            <Link href="/register">
              <p className={styles["custom-link"]}>Đăng ký</p>
            </Link>
          </span>
        </div>
    </section>
  );
};
export default Login;