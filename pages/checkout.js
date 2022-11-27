import { Stack, Box, Typography } from "@mui/material";
import contactStyles from "../styles/Contact.module.css";
import motor from "../assets/image/motor-scooter.png";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Advertisement from "../components/home/Advertisement";
import homeStyles from "../styles/Home.module.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal } from '@mui/material';

const Checkout = () => {
    const [listProduct, setListProduct] = useState()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const finalPrice = 0
    const feeShip = 69000
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

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
    })

    return (
        <Stack
            className={contactStyles.backgroundImage}
            position="relative"
            justifyContent="center"
            alignItems="center"
        >
            {/* Địa chỉ */}
            <Stack
                width="700px"
                m="40px 0"
                p="20px"
                backgroundColor="#fff"
                borderRadius="8px"
            >
                <Stack flexDirection="row">
                    <Image src={motor} alt="motor" />
                    <Stack justifyContent="center" ml="25px">
                        <Stack
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography
                                textTransform="uppercase"
                                variant="h2"
                                fontSize="20px"
                                fontWeight={700}
                            >
                                chuyển đến
                            </Typography>
                            <Box
                                className={homeStyles.mainButton}
                                p="5px 25px"
                                backgroundColor="#d3b673"
                                borderRadius="6px"
                                style={{ cursor: "pointer" }}
                            >
                                <Typography
                                    textAlign="center"
                                    className={homeStyles.textButton}
                                    textTransform="uppercase"
                                    color="#fff"
                                    fontSize="13px"
                                    fontWeight={500}
                                >
                                    Đổi
                                </Typography>
                            </Box>
                        </Stack>
                        <Typography
                            mt="20px"
                            variant="h3"
                            fontSize="15px"
                            fontWeight={500}
                        >
                            210/14 Hoàng Diệu 2, phường Linh Chiểu, quận Thủ
                            Đức, thành phố Hồ Chí Minh
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            {/* Đơn hàng */}
            <Stack
                width="700px"
                mb="40px"
                p="20px"
                backgroundColor="#fff"
                borderRadius="8px"
            >
                <Typography
                    textTransform="uppercase"
                    fontSize="20px"
                    fontWeight={600}
                >
                    Đơn hàng của bạn
                </Typography>
                {
                    listProduct === undefined || listProduct.length === 0 ?
                        <Typography
                            width='100%'
                            fontSize="14px"
                            variant="h3"
                            color="#282828"
                        >

                            Chưa có sản phẩm nào!
                        </Typography> :

                        <Stack m="10px 0">
                            {listProduct.map((item, index) => {
                                const totalOfTopping = 0
                                for (let i = 0; i < item.listTopping.length; i++) {
                                    totalOfTopping += item.listTopping[i].price
                                }
                                const totalPrice = (item.product.price + totalOfTopping) * item.quantity
                                finalPrice += totalPrice
                                return (
                                    <Stack
                                        key={index}
                                        mb="5px"
                                        flexDirection="row"
                                        justifyContent="space-between"
                                    >
                                        <Stack flexDirection="row">
                                            <Typography mr="10px">{item.quantity}x</Typography>
                                            <Typography>{item.product.name}</Typography>
                                        </Stack>
                                        <Stack flexDirection="row">
                                            <Typography mr="10px">{totalPrice}đ</Typography>
                                        </Stack>
                                    </Stack>
                                )
                            })}
                        </Stack>
                }

            </Stack>
            {/* Chốt đơn */}
            <Stack
                width="700px"
                mb="40px"
                p="15px"
                backgroundColor="#fff"
                borderRadius="8px"
            >
                <Typography
                    textTransform="uppercase"
                    fontSize="20px"
                    fontWeight={600}
                >
                    Tổng tiền
                </Typography>
                <Stack m="10px 0">
                    <Stack
                        mb="5px"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Stack flexDirection="row">
                            <Typography mr="10px">Tổng đơn</Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography mr="10px">{finalPrice}đ</Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        mb="5px"
                        flexDirection="row"
                        justifyContent="space-between"
                        borderBottom='solid 1px #f1f1f1'
                    >
                        <Stack flexDirection="row">
                            <Typography mr="10px">Phí giao hàng</Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography mr="10px">{feeShip}đ</Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        mb="5px"
                        flexDirection="row"
                        justifyContent="space-between"
                    >
                        <Stack flexDirection="row">
                            <Typography mr="10px">Thành tiền</Typography>
                        </Stack>
                        <Stack flexDirection="row">
                            <Typography mr="10px">{finalPrice + feeShip}đ</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box
                    className={homeStyles.mainButton}
                    p="5px 25px"
                    backgroundColor="#d3b673"
                    borderRadius="6px"
                    style={{ cursor: "pointer" }}
                    onClick={handleOpen}
                >
                    <Typography
                        textAlign="center"
                        className={homeStyles.textButton}
                        textTransform="uppercase"
                        color="#fff"
                        fontSize="13px"
                        fontWeight={500}
                    >
                        Đặt hàng
                    </Typography>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Đặt hàng thành công
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Cám ơn quý khách đã ủng hộ.
                            </Typography>
                        </Box>
                    </Modal>
                </Box>
            </Stack>
            <Advertisement />
            <Footer />
        </Stack>
    );
};

export default Checkout;
