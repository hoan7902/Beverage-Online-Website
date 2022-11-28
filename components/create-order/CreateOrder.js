import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {chevronRight} from 'react-icons-kit/fa/chevronRight';
import {arrowRight} from 'react-icons-kit/fa/arrowRight';
import Link from "next/link";

function CreateOrder(){
    const [gender,setGender]=useState();
    const handleChange=(e)=>{
        setGender(e.target.value);
    };
    const [time,setTime]=useState();
    const handleTime=(e)=>{
        setTime(e.target.value);
    }
    return (
        <div>
            <TitleForward>
                <TitleContain>
                <div style={{borderRadius:"50%",height:"30px",width:"30px",backgroundColor: "#D8B979",textAlign:"center",marginRight:"10px"}}>
                        <span style={{fontSize:"20px",color:"#ffffff"}}>1</span>
                    
                    </div>
                    <TitleCurrent>
                   Địa chỉ giao hàng
                   <Icon icon={chevronRight} style={{marginLeft:"30px"}}/></TitleCurrent>
                </TitleContain>
                
                    
            
                
                <div style={{display:"flex"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",marginRight:"10px",border:"1px solid #333"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>2</span>
                        </div>
                        <Title>
                        Kiểm tra đơn hàng
                        <Icon icon={chevronRight} style={{marginLeft:"30px"}}/></Title>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",marginRight:"10px",border:"1px solid #333"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>3</span>
                        </div>
                        <Title>
                        Hình thức thanh toán
                        <Icon icon={chevronRight} style={{marginLeft:"30px"}}/></Title>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",marginRight:"10px",border:"1px solid #333"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>4</span>
                        </div>
                        <Title>
                        Xác nhận và mua hàng
                        <Icon icon={chevronRight} style={{marginLeft:"30px"}}/></Title>
                </div>
                
                
            </TitleForward>
            <Content>
                <InfoCustomer>
                    <p style={{margin:"20px 40px", fontSize:"20px",fontWeight:600}}>Thông tin khách hàng</p>
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Họ và tên</p>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Email</p>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Số điện thoại</p>
                        <Input style={{width:"90%"}}/>
                    </div>

                </InfoCustomer>
                <Address>
                    <p style={{margin:"20px 40px", fontSize:"20px",fontWeight:600}}>Địa chỉ giao hàng</p>
                
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Tỉnh/Thành phố</p>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div style={{margin:"10px 20px",display:"flex",justifyContent:"space-between",width:"90%"}}>
                        <div>
                            <p style={{margin:"0 20px"}}>Quận/Huyện</p>
                            <Input style={{width:"250px"}}/>
                        </div>
                        <div>
                            <p style={{margin:"0 20px"}}>Phường/Xã</p>
                            <Input style={{width:"250px"}}/>
                        </div>
                        
                    </div>
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Địa chỉ cụ thể</p>
                        <Input style={{width:"90%"}}/>
                    </div>
                    <div style={{margin:"10px 20px",display:"flex",justifyContent:"space-between",width:"90%"}}>
                        <div style={{margin:"0 20px"}}>
                            <input type="radio" name ="gender" value="Nhà ở" onChange={handleChange}/>Nhà ở
                        </div>
                        <div style={{margin:"0 20px"}}>
                            <input type="radio" name ="gender" value="Công ty" onChange={handleChange}/>Công ty
                        </div>
                        <div style={{margin:"0 20px"}}>
                            <input type="radio" name ="gender" value="Chung cư" onChange={handleChange}/>Chung cư
                        </div>
                        
                    </div>
                    <div style={{margin:"10px 20px"}}>
                        <p style={{margin:"0 20px"}}>Ghi chú</p>
                        <Input style={{width:"90%"}}/>
                    </div>
                </Address>
            </Content>
            
            <div style={{display:"flex",height:"250px",margin: "20px 40px"}}>
                <div style={{flex:"1",boxShadow: "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%)",margin: "0 10px"}}>
                    <p style={{margin:"20px 40px", fontSize:"20px",fontWeight:600}}>Thời gian mong muốn nhận hàng</p>
                    <div style={{margin:"20px 40px"}}>
                            <input type="radio" name ="time" value="Sớm nhất có thể" onChange={handleTime}/>Sớm nhất có thể
                    </div>
                    <div style={{margin:"20px 40px"}}>
                            <input type="radio" name ="time" value="Chọn ngày muốn nhận" onChange={handleTime}/>Chọn ngày muốn nhận
                    </div>
                    <div style={{margin:"0 20px"}}>
                        <Input style={{width:"90%",height:"40px",margin:"0 20px"}}/>
                    </div>
                </div>
                <div style={{flex:"1",margin: "0 10px"}}>

                </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",margin: "50px 50px"}}>
                <ButtonCon> 
                <Link href="/createorder/step2">Tiếp tục</Link>
                <Icon icon={arrowRight} style={{marginLeft:"10px"}}/>
                </ButtonCon>
            </div>
                
        </div>
    );
};
export default CreateOrder;
const TitleContain=styled.div`
    display:flex;
    border-bottom:4px solid #D8B979;
`;
const TitleForward=styled.div`
    display:flex;
    justify-content:space-between;
    height:40px;
    margin: 100px 50px 100px 50px;
`;
const TitleCurrent=styled.div`
    font-size:20px;
    font-weight:600;
    margin-bottom:10px;
`;
const Title=styled.div`
    font-size:20px;
    font-weight:600;
    opacity:0.45;
`;
const Content=styled.div`
    display:flex;
    height:700px;
    margin: 20px 40px;
`;
const InfoCustomer=styled.div`
    flex:1;
    margin: 0 10px;
    flex-direction:column;
    display:flex;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%);
`;
const Address=styled.div`
    flex:1;
    margin: 0 10px;
    flex-direction:column;
    display:flex;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%);
`;
const Input=styled.input`
    height:40px;
    margin:30px 20px;
    &:focus {
        outline-color: #00793f;
    }
    &:hover {
        border: 1px solid #00793f;
    }
    `;
const ButtonCon=styled.button`
    background-color:#D8B979;
    color:#fff;
    border:none;
    border-radius: 5px;
    width:210px;
    height:46px;
    cursor:pointer;
    font-size:18px;
`;
