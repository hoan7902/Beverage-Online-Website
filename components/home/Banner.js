import Image from "next/image";
import { Box, Typography, Stack } from "@mui/material";
import Mouse from "../../assets/image/ic_scoll.webp";
import homeStyles from "../../styles/Home.module.css";
import { Link } from "react-scroll";

const Banner = () => {
    return (
        <>
            <Stack
                className={homeStyles.bannerPicture}
                position="relative"
                zIndex="2"
                height="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    position="absolute"
                    width="100%"
                    height="100%"
                    top="0"
                    right="0"
                    left="0"
                    bottom="0"
                    backgroundColor="rgba(0, 0, 0, 0.4)"
                    zIndex="-2"
                />
                <Link to="home" spy={true} smooth={true}>
                    <Typography
                        mt="350px"
                        mb="30px"
                        p="8px 15px"
                        border="2px solid #fff"
                        backgroundColor="transparent"
                        borderRadius="6px"
                        letterSpacing={4}
                        fontWeight={700}
                        textAlign="center"
                        className={homeStyles.homeButton}
                        textTransform="uppercase"
                        color="#fff"
                    >
                        Đặt hàng
                    </Typography>
                </Link>
                <Box className={homeStyles.mouseMoveWrapper} mb="30px">
                    <Image
                        className={homeStyles.mouseMove}
                        fontWeight={700}
                        src={Mouse}
                        alt="mouse"
                    />
                </Box>
                <Typography color="#fff">Cuộn xuống</Typography>
            </Stack>
        </>
    );
};

export default Banner;
