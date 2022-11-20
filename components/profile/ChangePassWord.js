import React, { useState, createContext, useContext} from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import styles from '../../styles/Login.module.css';
import styled from "styled-components";
function PassWordInput({name}){
    const {pass,setPass}=useContext(PassWordContext);
    const handlePassChange = (e) => {
        setPass(e.target.value);
      };
      const [type, setType] = useState("");
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
              <div className={styles["pass-word"]}>
                      <span id={styles["medium-text-icon"]}>{name}</span>
                      <div className={styles["pass-word-input"]}>
                          <span className={styles["pass-word-input-hide"]}>
                              <input
                                  className={styles["pass-input"]}
                                  value={pass}
                                  onChange={handlePassChange}
                                  type={type}
                                  
                              />
                              <Icon
                                  className={styles["pass-word-icon"]}
                                  onClick={handleHidePassword}
                                  icon={icon}
                              />
                          </span>
                      </div>
                  </div>
          
                  
      );
};
function NewPassWordInput({name}){
    const {newpass,setNewPass}=useContext(NewPassWordContext);
    const handleNewPassChange = (e) => {
        setNewPass(e.target.value);
      };
      const [type, setType] = useState("");
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
              <div className={styles["pass-word"]}>
                      <span id={styles["medium-text-icon"]}>{name}</span>
                      <div className={styles["pass-word-input"]}>
                          <span className={styles["pass-word-input-hide"]}>
                              <input
                                  className={styles["pass-input"]}
                                  value={newpass}
                                  onChange={handleNewPassChange}
                                  type={type}
                                  
                              />
                              <Icon
                                  className={styles["pass-word-icon"]}
                                  onClick={handleHidePassword}
                                  icon={icon}
                              />
                          </span>
                      </div>
                  </div>
          
                  
      );
};
function ReNewPassWordInput({name}){
    const {renewpass,setReNewPass}=useContext(ReNewPassWordContext);
    const handleReNewPassChange = (e) => {
        setReNewPass(e.target.value);
      };
      const [type, setType] = useState("");
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
              <div className={styles["pass-word"]}>
                      <span id={styles["medium-text-icon"]}>{name}</span>
                      <div className={styles["pass-word-input"]}>
                          <span className={styles["pass-word-input-hide"]}>
                              <input
                                  className={styles["pass-input"]}
                                  value={renewpass}
                                  onChange={handleReNewPassChange}
                                  type={type}
                                  
                              />
                              <Icon
                                  className={styles["pass-word-icon"]}
                                  onClick={handleHidePassword}
                                  icon={icon}
                              />
                          </span>
                      </div>
                  </div>
          
                  
      );
};
export const PassWordContext=createContext();
export const NewPassWordContext=createContext();
export const ReNewPassWordContext=createContext();
function ChangePassWord({handleClose}){
    const [pass,setPass]=useState("");
    const [newpass,setNewPass]=useState("");
    const [renewpass,setReNewPass]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://sleepy-scrubland-61892.herokuapp.com/user/change-user-password", {
            "method": "POST",
            "headers": {
            "content-type": "application/json",
            "accept": "application/json"
    },
                "body": JSON.stringify({
                    "phoneNumber": localStorage.getItem("phoneNumber").slice(1,localStorage.getItem("phoneNumber").length-1),
                    "password": pass,
                    "newPassword":newpass,

    })
   
  })
  
  .then(response => response.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
   
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <ModalContainer > 
                      <ModalContent>
                      <ModalTitle>
                            <TitleForm>Đổi mật khẩu</TitleForm>
                            <ModalClose onClick={handleClose}>X</ModalClose>
                        </ModalTitle>
                        
                    <PassWordContext.Provider value={{pass,setPass}}>
                        <NewPassWordContext.Provider value={{newpass,setNewPass}}>
                            <ReNewPassWordContext.Provider value={{renewpass,setReNewPass}}>
                                <PassWordInput name="Mật khẩu hiện tại"/>
                                <NewPassWordInput name="Mật khẩu mới"/>
                                <ReNewPassWordInput name="Nhập mật khẩu mới"/>
                            </ReNewPassWordContext.Provider>
                        </NewPassWordContext.Provider>
                    </PassWordContext.Provider>
                    </ModalContent>
                    <ButtonContainer >
                     <ButtonCancel>Cancel</ButtonCancel>
                     <ButtonOK>OK</ButtonOK>
                    </ButtonContainer>
                    
                    </ModalContainer>
                    </form>
        </div>
    );
};
export default ChangePassWord;
const ButtonCancel=styled.button`
     color: rgba(0, 0, 0, 0.85);
     font-size: 14px;
     box-sizing:border-box;
     border: 1px solid rgba(0, 0, 0, 0.4);
     font-weight: 400;
     cursor:pointer;
     height:30px;
     margin-right:10px;
     padding:0 15px;
     &:hover{
        color: #00793F;
        border: 1px solid #00793F;
     }
`;
const ButtonOK=styled.button`
     color:#fff;
     font-size:14px;
     font-weight:400;
     background-color:#00793F;
     border-top-color: rgb(0, 121, 63);
    border-right-color: rgb(0, 121, 63);
    border-bottom-color: rgb(0, 121, 63);
    border-left-color: rgb(0, 121, 63);
    border:none;
     cursor:pointer;
     height:30px;
     width:50px;
     &:hover{
        background-color:#00793F;
        opacity:0.8;
     }
`;
const ModalClose=styled.p`
font-size:18px;
cursor:pointer;
padding-right:10px;
opacity:0.5;
&:hover{
    opacity:1;
}
`;
const ModalTitle=styled.div`
display:flex;
justify-content:space-between;
`;
const ModalContainer=styled.div`
position: absolute as absolute;
margin-top:28%;
margin-left:50%;
transform: translate(-50%, -50%);
width: 550px;
height:550px;
background-color: #fff;
border: 2px solid #000,
box-shadow: 24;
padding: 25px;
border-bottom: 1px solid #fdfdfd;
`;
const TitleForm=styled.h2`
     font-size:32px;
     font-weight:600;
`;
const ModalContent=styled.div`
     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
     margin-bottom:20px;
`;
const ButtonContainer=styled.div`
display:flex;
justify-content:flex-end;
`;