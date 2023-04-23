import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../../styles/Profile.module.css";
import Footer from "../home/Footer";
import Advertisement from "../home/Advertisement";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ChangePassWord from "./ChangePassWord";
import { Icon } from "react-icons-kit";
import { calendar } from "react-icons-kit/fa/calendar";
import style from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { useAppContext } from "../../contexts/AppProvider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Profile() {
  const [openMess, setOpenMess] = useState(false);
  const [typeMess, setTypeMess] = useState("");
  const [message, setMessage] = useState("");
  const handleCloseMess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMess(false);
  };
  //Lấy thông tin hiện tại của user
  const router = useRouter();
  const { user } = useAppContext();

  console.log(user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  useEffect(() => {
    const userId = window.localStorage.getItem("_id");
    if (!userId) {
      router.push("/login", "/login");
    } else {
      setName(user?.userName);
      setEmail(user?.email);
      setBirthDate(user?.birthDate);
    }
  }, [user, router]);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleBirthDate = (e) => {
    setBirthDate(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const ChangeInfoAPI = (e) => {
    e.preventDefault();
    fetch(
      "https://beverage-store7902.onrender.com/user/change-user-information",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          userName: name,
          email: email,
          birthDate: birthDate,
          userId: localStorage.getItem("_id"),
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.code == 111) {
          setTypeMess("success");
          setMessage("Cập nhật thông tin thành công");
          setOpenMess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
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
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#fafafa",
          }}
        >
          <div className={style["menu-container"]}>
            <div className={style["color-title-forward"]}>
              THÔNG TIN CÁ NHÂN
            </div>

            <Link href="/profile/manageorders">
              <div className={style["title-forward"]}>QUẢN LÝ ĐƠN HÀNG</div>
            </Link>
          </div>
          <Box
            sx={{
              marginTop: "120px",
              padding: "0 10px",
              backgroundColor: "#fff",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid rgb(221, 221, 221)",
                width: "935px",
              }}
            >
              <div className={style["title"]}>Thông tin cá nhân</div>
            </Box>
            <Box
              sx={{
                padding: "50px 0 20px 20px",
              }}
            >
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Họ và Tên
              </Typography>
              <input
                className={style["Input"]}
                value={name}
                onChange={handleName}
                style={{ fontSize: "16px" }}
                placeholder={user?.userName}
              />
            </Box>

            <Box padding="0 0 20px 20px">
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Email
              </Typography>
              <input
                className={style["Input"]}
                value={email}
                onChange={handleEmail}
                style={{ fontSize: "16px" }}
                placeholder={user?.email}
              />

              <button
                className={style["button-change-pass"]}
                onClick={handleOpen}
              >
                Thay đổi mật khẩu
              </button>

              <Modal open={open} onClose={handleClose}>
                <ChangePassWord handleClose={handleClose} setOpen={setOpen} />
              </Modal>
              <Box
                sx={{
                  width: "70%",
                  margin: "20px 0 40px 0",
                }}
              >
                <Typography margin="0 0 20px 0">Ngày sinh</Typography>
                <div className={style["pass-word"]}>
                  <span></span>
                  <div className={style["pass-word-input"]}>
                    <span className={style["pass-word-input-hide"]}>
                      <input
                        className={style["pass-input"]}
                        value={birthDate}
                        onChange={handleBirthDate}
                      />
                      <Icon
                        className={style["pass-word-icon"]}
                        icon={calendar}
                      />
                    </span>
                  </div>
                </div>

                <button
                  className={style["button-submit"]}
                  onClick={ChangeInfoAPI}
                >
                  Cập nhật
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Advertisement />
        <Footer />
      </form>
    </div>
  );
}
export default Profile;
