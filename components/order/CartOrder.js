import React, { useEffect, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import homeStyles from "../../styles/Home.module.css";
import axios from "axios";
import Router from "next/router";
import { useAppContext } from "../../contexts/AppProvider";

// var getCart = undefined

const CartOrder = ({ cart, setCart }) => {
  const [listProduct, setListProduct] = useState();
  const [toDelete, setToDelete] = useState(false);
  const { setListCart } = useAppContext();
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
    console.log(typeof userId, typeof _id);
    console.log(userId, _id);

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
    console.log("đã refresh lại");
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
    <Box>
      <Stack
        position="fixed"
        sx={{ overflowY: "scroll" }}
        // overflowY='scroll'
        width="300px"
        height="fit-content"
        top="20px"
        right="0"
        p="20px"
        backgroundColor="#fff"
        m="60px 100px"
        borderRadius="5px"
        boxShadow="0 2px 7px 0 rgb(0 0 0 / 5%)"
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
          p="20px 0"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #f1f1f1"
        >
          {listProduct === undefined || listProduct.length === 0 ? (
            <Typography
              width="100%"
              fontSize="14px"
              variant="h3"
              color="#282828"
            >
              Chưa có sản phẩm nào!
            </Typography>
          ) : (
            <Stack width="100%">
              {listProduct.map((item, index) => {
                const totalOfTopping = 0;
                for (let i = 0; i < item.listTopping.length; i++) {
                  totalOfTopping += item.listTopping[i].price;
                }
                const totalPrice =
                  (item.product.price + totalOfTopping) * item.quantity;
                return (
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
                );
              })}
            </Stack>
          )}
        </Stack>
        <Box
          className={homeStyles.mainButton}
          p="5px 20px"
          backgroundColor="#d3b673"
          borderRadius="6px"
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
    </Box>
  );
};

export default CartOrder;
