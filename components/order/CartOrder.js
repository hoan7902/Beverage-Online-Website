import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import homeStyles from "../../styles/Home.module.css";

var getCart = undefined

const CartOrder = ({ cart, setCart }) => {

    if (typeof window !== 'undefined') {
        localStorage.setItem('myCart', JSON.stringify(cart))
        const temp = localStorage.getItem('myCart')
        getCart = JSON.parse(temp)
        console.log(getCart)
    }

    const handleDeleteAll = () => {
        setCart([])
    }
    

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
                m="60px 100px"
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
                    <Typography style={{ cursor: 'pointer' }} onClick={handleDeleteAll} fontSize="11px" variant="h3" color="#282828">
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
                    {
                        getCart === undefined || getCart.length === 0 ?
                            <Typography
                                width='100%'
                                fontSize="14px"
                                variant="h3"
                                color="#282828"
                            >
                                Chưa có sản phẩm nào!
                            </Typography>
                            : 
                            <Stack width='100%'>
                                {
                                    getCart.map((item, index) => {
                                        return (
                                            <Stack
                                                pb='10px'
                                                key={index}
                                                borderBottom='1px solid #f1f1f1'
                                            >
                                                <Stack
                                                    p='6px'
                                                    flexDirection='row'
                                                    justifyContent='space-between'
                                                >
                                                    <Typography
                                                        maxWidth='97px'
                                                        fontWeight='600'
                                                        mr='10px'
                                                        textTransform='capitalize'
                                                        variant='h3'
                                                        fontSize='14px'
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        fontWeight={600}
                                                    >
                                                        x{item.quantity}
                                                    </Typography>
                                                    <Typography fontWeight={600}>{item.totalPrice}đ</Typography>
                                                </Stack>
                                                {
                                                    item.typeTopping.length === 0 ? ''
                                                        :
                                                        <Stack
                                                            ml='20px'
                                                            justifyContent='space-between'
                                                        >
                                                            {item.typeTopping.map((item, index) => {
                                                                return (
                                                                    <>
                                                                        <Stack
                                                                            key={index}
                                                                            flexDirection='row'
                                                                            justifyContent='space-between'
                                                                        >
                                                                            <Typography
                                                                                p='2px'
                                                                                fontSize='12px'
                                                                                mr='10px'
                                                                            >
                                                                                {item.name}
                                                                            </Typography>
                                                                            <Typography
                                                                                p='2px'
                                                                                fontSize='12px'
                                                                            >
                                                                                +{item.price}đ
                                                                            </Typography>
                                                                        </Stack>
                                                                    </>
                                                                )
                                                            })}
                                                        </Stack>
                                                }
                                            </Stack>
                                        )
                                    })
                                }
                            </Stack>
                    }

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
