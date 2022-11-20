import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../../components/menu';
import '../../styles/Profile.module.css';
import Footer from '../../components/home/Footer';
import Advertisement from '../../components/home/Advertisement';
import RowRadioButtonsGroup from "./Gender";
import styled from "styled-components";
import Link from "next/link";
import Popup from "reactjs-popup";
import {useState} from "react";
import Modal from '@mui/material/Modal';
import ChangePassWord from "./ChangePassWord";
import { Icon } from "react-icons-kit";
import {calendar} from 'react-icons-kit/fa/calendar';
import styles from '../../styles/Login.module.css';
function Profile(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("https://sleepy-scrubland-61892.herokuapp.com/user/get-detail-user", {
            "method": "POST",
            "headers": {
            "content-type": "application/json",
            "accept": "application/json"
                },
            "body": JSON.stringify({
            "userId":localStorage.getItem("_id").slice(1,localStorage.getItem("_id").length-1),
        })
   
  })
  
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
    };
    return (
        <div>
       <form onSubmit={handleSubmit}>
        <ResponsiveAppBar/>
        <Box
        sx={{
            display:'flex',
            backgroundColor:"#fafafa",
        }}>
        <MenuContainer>
           <ColorTitleForWard>
           <Link href='/profile'>
                    THÔNG TIN CÁ NHÂN
           </Link>
          </ColorTitleForWard>
          <TitleForWard>
             <Link href='/profile/manageorders'>
               QUẢN LÝ ĐƠN HÀNG
             </Link>
           </TitleForWard>
           <TitleForWard>
             <Link href='/profile/address'>
               ĐỊA CHỈ GIAO HÀNG
             </Link>
           </TitleForWard>
           <TitleForWard>
             <Link href='/profile/wishlist'>
               DANH SÁCH YÊU THÍCH
             </Link>
           </TitleForWard>
        </MenuContainer>
        <Box
        sx={{
            marginTop:'120px',
            padding:'0 10px',
            backgroundColor:'#fff',
        }}
        >
        <Box
            sx={{
                borderBottom:'1px solid rgb(221, 221, 221)',
                width:'935px',
            }}
            >
            <Title>Thông tin cá nhân</Title>
            </Box>
           <Box 
            sx={{
                padding:'50px 0 20px 20px',
            }}
            >
                
                <Typography 
                sx={{
                    paddingBottom:'10px',
                }}
                >Họ và Tên</Typography>
                <Input/>
            </Box>
            <Box 
            sx={{
                padding:'0 0 20px 20px',
                width:'80%',
            }}
            >
                <Typography 
                sx={{
                    paddingBottom:'10px',
                }}
                >Số điện thoại</Typography>
                <PhoneInput>
                    <Input/>
                    <ButtonAuth>Gửi mã xác thực</ButtonAuth>
                </PhoneInput>
            </Box>
            <Box padding='0 0 20px 20px'>
                <Typography
                 sx={{
                    paddingBottom:'10px',
                }}
                >Email</Typography>
                <Input/>
                <Popup ></Popup>
                <ButtonChangePass onClick={handleOpen}>Thay đổi mật khẩu</ButtonChangePass>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <ChangePassWord handleClose={handleClose}/>
                    
                    
                    </Modal>
            <Typography>Giới tính</Typography>
            <RowRadioButtonsGroup/>
            <Box
            sx={{
                width:'70%',
                margin:'20px 0 40px 0'
            }}
            >
                    <Typography
                    margin='0 0 20px 0'
                    >Ngày sinh</Typography>
                    <div className={styles["pass-word"]}>
                    <span></span>
                    <div className={styles["pass-word-input"]}>
                        <span className={styles["pass-word-input-hide"]}>
                            <input
                                className={styles["pass-input"]}
                            />
                            <Icon
                                className={styles["pass-word-icon"]}
                                icon={calendar}
                            />
                        </span>
                    </div>
                </div>
                    
                     <ButtonSubmit >Cập nhật</ButtonSubmit>
                   
                    
                    
            </Box>
            
            </Box>
           
        </Box>
        
        </Box>
        <Advertisement/>
        <Footer/>
        
    </form>
    </div>
    );
};
export default Profile;


const TitleForWard=styled.div`
    padding:10px 20px;
    font-size:18px;
    border-right:1px solid rgb(221, 221, 221);
    &:hover{
        background-color:rgb(255, 228, 204);
        border-right:5px solid rgb(235, 113, 0);
        color:rgb(235, 113, 0);
        cursor:pointer;
    }
    `;
const ColorTitleForWard=styled.div`
    padding:10px 20px;
    font-size:18px;
    border-right:1px solid rgb(221, 221, 221);
    background-color:rgb(255, 228, 204);
    border-right:5px solid rgb(235, 113, 0);
    color:rgb(235, 113, 0);
    cursor:pointer;
    
    `;
const Input=styled.input`
    margin-bottom:60px;
    width:70%;
    height:40px;
    padding: 6.5px 11px;
    &:focus{
        outline-color:#00793F;
    }
    &:hover{
        border:1px solid #00793F;
    }
`;
const ButtonAuth=styled.button`
    height:40px;
    width:18%;
    color:rgb(235, 113, 0);
    border:none;
    cursor:pointer;
    font-size:14px;
    background-color:rgb(255, 228, 204);
    &:hover{
    background-color:rgb(255, 228, 204);
    }
`;
const ButtonChangePass=styled.button`
background-color:rgb(235, 113, 0);
color:#fff;
width:70%;
height:40px;
margin:0 0 30px 0;
font-weight:500;
font-size:16px;
border:none;
border-radius:5px;
cursor:pointer;
`;
const ButtonSubmit=styled.button`
background-color:#00793F;
color:#fff;
font-size:16px;
font-weight:500;
height:40px;
margin:30px 0 30px 0;
border:none;
border-radius:5px;
width:40%;
align-items:center;
justify-content:center;
margin-left:30%;
cursor:pointer;
`;
const Title=styled.div`
font-size:20px;
padding: 0 0 30px 20px;
`;
const MenuContainer=styled.div`
margin-left:135px;
margin-top:100px;
width:300px;
background-color:#fff;
`;
const PhoneInput=styled.div`
display:flex;
justify-content:flex-start;
`;
const SmallTitle=styled.span`
padding-bottom:10px;
`