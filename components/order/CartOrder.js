import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import homeStyles from "../../styles/Home.module.css";
import axios from "axios";
import Router from "next/router";
import { useAppContext } from "../../contexts/AppProvider";
import glassIcon from "../../assets/image/icon-glass-tea.png";
import Image from "next/image";
import Down from "../../assets/image/chevron-down-solid.svg";
import orderStyles from "../../styles/Order.module.css";

// var getCart = undefined

const CartOrder = ({ cart, setCart }) => {
  const [listProduct, setListProduct] = useState();
  const [toDelete, setToDelete] = useState(false);
  const isTablet = useMediaQuery("(max-width:900px)");
  const [orderCategory, setOrderCategory] = useState(false); // use to open List Product Cart
  const { setListCart } = useAppContext();

  const handleClick = () => {
    setOrderCategory(!orderCategory);
  };

  const handleDeleteAll = () => {
    const userId = localStorage.getItem("_id");
    listProduct.forEach((item) => {
      const objectDelete = {
        userId: userId,
        productId: item.product._id,
      };

      const functionDelete = async () => {
        // DELETE request using axios with async/await
        const res = await axios.delete(
          "https://beverage-store7902.onrender.com/cart/remove-from-cart",
          { data: objectDelete },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        setToDelete(!toDelete);
        console.log("Delete success", res);
      };
      functionDelete();
    });
    setCart([]);
  };

  const checkout = () => {
    setListCart(listProduct);
    Router.push("/createorder");
  };

  const deleteItem = (_id) => {
    const userId = localStorage.getItem("_id");

    const objectDelete = {
      userId: userId,
      productId: _id,
    };

    const functionDelete = async () => {
      // DELETE request using axios with async/await
      const res = await axios.delete(
        "https://beverage-store7902.onrender.com/cart/remove-from-cart",
        { data: objectDelete },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setToDelete(!toDelete);
      console.log("Delete success", res);
    };

    functionDelete();
  };

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("_id");

      const res = await axios(
        `https://beverage-store7902.onrender.com/cart/get-all-cart?userId=${userId}`
      );

      if (res.data.data) {
        setListProduct(res.data.data);
      }
    };
    fetchData();
  }, [cart, toDelete]);

  return (
    <Stack
      height="fit-content"
      sx={{
        top: { md: "75px", lg: "20px" },
        right: { sm: "0px", md: "10px" },
        overflowY: "scroll",
        position: { xs: "fixed" },
        padding: { xs: "20px" },
        margin: { lg: "60px 100px" },
        width: { xs: " 100%", md: "250px", lg: "300px" },
      }}
      bottom={isTablet && "0px"}
      justifyContent="center"
      backgroundColor="#fff"
      boxShadow="0 2px 7px 0 rgba(0, 0, 0, .05)"
    >
      <Stack
        p="10px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #f1f1f1"
      >
        <Typography ml="10px" fontSize="14px" variant="h2" fontWeight={700}>
          GIỎ HÀNG CỦA TÔI
        </Typography>
        <Typography
          style={{ cursor: "pointer" }}
          onClick={handleDeleteAll}
          fontSize="11px"
          variant="h3"
          color="#282828"
        >
          Xóa tất cả
        </Typography>
      </Stack>
      <Stack
        sx={{ padding: { xs: "0", md: "20px 0" } }}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #f1f1f1"
      >
        {listProduct === undefined || listProduct.length === 0 ? (
          <Typography mb="10px" width="100%" fontSize="14px" variant="h3" color="#282828">
            Chưa có sản phẩm nào!
          </Typography>
        ) : (
          <Stack width="100%">
            <Stack flexDirection="row" alignItems="center" width="100%">
              <Stack flexDirection="row" alignItems="center" width="100%">
                <Image width="22px" height="35px" src={glassIcon} alt="glass" />
                <Typography
                  fontWeight="600"
                  maxWidth="120px"
                  m="0 10px"
                  variant="h3"
                  fontSize="14px"
                >
                  {listProduct.length} sản phẩm
                </Typography>
              </Stack>
              <Box
                onClick={handleClick}
                style={{ cursor: "pointer" }}
                fontWeight={600}
                variant="h2"
                fontSize="16px"
                mr="20px"
                display={!isTablet && "none"}
              >
                <Image
                  className={orderStyles.iconDownListOrder}
                  height={15}
                  width={15}
                  src={Down}
                  alt="down"
                />
              </Box>
            </Stack>
            {listProduct.map((item, index) => {
              const totalOfTopping = 0;
              for (let i = 0; i < item.listTopping.length; i++) {
                totalOfTopping += item.listTopping[i].price;
              }
              const totalPrice =
                (item.product.price + totalOfTopping) * item.quantity;
              return !isTablet ? (
                <Stack pb="10px" key={index} borderBottom="1px solid #f1f1f1">
                  <Stack
                    p="6px"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontWeight="600"
                      maxWidth="120px"
                      mr="10px"
                      variant="h3"
                      fontSize="14px"
                    >
                      {item.product.name} x {item.quantity}
                    </Typography>

                    <Stack
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography fontWeight={600} mr="5px">
                        {totalPrice}đ
                      </Typography>
                      <Typography
                        onClick={() => deleteItem(item.product._id)}
                        p="10px"
                        style={{ cursor: "pointer" }}
                      >
                        Xóa
                      </Typography>
                    </Stack>
                  </Stack>
                  {item.listTopping.length === 0 ? (
                    ""
                  ) : (
                    <Stack ml="20px" justifyContent="space-between">
                      {item.listTopping.map((value, index) => {
                        return (
                          <Box key={index}>
                            <Stack
                              key={index}
                              flexDirection="row"
                              justifyContent="space-between"
                            >
                              <Typography p="2px" fontSize="12px" mr="10px">
                                {value.name}
                              </Typography>
                              <Typography p="2px" fontSize="12px">
                                +{value.price}đ
                              </Typography>
                            </Stack>
                          </Box>
                        );
                      })}
                    </Stack>
                  )}
                </Stack>
              ) : (
                //on Table and Mobile
                <Stack
                  pb="10px"
                  key={index}
                  borderBottom="1px solid #f1f1f1"
                  className={
                    orderCategory
                      ? orderStyles.wrapperListOrder
                      : orderStyles.wrapperListOrderHidden
                  }
                >
                  <Stack
                    p="6px"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontWeight="600"
                      maxWidth="120px"
                      mr="10px"
                      variant="h3"
                      fontSize="14px"
                    >
                      {item.product.name} x {item.quantity}
                    </Typography>

                    <Stack
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography fontWeight={600} mr="5px">
                        {totalPrice}đ
                      </Typography>
                      <Typography
                        onClick={() => deleteItem(item.product._id)}
                        p="10px"
                        style={{ cursor: "pointer" }}
                      >
                        Xóa
                      </Typography>
                    </Stack>
                  </Stack>
                  {item.listTopping.length === 0 ? (
                    ""
                  ) : (
                    <Stack ml="20px" justifyContent="space-between">
                      {item.listTopping.map((value, index) => {
                        return (
                          <Box key={index}>
                            <Stack
                              key={index}
                              flexDirection="row"
                              justifyContent="space-between"
                            >
                              <Typography p="2px" fontSize="12px" mr="10px">
                                {value.name}
                              </Typography>
                              <Typography p="2px" fontSize="12px">
                                +{value.price}đ
                              </Typography>
                            </Stack>
                          </Box>
                        );
                      })}
                    </Stack>
                  )}
                </Stack>
              );
            })}
          </Stack>
        )}
      </Stack>
      <Box
        className={homeStyles.mainButton}
        p="5px 20px"
        backgroundColor="#d3b673"
        style={{ cursor: "pointer" }}
        onClick={checkout}
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
  );
};

export default CartOrder;
