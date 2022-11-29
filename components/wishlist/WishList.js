import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/menu";
import styles from "../../styles/Profile.module.css";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

function WishList() {
  return (
    <div clasName={styles.container}>
      <ResponsiveAppBar />

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#fafafa",
        }}
      >
        <MenuContainer>
          <TitleForWard>
            <Link href="/profile">THÔNG TIN CÁ NHÂN</Link>
          </TitleForWard>

          <TitleForWard>
            <Link href="/profile/manageorders">QUẢN LÝ ĐƠN HÀNG</Link>
          </TitleForWard>

          <TitleForWard>
            <Link href="/profile/address">ĐỊA CHỈ GIAO HÀNG</Link>
          </TitleForWard>
          <ColorTitleForWard>DANH SÁCH YÊU THÍCH</ColorTitleForWard>
        </MenuContainer>
        <Box>
          <ContentContainer>
            <TitleContainer>
              <Title>Danh sách yêu thích</Title>
            </TitleContainer>
          </ContentContainer>
        </Box>
      </Box>
      <Advertisement />
      <Footer />
    </div>
  );
}
export default WishList;
const ContentContainer = styled.div`
  margin-top: 120px;
  padding: 0 10px;
  background-color: #fff;
  height: 500px;
`;
const ColorTitleForWard = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  border-right: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 228, 204);
  border-right: 5px solid rgb(235, 113, 0);
  color: rgb(235, 113, 0);
  cursor: pointer;
`;
const TitleContainer = styled.div`
  border-bottom: 1px solid rgb(221, 221, 221);
  width: 935px;
  display: flex;
  justify-content: space-between;
`;
const TitleForWard = styled.div`
  padding: 10px 20px;
  font-size: 18px;
  border-right: 1px solid rgb(221, 221, 221);
  &:hover {
    background-color: rgb(255, 228, 204);
    border-right: 5px solid rgb(235, 113, 0);
    color: rgb(235, 113, 0);
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-size: 20px;
  padding: 0 0 30px 20px;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  margin-left: 135px;
  margin-top: 100px;
  width: 300px;
  background-color: #fff;
`;
