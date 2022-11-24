import React, { useEffect, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import homeStyles from "../../styles/Home.module.css";
import axios from 'axios'

// var getCart = undefined

const CartOrder = ({ cart, setCart }) => {

    const [listProduct, setListProduct] = useState()

    // if (typeof window !== 'undefined') {
    //     localStorage.setItem('myCart', JSON.stringify(cart))
    //     const temp = localStorage.getItem('myCart')
    //     getCart = JSON.parse(temp)
    // }

    const handleDeleteAll = () => {
        // setCart([])
    }

    const deleteItem = async (_id) => {
        const userId = localStorage.getItem("_id");
        axios
            .delete(
                `https://sleepy-scrubland-61892.herokuapp.com/cart/remove-from-cart?userId=${userId}/${_id}`, {
                    userId: userId,
                    productId: _id
                }
            )
            .then((res) =>
                console.log(
                    "Delete Success",
                    res.data,
                    localStorage.getItem("_id"),
                    _id
                )
            );
    }

    useEffect(() => {
        const fetchData = async () => {
            const userId = localStorage.getItem('_id')
            const res = await axios(
                `https://sleepy-scrubland-61892.herokuapp.com/cart/get-all-cart?userId=${userId}`
            );
            if (res.data.data) {
                setListProduct(res.data.data);
            }
        };
        fetchData();
    }, [cart])

    return (
        <Box>
            <Stack
                // position="fixed"
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
                        listProduct === undefined || listProduct.length === 0 ?
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
                                    listProduct.map((item, index) => {
                                        return (
                                            <Stack
                                                pb="10px"
                                                key={index}
                                                borderBottom="1px solid #f1f1f1"
                                            >
                                                <Stack
                                                    p="6px"
                                                    flexDirection="row"
                                                    justifyContent="space-between"
                                                    alignItems='center'
                                                >
                                                    <Typography
                                                        fontWeight="600"
                                                        maxWidth="120px"
                                                        mr="10px"
                                                        variant="h3"
                                                        fontSize="14px"
                                                    >
                                                        {item.product.name} x{" "}
                                                        {item.quantity}
                                                    </Typography>

                                                    <Stack flexDirection="row" justifyContent='center' alignItems='center'>
                                                        <Typography
                                                            fontWeight={600}
                                                            mr="5px"
                                                        >
                                                            {item.product.price}
                                                            đ
                                                        </Typography>
                                                        <Typography onClick={() => deleteItem(item.product._id)} p='10px' style={{cursor: 'pointer'}}>
                                                            Xóa
                                                        </Typography>
                                                    </Stack>
                                                </Stack>
                                                {item.listTopping.length ===
                                                0 ? (
                                                    ""
                                                ) : (
                                                    <Stack
                                                        ml="20px"
                                                        justifyContent="space-between"
                                                    >
                                                        {item.listTopping.map(
                                                            (value, index) => {
                                                                return (
                                                                    <Box
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <Stack
                                                                            key={
                                                                                index
                                                                            }
                                                                            flexDirection="row"
                                                                            justifyContent="space-between"
                                                                        >
                                                                            <Typography
                                                                                p="2px"
                                                                                fontSize="12px"
                                                                                mr="10px"
                                                                            >
                                                                                {
                                                                                    value.name
                                                                                }
                                                                            </Typography>
                                                                            <Typography
                                                                                p="2px"
                                                                                fontSize="12px"
                                                                            >
                                                                                +
                                                                                {
                                                                                    value.price
                                                                                }

                                                                                đ
                                                                            </Typography>
                                                                        </Stack>
                                                                    </Box>
                                                                );
                                                            }
                                                        )}
                                                    </Stack>
                                                )}
                                            </Stack>
                                        );
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
        </Box>
    );
};

export default CartOrder;
