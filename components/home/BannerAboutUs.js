import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Banner from "../../assets/image/banner_about_us.png";
import Homeline from "../../assets/image/home_line.webp";

const BannerAboutUs = () => {
  return (
    <Stack
      flexDirection="column"
      justifyContent="flex-end"
      position="relative"
      width="100%"
      p="0 6%"
      sx={{ position: "relative" }}
    >
      <Image src={Banner} alt="banner" />
      <Stack
        zIndex="2"
        justifyContent="center"
        alignItems="center"
        sx={{ position: { md: "absolute"}, left: { md: "50%", }, bottom: { md: "30%", sm: "0"} }}
      >
        <Typography
          p="10px"
          textTransform="capitalize"
          color="#d3b673"
          variant="h3"
          fontSize="25px"
          fontWeight={700}
        >
          Story
        </Typography>
        <Typography
          p="10px"
          textTransform="uppercase"
          letterSpacing={1.8}
          fontWeight="700"
          fontSize="36px"
          color="#00000"
        >
          Về chúng tôi
        </Typography>
        <Image src={Homeline} alt="home-line" />
        <Typography
          mt="15px"
          textAlign="center"
          fontSize="15px"
          fontStyle="light"
        >
          Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi,
          <br /> chúng tôi luôn tự tin mang đến khách hàng những trải nghiệm{" "}
          <br /> tốt nhất về dịch vụ và không gian.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default BannerAboutUs;
