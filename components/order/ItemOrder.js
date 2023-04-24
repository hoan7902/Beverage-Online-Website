import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import Popup from "./Popup";
import { useState } from "react";
import Router from "next/router";

const ItemOrder = ({ item, listTopping, cart, setCart, checkChange }) => {
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    const test = localStorage.getItem("_id");
    if (test) setPop(true);
    else Router.push("/login");
  };

  return (
    <>
      <Stack
        justifyContent="center"
        textAlign="center"
        backgroundColor="#fff"
        boxShadow="0px 2px 1.5px 0px #ccc"
        alignItems="center"
        mb="10px"
        ml="10px"
      >
        <Box borderRadius="6px" grey className={homeStyles.wrapperImage}>
          <Image
            class={homeStyles.imageProduct}
            width="161.25px"
            height="161.25px"
            alt="product"
            src={item.image}
            style={{ height: 50 }}
            borderRadius="5px"
          />
        </Box>
        <Stack p="10px 0" justifyContent="center" alignItems="center">
          <Stack height="80px" justifyContent="space-between" mb="15px">
            <Typography
              p="10px"
              textTransform="capitalize"
              fontWeight="600"
              fontSize="13px"
            >
              {item.name}
            </Typography>
            <Typography fontSize="13px">{parseInt(item.price).toLocaleString()}đ</Typography>
          </Stack>
          <Box
            className={homeStyles.mainButton}
            width="100px"
            m="10px 20px"
            p="5px 10px"
            backgroundColor="#d3b673"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <Typography
              className={homeStyles.textButton}
              textTransform="uppercase"
              color="#fff"
              fontSize="13px"
            >
              Đặt hàng
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Popup
        cart={cart}
        setCart={setCart}
        listTopping={listTopping}
        item={item}
        trigger={pop}
        setPop={setPop}
        checkChange={checkChange}
      />
    </>
  );
};

export default ItemOrder;
