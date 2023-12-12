import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../../styles/Profile.module.css";
import Footer from "../home/Footer";
import Advertisement from "../home/Advertisement";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { useAppContext } from "../../contexts/AppProvider";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React from "react";
import { updateUserProfile } from "../../api";

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
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [address, setAddress] = useState(user?.address);

  useEffect(() => {
    setName(user?.name);
    setPhone(user?.phone);
    setAddress(user?.address);
  }, [user]);

  // state to show alert
  const [openNoti, setOpenNoti] = useState(false);
  const [statusAlert, setStatusAlert] = useState();
  const [messageAlert, setMessageAlert] = useState();

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");
    if (!userId) {
      router.push("/login", "/login");
    } else {
      setName(user?.userName);
      setEmail(user?.email);
      setPhone(user?.phone);
      setAddress(user?.address);
    }
  }, [user, router]);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const ChangeInfoAPI = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem("userId");
    const res = await updateUserProfile(userId, {
      name,
      email,
      phone,
      address
    });
    if (!res) {
      setStatusAlert("error");
      setMessageAlert("Cập nhật thông tin thất bại. Vui lòng kiểm tra lại thông tin");
      setOpenNoti(true);
    } else {
      setStatusAlert("success");
      setMessageAlert("Cập nhật thông tin thành công");
      setOpenNoti(true);
    }
  };

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNoti(false);
  };
  return (
    <div>
      <Snackbar
        open={openNoti}
        autoHideDuration={null}
        onClose={handleCloseNoti}
      >
        <Alert
          onClose={handleCloseNoti}
          severity={statusAlert}
          sx={{ width: "100%" }}
        >
          {messageAlert}
        </Alert>
      </Snackbar>
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
            flexDirection: { xs: "column" },
          }}
          mt="69px"
        >
          <Stack>
            <Typography className={style["color-title-forward"]}>
              THÔNG TIN CÁ NHÂN
            </Typography>

            <Link href="/profile/manageorders">
              <div className={style["title-forward"]}>QUẢN LÝ ĐƠN HÀNG</div>
            </Link>
          </Stack>
          <Stack
            sx={{
              marginTop: "50px",
              mx: "20px",
              padding: "0 10px",
              backgroundColor: "#fff",
            }}
            justifyContent="center"
          >
            <Box
              sx={{
                borderBottom: "1px solid rgb(221, 221, 221)",
              }}
            >
              <div className={style["title"]}>Thông tin cá nhân</div>
            </Box>
            <Stack p="20px 0">
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
                placeholder={user?.name}
              />
            </Stack>

            <Stack p="20px 0">
              <Typography
              sx={{
                paddingBottom: "10px",
              }}
            >
                Số điện thoại
              </Typography>
              <input
              className={style["Input"]}
              value={phone}
              onChange={handlePhone}
              style={{ fontSize: "16px" }}
              placeholder={user?.phone}
            />
            </Stack>

            <Stack p="20px 0">
              <Typography
              sx={{
                paddingBottom: "10px",
              }}
            >
                Address
              </Typography>
              <input
                className={style["Input"]}
                value={address}
                onChange={handleAddress}
                style={{ fontSize: "16px" }}
                placeholder={user?.address}
              />
            </Stack>
            <Stack p="20px 0">
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
                disabled
              />
              <button
                className={style["button-submit"]}
                onClick={ChangeInfoAPI}
                style={{ marginTop: '30px' }}
              >
                Cập nhật
              </button>
            </Stack>
          </Stack>
        </Box>
        <Advertisement />
        <Footer />
      </form>
    </div>
  );
}
export default Profile;
