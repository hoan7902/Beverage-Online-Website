import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import homeStyles from "../../styles/Home.module.css";
const CartOrder = () => {
    return (
        <>
            <Stack
                position="fixed"
                width="300px"
                top="0"
                right="0"
                p="20px"
                justifyContent="center"
                backgroundColor="#fff"
                m="10px 100px"
                borderRadius="5px"
                height="fit-content"
                boxShadow="0 2px 7px 0 rgb(0 0 0 / 5%)"
            >
                <Stack
                    p="10px"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid #f1f1f1"
                >
                    <Typography
                        ml="10px"
                        fontSize="14px"
                        variant="h2"
                        fontWeight={700}
                    >
                        GIỎ HÀNG CỦA TÔI
                    </Typography>
                    <Typography fontSize="11px" variant="h3" color="#282828">
                        Xóa tất cả
                    </Typography>
                </Stack>
                <Stack
                    p="20px 0"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid #f1f1f1"
                >
                    <Typography fontSize="14px" variant="h3" color="#282828">
                        Chưa có sản phẩm nào!
                    </Typography>
                </Stack>
                <Box
                    className={homeStyles.mainButton}
                    p="5px 20px"
                    backgroundColor="#d3b673"
                    borderRadius="6px"
                    style={{ cursor: "pointer" }}
                >
                    <Typography
                        className={homeStyles.textButton}
                        color="#fff"
                        textAlign="center"
                        fontSize="14px"
                    >
                        Thanh toán
                    </Typography>
                </Box>
            </Stack>
        </>
    );
};

export default CartOrder;
