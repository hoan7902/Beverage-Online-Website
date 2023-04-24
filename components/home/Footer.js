import { Typography, Box, Stack } from "@mui/material";
import Appstore from "../../assets/image/logo-appstore.svg";
import Playstore from "../../assets/image/logo-playstore.svg";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <Box
      className={homeStyles.homeFooter}
      position="relative"
      zIndex="2"
      width="100vw"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        top="0"
        right="0"
        left="0"
        bottom="0"
        backgroundColor="rgba(51, 51, 51, 0.86)"
        zIndex="-2"
      />
      <Box zIndex="100">
        <Typography
          margin="0 100px"
          padding="20px 20px 20px 0"
          letterSpacing={4}
          variant="h2"
          fontSize="40px"
          color="#ccc"
          textTransform="uppercase"
          textAlign="center"
        >
          Jucify
        </Typography>
      </Box>
      <Box
        zIndex="100"
        margin="0 100px"
        borderTop="1px solid #ccc"
        borderBottom="1px solid #ccc"
      >
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="center"
          color="#ccc"
          m="20px 0"
        >
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Về Jucify
          </Typography>
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Mở quán trên Jucify
          </Typography>
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Trung tâm hỗ trợ
          </Typography>
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Blog
          </Typography>
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Trở thành tài xế Jucify
          </Typography>
          <Typography textAlign="center" fontSize="20px" fontWeight={550}>
            Câu hỏi thường gặp
          </Typography>
        </Stack>
      </Box>
      <Stack flexDirection="row" padding="20px 0" justifyContent="center">
        <Box mr="20px">
          <Image src={Appstore} alt="app-store" />
        </Box>
        <Box>
          <Image src={Playstore} alt="play-store" />
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
