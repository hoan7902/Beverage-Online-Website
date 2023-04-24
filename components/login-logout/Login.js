import React, { useEffect, useState } from "react";
import {
  Alert,
  AlertColor,
  Box,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./styles.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("0786170902");
  const [password, setPassword] = useState("01227793662an");
  const [isVisibility, setIsVisibility] = useState(false);
  const handleChangeVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  const [openNoti, setOpenNoti] = useState(false);
  const [statusAlert, setStatusAlert] = useState("error");
  const [messageAlert, setMessageAlert] = useState("Thiếu thông tin");

  const hanldOpenNoti = () => {
    setOpenNoti(true);
  };

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNoti(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    localStorage.setItem("phoneNumber", phone);
    fetch("https://beverage-store7902.onrender.com/user/login-user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phone,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("check res: ", response);
        if (response.code == 102) {
          setStatusAlert("success");
          setMessageAlert("Đăng nhập thành công");
          setOpenNoti(true);
          router.push("/", "/");
        } else if (response.code == 103) {
          setStatusAlert("error");
          setMessageAlert(
            "Vui lòng nhập lại mật khẩu, mật khẩu không chính xác"
          );
          setOpenNoti(true);
        } else if (response.code == 110 && password != "" && phone != "") {
          setStatusAlert("error");
          setMessageAlert("Người dùng không tồn tại, vui lòng đăng ký");
          setOpenNoti(true);
        } else if (response.code == 101) {
          setStatusAlert("error");
          setMessageAlert("Tài khoản chưa xác thực");
          router.push("/authentication", "/authentication");
        }
        localStorage.setItem("_id", response.data.user._id);
        localStorage.setItem("phoneNumber", response.data.user.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.background}>
      <Box className={styles.wrapperPopup}>
        <Box backgroundColor="#fff" sx={{ p: {xs: "20px", md: "80px"}}} borderRadius="6px" mb="40px">
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              textAlign="center"
              fontSize="2rem"
              textTransform="uppercase"
              color="#d4b774"
              width="100%"
            >
              Đăng nhập
            </Typography>
          </Stack>
          <form className={styles.form} onSubmit={handleLogin}>
            <Stack alignItems="center">
              <Stack
                className={styles.wrapInput}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <input
                  className={styles.input}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  value={phone}
                  name="phone"
                  type="text"
                />
              </Stack>
            </Stack>
            <Stack alignItems="center">
              <Stack
                className={styles.wrapInput}
                flexDirection="row"
                alignItems="center"
              >
                <input
                  className={styles.input}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mật khẩu"
                  value={password}
                  name="password"
                  type={isVisibility ? "text" : "password"}
                />
                <Box onClick={handleChangeVisibility}>
                  {isVisibility ? (
                    <VisibilityOffIcon sx={{ marginTop: "30px" }} />
                  ) : (
                    <VisibilityIcon sx={{ marginTop: "30px" }} />
                  )}
                </Box>
              </Stack>
              <Typography
                sx={{ "&:hover": { cursor: "pointer", opacity: "0.9" } }}
                color="#d4b774"
                p="20px 0"
              >
                Quên mật khẩu
              </Typography>
              <button className={styles.buttonLogin} type="submit">
                Đăng nhập
              </button>
            </Stack>
            <Typography color="#444" textAlign="justify">
              Vì chức năng đăng kí bằng OTP không còn hợp lệ. Vui lòng đăng nhập
              bằng tài khoản mặc định ở trên.
            </Typography>
          </form>
        </Box>
      </Box>
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
    </div>
  );
};

export default Login;
