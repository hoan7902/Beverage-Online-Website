import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import "../../styles/Profile.module.css";
import Footer from "../home/Footer";
import Advertisement from "../home/Advertisement";
import RowRadioButtonsGroup from "./Gender";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import ChangePassWord from "./ChangePassWord";
import { Icon } from "react-icons-kit";
import { calendar } from "react-icons-kit/fa/calendar";
import style from "../../styles/Profile.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";


function Profile() {
  //Lấy thông tin hiện tại của user
  const { user } = useAppContext();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/login", "/login");
    }
  });
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [birthDate,setBirthDate]=useState("");
  const handleName=(e)=>{
    setName(e.target.value);
  };
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  };
  const handleBirthDate=(e)=>{
    setBirthDate(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const ChangeInfoAPI=(e)=>{
    e.preventDefault();
    fetch("https://sleepy-scrubland-61892.herokuapp.com/user/change-user-information", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        userName: "string",
        avatar: "string",
        email: email,
        birthDate: birthDate,
        userId: localStorage.getItem("_id"),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // if(response.code==111){
        //   message.config({
        //     top:"100px",
        // });
        //   message.success("Cập nhật thông tin người dùng thành công");
        
        // }
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#fafafa",
          }}
        >
          <div className={style["menu-container"]}>
            <div className={style["color-title-forward"]}>
              <Link href="/profile">THÔNG TIN CÁ NHÂN</Link>
            </div>
            <div className={style["title-forward"]}>
              <Link href="/profile/manageorders">QUẢN LÝ ĐƠN HÀNG</Link>
            </div>
            <div className={style["title-forward"]}>
              ĐỊA CHỈ GIAO HÀNG
            </div>
            <div className={style["title-forward"]}>
              DANH SÁCH YÊU THÍCH
            </div>
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
              <input className={style["Input"]} value={name} onChange={handleName} style={{fontSize:"16px"}}/>
            </Box>
            <Box
              sx={{
                padding: "0 0 20px 20px",
                width: "80%",
              }}
            >
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Số điện thoại
              </Typography>
              <div className={style["phone-input"]}>
                <input className={style["Input"]}/>
                <button className={style["button-auth"]}>Gửi mã xác thực</button>
              </div>
            </Box>

            <Box padding="0 0 20px 20px">
              <Typography
                sx={{
                  paddingBottom: "10px",
                }}
              >
                Email
              </Typography>
              <input className={style["Input"]} value={email} onChange={handleEmail} style={{fontSize:"16px"}}/>
              
              <button className={style["button-change-pass"]} onClick={handleOpen}>
                Thay đổi mật khẩu
              </button>
              
              <Modal open={open} onClose={handleClose}>
                <ChangePassWord handleClose={handleClose} setOpen={setOpen}/>
                
              </Modal>
              <Typography>Giới tính</Typography>
              <RowRadioButtonsGroup />
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
                      <input className={style["pass-input"]} value={birthDate} onChange={handleBirthDate}/>
                      <Icon
                        className={style["pass-word-icon"]}
                        icon={calendar}
                      />
                    </span>
                  </div>
                </div>

                <button className={style["button-submit"]} onClick={ChangeInfoAPI}>Cập nhật</button>
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


