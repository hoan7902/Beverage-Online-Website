import React, { useState, useEffect} from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Image from "next/image";
import styles from "../../styles/Login.module.css";
import Logo from "../../assets/image/vietnam-flag.png";
import Link from "next/link";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/router";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Register(){
   const router = useRouter();
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
        confirmedPassword: Yup.string()
        .required("Hãy nhập lại mật khẩu")
        .oneOf([Yup.ref("pass"), null], "Mật khẩu và xác thực mật khẩu không đúng"),
    }),  
    onSubmit: (values) => {
      console.log(values);
      },
  });
  const [isValid,setIsValid]=useState(false);
  useEffect(()=>{
    if(formik.errors.pass||formik.errors.phone||formik.errors.confirmedPassword)
    {
      setIsValid(false);
    }
    else setIsValid(true);
  },[formik.errors.pass,formik.errors.phone,formik.errors.confirmedPassword])
  const APIRegister=()=>{
     fetch("http://localhost:3000/user/create-user", {
       method: "POST",
       headers: {
         "content-type": "application/json",
         accept: "application/json",
       },
       body: JSON.stringify({
         phoneNumber: formik.values.phone,
         password: formik.values,
       }),
     })
       .then((response) => response.json())
       .then((response) => {
        if(response.code==118||response.code==111)
        {
          setTypeMess("warning");
          setMessage("Vui lòng xác thực");
          setOpen(true);
          router.push("/authentication");
        }
        else if(response.code==112)
        {
          setTypeMess("error");
          setMessage("Số điện thoại đã sử dụng");
          setOpen(true);
        }
         localStorage.setItem("phoneNumber", response.data.user.phoneNumber);
       })
       .catch((err) => {
         console.log(err);
       });
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
   const [typeNew, setTypeNew] = useState("password");
   const [iconNew, setIconNew] = useState(eyeOff);
   const handleHidePasswordNew = () => {
     if (typeNew === "password") {
       setIconNew(eye);
       setTypeNew("text");
     } else {
       setIconNew(eyeOff);
       setTypeNew("password");
     }
   };
  return (
    <section className={styles["auth-form-container-register"]}>
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
      <form onSubmit={formik.handleSubmit} className={styles["register"]}>
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
          <span id={styles["medium-text-icon"]}>Mật khẩu</span>
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
     <div className={styles["pass-word"]}>
          <span id={styles["medium-text-icon"]}>Nhập lại mật khẩu</span>
          <div className={styles["pass-word-input"]}>
         <span className={styles["pass-word-input-hide"]}>
         <input
          className={styles["pass-input"]}
          type={typeNew}
          id="confirmedPassword"
          name="confirmedPassword"
          value={formik.values.confirmedPassword}
          onChange={formik.handleChange}
        />
        <Icon
             className={styles["pass-word-icon"]}
             onClick={handleHidePasswordNew}
             icon={iconNew}
           />
         </span>
         
       </div>
     </div>
     <div style={{height:"10px",position:"relative"}}>
           {formik.errors.confirmedPassword && (
          <p style={{color:"#ff4d4f",fontSize:"14px",position:'absolute',bottom:"-16px",left:"0"}}> {formik.errors.confirmedPassword} </p>
          
        )}
     </div>
     <div style={{marginTop:"10px"}}>
     <span className={styles["min-text"]}>
               Vui lòng nhấn &quot;Tiếp theo&quot; để nhận mã xác thực. Mã xác
               thực sẽ được gửi đến tin nhắn điện thoại của bạn
             </span>
     </div>
             
             <button type="submit" className={styles["Orange_Button"]} disabled={!isValid} onClick={APIRegister}>
               Tiếp theo
             </button>
      </form>
           <div className={styles["note"]}>
             <span style={{ display: "flex" }}>
               Đã có tài khoản?
               <Link href="/login">
                 <p
                   className={styles["custom-link"]}
                   style={{ color: "orange" }}
                 >
                   Đăng nhập
                 </p>
               </Link>
             </span>
           </div>
    </section>
  );
};
export default Register;