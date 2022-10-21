import React,{useState} from 'react';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import Image from 'next/image'
export default function Register()
{
    const [phoneNumber,setPhoneNumber]=useState("");
    const [pass,setPass]=useState("");
    const [rePass,setRePass]=useState("");
    const [phoneNumberError,setPhoneNumberError]=useState('');
    const [passError,setPassError]=useState('');
    const [rePassError,setRePassError]=useState('');
    // Function to handle phone number change
    const handlePhoneChange=(e)=>{
        setPhoneNumberError('');
        setPhoneNumber(e.target.value);
     };
     // Function to handle password change
     const handlePassChange=(e)=>{
        setPassError('');
        setPass(e.target.value);
     };
    // Function to handle password change
    const handleRePassChange=(e)=>{
        setRePassError('');
        setRePass(e.target.value);
     };
    const [type,setType]=useState('password');
    const [icon,setIcon]=useState(eyeOff);
    const handleHidePassword=()=>{
        if(type==='password')
        {
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeOff);
            setType('password');
        }
    };
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(phoneNumber!==''){
            const phoneNumberRegex=/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/i;
            if(phoneNumberRegex.test(phoneNumber))
            {
             setPhoneNumberError('');
            }
            else{
             setPhoneNumberError('Số điện thoại không hợp lệ')
            }
         }
         else{
             setPhoneNumberError('Hãy nhập số điện thoại')
         }
         if(pass!=='')
         {
            
         }
         else{
             setPassError('Hãy nhập mật khẩu')
         }
         if(rePass!=='')
         {
            
         }
         else{
             setRePassError('Hãy nhập mật khẩu')
         }
   };
    return (
    <div className="auth-form-container-register">
        <form onSubmit={handleSubmit} className="register">
            <h2>Đăng ký</h2>
            <div className="phone-number"> 
                        <span id="medium-text-icon">Số điện thoại</span>
                        <div className="phone-number-input-logo">
                            <div className="phone">
                                <span className="logo-number">
                                    <Image className="phone-image" src="https://flyfood.vn/static/img/vietnam-flag.png" alt="Logo Việt Nam" />
                                    <span>+84</span>
                                </span>
                            <input className="phone-input" value={phoneNumber} onChange={handlePhoneChange} type="text"/>
                            </div>
                        <div className="error">
                        {phoneNumberError&&<div className="phone-number-error">{phoneNumberError}</div>}
                    </div>
                </div>
            </div>
             
            <div className="pass-word">
                <span id="medium-text-icon">Mật khẩu</span>
                 <div className="pass-word-input">
                        <span className="pass-word-input--hide">
                            <input className="pass-input" value={pass} onChange={handlePassChange} type={type} />
                            <Icon className="pass-word-icon" onClick={handleHidePassword} icon={icon}/>
                        </span>
                    </div>
                    <div className='error'>
                    {passError&&<div className="phone-number-error">{passError}</div>}
                    </div>
                    
            </div>
             <div className="pass-word">
                <span id="medium-text-icon">Nhập lại mật khẩu</span>
                 <div className="pass-word-input">
                        <span className="pass-word-input--hide">
                            <input className="pass-input" value={rePass} onChange={handleRePassChange} type={type} />
                            <Icon className="pass-word-icon" onClick={handleHidePassword} icon={icon}/>
                        </span>
                    </div>
                    <div className="error">
                    {rePassError&&<div className="phone-number-error">{rePassError}</div>}
                    </div>
                    
            </div>
            <span className="min-text">Vui lòng nhấn &quotTiếp theo&quot để nhận mã xác thực. Mã xác thực sẽ được gửi đến tin nhắn điện thoại của bạn</span>
            <button type="submit" className="Orange_Button">
                <span>Tiếp theo</span>
            </button>
            <span>Đã có tài khoản?
            <a href='/login' className="forward">Đăng nhập</a>
        </span>
        </form>
        
    </div>
    );
}