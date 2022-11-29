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
      borderradius="5px"
      boxShadow="0px 2px 1.5px 0px #ccc"
      className={homeStyles.item}
      m="15px 15px"
    >
      <Box borderradius="6px" grey="true" className={homeStyles.wrapperImage}>
        <Image
          className={homeStyles.imageProduct}
          height="300px"
          width="300px"
          alt="product"
          src={item.image}
          style={{ height: 50 }}
          borderradius="5px"
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
        <Box
          className={homeStyles.mainButton}
          m="20px 80px 0 80px"
          p="8px 15px"
          backgroundColor="#d3b673"
          borderradius="6px"
          style={{ cursor: "pointer" }}
        >
          <Link href="/order">
            <Typography
              className={homeStyles.textButton}
              textTransform="uppercase"
              color="#fff"
            >
              Đặt hàng
            </Typography>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default Item;
