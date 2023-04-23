import React, { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from "../../styles/Login.module.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import style from "../../styles/Profile.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function ChangePassWord({ setOpen, handleClose }) {
  const [openMess, setOpenMess] = useState(false);
  const [typeMess, setTypeMess] = useState("");
  const [message, setMessage] = useState("");
  const handleCloseMess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMess(false);
  };
  const formik = useFormik({
    initialValues: {
      pass: "",
      newPass: "",
      confirmNewPass: "",
    },
    validationSchema: Yup.object({
      pass: Yup.string()
        .required("Hãy nhập mật khẩu hiện tại")
        .matches(
          /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
          "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
        ),
      newPass: Yup.string()
        .required("Hãy nhập mật khẩu mới")

        .matches(
          /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/,
          "Mật khẩu từ phải từ 8 kí tự trở lên, gồm một chữ thường và một số"
        ),
      confirmNewPass: Yup.string()
        .required("Hãy nhập lại mật khẩu mới")
        .oneOf(
          [Yup.ref("newPass"), null],
          "Mật khẩu mới và xác thực mật khẩu mới không đúng"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (
      formik.errors.pass ||
      formik.errors.newPass ||
      formik.errors.confirmNewPass
    ) {
      setIsValid(false);
    } else setIsValid(true);
  }, [formik.errors.pass, formik.errors.newPass, formik.errors.confirmNewPass]);
  const ChangePassAPI = () => {
    fetch("https://beverage-store7902.onrender.com/user/change-user-password", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: localStorage.getItem("phoneNumber"),
        password: formik.values.pass,
        newPassword: formik.values.newPass,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code == 112) {
          setTypeMess("success");
          setMessage("Thay đổi mật khẩu thành công");
          setOpenMess(true);
          setTimeout(() => {
            setOpen(false);
          }, 1000);
        } else if (response.code == 113) {
          setTypeMess("error");
          setMessage("Mật khẩu mới và mật khẩu hiện tại phải khác nhau");
          setOpenMess(true);
        } else if (
          response.code == 114 &&
          formik.values.pass != "" &&
          formik.values.newPass != "" &&
          formik.values.confirmNewPass != ""
        ) {
          setTypeMess("error");
          setMessage("Mật khẩu không đúng, vui lòng nhập lại mật khẩu");
          setOpenMess(true);
        }
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
  const [typeCon, setTypeCon] = useState("password");
  const [iconCon, setIconCon] = useState(eyeOff);
  const handleHidePasswordCon = () => {
    if (typeCon === "password") {
      setIconCon(eye);
      setTypeCon("text");
    } else {
      setIconCon(eyeOff);
      setTypeCon("password");
    }
  };
  return (
    <section>
      <Snackbar
        open={openMess}
        autoHideDuration={2000}
        onClose={handleCloseMess}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseMess}
          severity={typeMess}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <form onSubmit={formik.handleSubmit}>
        <div className={style["modal-container"]}>
          <div className={style["modal-content"]}>
            <div className={style["modal-title"]}>
              <p className={style["title-form"]}>Đổi mật khẩu</p>
              <p className={style["modal-close"]} onClick={handleClose}>
                X
              </p>
            </div>
            <div className={styles["pass-word"]}>
              <span id={styles["medium-text-icon"]}>Mật khẩu hiện tại</span>
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
              <div
                style={{
                  height: "15px",
                  position: "relative",
                  marginBottom: "5px",
                }}
              >
                {formik.errors.pass && (
                  <p
                    style={{
                      color: "#ff4d4f",
                      fontSize: "14px",
                      position: "absolute",
                      bottom: "-20px",
                      left: "0",
                    }}
                  >
                    {" "}
                    {formik.errors.pass}{" "}
                  </p>
                )}
              </div>
              <div className={styles["pass-word"]}>
                <span id={styles["medium-text-icon"]}>Mật khẩu mới</span>
                <div className={styles["pass-word-input"]}>
                  <span className={styles["pass-word-input-hide"]}>
                    <input
                      className={styles["pass-input"]}
                      type={typeNew}
                      id="newPass"
                      name="newPass"
                      value={formik.values.newPass}
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
              <div
                style={{
                  height: "10px",
                  position: "relative",
                  marginBottom: "5px",
                }}
              >
                {formik.errors.newPass && (
                  <p
                    style={{
                      color: "#ff4d4f",
                      fontSize: "14px",
                      position: "absolute",
                      bottom: "-20px",
                      left: "0",
                    }}
                  >
                    {" "}
                    {formik.errors.newPass}{" "}
                  </p>
                )}
              </div>
              <div className={styles["pass-word"]}>
                <span id={styles["medium-text-icon"]}>
                  Nhập lại mật khẩu mới
                </span>
                <div className={styles["pass-word-input"]}>
                  <span className={styles["pass-word-input-hide"]}>
                    <input
                      className={styles["pass-input"]}
                      type={typeCon}
                      id="confirmNewPass"
                      name="confirmNewPass"
                      value={formik.values.confirmNewPass}
                      onChange={formik.handleChange}
                    />
                    <Icon
                      className={styles["pass-word-icon"]}
                      onClick={handleHidePasswordCon}
                      icon={iconCon}
                    />
                  </span>
                </div>
              </div>
              <div
                style={{
                  height: "10px",
                  position: "relative",
                  marginBottom: "20px",
                }}
              >
                {formik.errors.confirmNewPass && (
                  <p
                    style={{
                      color: "#ff4d4f",
                      fontSize: "14px",
                      position: "absolute",
                      bottom: "-20px",
                      left: "0",
                    }}
                  >
                    {" "}
                    {formik.errors.confirmNewPass}{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={style["btn-container"]}>
            <button className={style["btn-cancel"]} onClick={handleClose}>
              Cancel
            </button>
            <button
              className={style["btn-ok"]}
              disabled={!isValid}
              onClick={ChangePassAPI}
            >
              OK
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
export default ChangePassWord;
