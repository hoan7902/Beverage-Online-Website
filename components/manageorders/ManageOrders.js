import ResponsiveAppBar from '../../components/menu';
import styles from '../../styles/Profile.module.css';
import Footer from '../../components/home/Footer';
import Advertisement from '../../components/home/Advertisement';
import * as React from 'react';
import styled from "styled-components";
import Link from "next/link";
import {useState} from 'react';

function ManageOrders(){
    const [status,setStatus]=useState(1);
    const handleOpenLoading=()=>{
      setStatus(1);
    };
    const handleOpenComplete=()=>{
      setStatus(0);
    };
    function ChangeOrders({status}){
      if(status) return <OrdersLoading/>;
      else return <OrdersComplete/>;
    }
    function OrdersLoading(){
      return (
        <ContentContainer>
         <TitleContainer>
            <TitleColor>Đơn hàng đang xử lý</TitleColor>
            <Title onClick={handleOpenComplete}>Đơn hàng hoàn tất</Title>
          </TitleContainer>
          
        </ContentContainer>
      );
    };
    function OrdersComplete(){
      return (
        <ContentContainer>
         <TitleContainer>
            <Title onClick={handleOpenLoading}>Đơn hàng đang xử lý</Title>
            <TitleColor>Đơn hàng hoàn tất</TitleColor>
          </TitleContainer>
          
        </ContentContainer>
      );
    };
    return (
       <div clasName={styles.container}>
        <ResponsiveAppBar/>
        <Container>
          <MenuContainer>
           
           <TitleForWard>
             <Link href='/profile'>
               THÔNG TIN CÁ NHÂN
             </Link>
           </TitleForWard>
           <ColorTitleForWard>QUẢN LÝ ĐƠN HÀNG</ColorTitleForWard>
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
          
            <ChangeOrders status={status}/>
          
        </Container>  
        <Advertisement/>
        <Footer/>
    </div>
    );
};
export default ManageOrders;
const Container=styled.div`
display:flex;
background-color:#fafafa;
`;
const ContentContainer=styled.div`
  margin-top:120px;
  padding:0 10px;
  background-color:#fff;
  height:500px;
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
const TitleContainer=styled.div`
    border-bottom:1px solid rgb(221, 221, 221);
    width:935px;
    display:flex;
    justify-content:space-between;
`;
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
const Title=styled.div`
font-size:20px;
padding: 0 0 30px 20px;
cursor:pointer;
`;
const TitleColor=styled.div`
font-size:20px;
padding: 0 0 30px 20px;
cursor:pointer;
color:rgb(0, 121, 63);
`;
const MenuContainer=styled.div`
margin-left:135px;
margin-top:100px;
width:300px;
background-color:#fff;
`;
