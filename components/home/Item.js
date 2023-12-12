import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import { customNextLoader } from "../../utils";

const Item = ({ item }) => {
  return (
    <Stack
      justifyContent="center"
      textAlign="center"
      backgroundColor="#fff"
      boxShadow="0px 2px 1.5px 0px #ccc"
      className={homeStyles.item}
      m="10px"
    >
      <Box width="100%" grey className={homeStyles.wrapperImage}>
        <Image
          class={homeStyles.imageProduct}
          height="300px"
          width="300px"
          alt="product"
          src={item.images[0]}
          loader={customNextLoader}
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
        <Typography>{parseInt(item.sizes[0].price).toLocaleString()}đ</Typography>
      </Box>
    </Stack>
  );
};

export default Item;
