import { useState, useContext } from "react";
import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import styles from "./styles.module.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";
import { signIn } from "../../api";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibility, setIsVisibility] = useState(false);

  const handleChangeVisibility = () => {
    setIsVisibility(!isVisibility);
  };
  const [openNoti, setOpenNoti] = useState(false);
  const [statusAlert, setStatusAlert] = useState();
  const [messageAlert, setMessageAlert] = useState();

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenNoti(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await signIn({ email, password });
    console.log('check response: ', response);
    if (!response) {
      setStatusAlert("error");
      setMessageAlert("Thông tin đăng nhập sai");
      setOpenNoti(true);
    } else {
      const { userId, token } = response || {};
      localStorage.setItem('userId', userId);
      localStorage.setItem('email', email);
      localStorage.setItem('token', token);

      setStatusAlert("success");
      setMessageAlert("Đăng nhập thành công");
      setOpenNoti(true);
      router.push('/');
    }
  };

  return (
    <div className={styles.background}>
      <Box className={styles.wrapperPopup}>
        <Box
          backgroundColor="#fff"
          sx={{ p: { xs: "20px", md: "80px" } }}
          borderRadius="6px"
          mb="40px"
          minWidth="550px"
        >
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
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  value={email}
                  name="email"
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
