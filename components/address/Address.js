import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/menu";
import styles from "../../styles/Profile.module.css";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

function Address() {
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
                        <Link href="/profile/manageorders">
                            QUẢN LÝ ĐƠN HÀNG
                        </Link>
                    </TitleForWard>
                    <ColorTitleForWard>ĐỊA CHỈ GIAO HÀNG</ColorTitleForWard>
                    <TitleForWard>
                        <Link href="/profile/wishlist">
                            DANH SÁCH YÊU THÍCH
                        </Link>
                    </TitleForWard>
                </MenuContainer>
                <Box
                    sx={{
                        marginTop: "120px",
                        padding: "0 10px",
                        backgroundColor: "#fff",
                    }}
                >
                    <TitleContainer>
                        <Title>Địa chỉ giao hàng</Title>
                    </TitleContainer>

                    <ButtonAddress>Thêm địa chỉ mới</ButtonAddress>
                </Box>
            </Box>
            <Advertisement />
            <Footer />
        </div>
    );
}
export default Address;
const ButtonAddress = styled.button`
    color: rgb(0, 121, 63);
    cursor: pointer;
    background-color: rgb(229, 246, 240);
    border-radius: 4px;
    text-align: center;
    padding: 6px;
    border: none;
    outline: none;
    margin: 20px 50% 0 50%;
    min-width: max-content;
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
