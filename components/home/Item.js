import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import Link from "next/link";

const Item = ({ item }) => {
    return (
        <Stack
            justifyContent="center"
            textAlign="center"
            width="300px"
            margin="0 20px"
            backgroundColor="#fff"
            borderRadius="5px"
            boxShadow="0px 2px 1.5px 0px #ccc"
            className={homeStyles.item}
            m="15px 15px"
        >
            <Box borderRadius="6px" grey className={homeStyles.wrapperImage}>
                <Image
                    class={homeStyles.imageProduct}
                    height="300px"
                    width="300px"
                    alt="product"
                    src={item.image}
                    style={{ height: 50 }}
                    borderRadius="5px"
                />
            </Box>
            <Box p="30px 0">
                <Typography
                    pb="10px"
                    textTransform="capitalize"
                    fontWeight="600"
                    fontSize="20px"
                >
                    {item.name}
                </Typography>
                <Typography>{item.price}đ</Typography>
                <Link href="/order">
                    <Box
                        className={homeStyles.mainButton}
                        m="20px 80px 0 80px"
                        p="8px 15px"
                        backgroundColor="#d3b673"
                        borderRadius="6px"
                        style={{ cursor: "pointer" }}
                    >
                        <Typography
                            className={homeStyles.textButton}
                            textTransform="uppercase"
                            color="#fff"
                        >
                            Đặt hàng
                        </Typography>
                    </Box>
                </Link>
            </Box>
        </Stack>
    );
};

export default Item;
