import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import {check} from 'react-icons-kit/fa/check';
import {chevronRight} from 'react-icons-kit/fa/chevronRight'
import {arrowLeft} from 'react-icons-kit/fa/arrowLeft';
import {arrowRight} from 'react-icons-kit/fa/arrowRight';
import Link from 'next/link';

function Step2(){
    return (
        <>
        <TitleForward>
                
                <div style={{display:"flex",borderBottom:"2px soild #D8B979"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",backgroundColor: "green",marginRight:"10px"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>
                            <Icon icon={check} style={{color:"#fff"}}/>
                        </span>
                    </div>
                    <Title>Địa chỉ giao hàng 
                        <Icon icon={chevronRight} style={{marginLeft:"10px"}}/>
                    </Title>
                </div>
                <div style={{display:"flex",borderBottom:"4px solid #D8B979"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",backgroundColor: "#D8B979",textAlign:"center",marginRight:"10px"}}>
                        <span style={{fontSize:"20px",color:"#ffffff"}}>2</span>
                    
                    </div>
                    <Title>Kiểm tra đơn hàng
                        <Icon icon={chevronRight} style={{marginLeft:"10px"}}/>
                    </Title>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",marginRight:"10px",border:"1px solid #333"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>3</span>
                        </div>
                        <Title>Hình thức thanh toán
                        <Icon icon={chevronRight} style={{marginLeft:"10px"}}/>
                        </Title>
                </div>
                <div style={{display:"flex"}}>
                    <div style={{borderRadius:"50%",height:"30px",width:"30px",textAlign:"center",marginRight:"10px",border:"1px solid #333"}}>
                        <span style={{fontSize:"20px",color:"#333"}}>4</span>
                        </div>
                        <Title>Xác nhận và mua hàng
                        <Icon icon={chevronRight} style={{marginLeft:"10px"}}/>
                        </Title>
                </div>
                
                
            </TitleForward>
            <div>
                    <TiTleContain>
                        <TitleOrder>Tên thức uống</TitleOrder>
                        <TitleOrder>Số lượng</TitleOrder>
                        <TitleOrder>Topping</TitleOrder>
                        <TitleOrder>Thành tiền</TitleOrder>
                    </TiTleContain>
            </div>
            <OrderContain/>
            <Cost>
                <div style={{fontSize:"22px",display:"flex"}}>
                    <p style={{margin:"50px 0 0 50px",flex:"1"}}> Chi phí món ăn</p>
                    <p style={{margin:"50px 0 0 50px",flex:"0.2"}}> 237.000đ</p>
                </div>
                
                <div style={{fontSize:"22px",display:"flex"}}>
                    <p style={{marginLeft:"50px",flex:"1"}}>Chi phí vận chuyển</p>
                    <p style={{marginLeft:"50px",flex:"0.2"}}>9.000đ</p>
                </div>
                
            </Cost>
            <Cost style={{height:"100px"}}>
                    <p style={{fontSize:"25px",marginLeft:"50px",fontWeight:600}}>Tổng chi phí</p>
            </Cost>
            <div style={{display:"flex",justifyContent:"space-between",margin: "50px"}}>
                <ButtonBack>
                    <Icon icon={arrowLeft} style={{marginRight:"10px"}}></Icon>
                    <Link href="/createorder">Quay lại</Link>
                    </ButtonBack>
                <ButtonCon> 
                    
                <Link href="/createorder/step3">Tiếp tục</Link>
                    <Icon icon={arrowRight} style={{marginLeft:"10px"}}/></ButtonCon>
                    
            </div>
        </>
    );
};
export default Step2;
const Cost=styled.div`
    margin:20px 50px;
    height:200px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%);
    display:flex;
    flex-direction:column;
`;
const OrderContain=styled.div`
    margin:0 50px;
    height:800px;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%);

`;
const TitleForward=styled.div`
    display:flex;
    justify-content:space-between;
    height:40px;
    margin: 100px 50px 0 50px;
`;

const Title=styled.div`
    font-size:20px;
    font-weight:600;
    opacity:0.45;
`;
const TiTleContain=styled.div`
    display:flex;
    background-color:#E3E3E3;
    justify-content:space-around;
    margin:100px 50px 0 50px;
`;
const TitleOrder=styled.p`
    font-size:26px;
    color:#333;
`;
const ButtonBack=styled.button`
    background-color:#B9FAD6;
    border:none;
    color:#8E8B8B;
    border-radius: 5px;
    width:210px;
    height:46px;
    cursor:pointer;
    font-size:18px;
    align-items:center;
    justify-content:center;
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
