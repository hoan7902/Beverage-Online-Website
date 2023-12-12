import { Stack, Typography, Box } from "@mui/material";
import stylesOrder from "../../styles/Order.module.css";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef, useEffect } from "react";
import { customNextLoader } from "../../utils";
import Sizes from "./Sizes";
import { addToCart } from "../../api";

let typeTopping = [];
const Popup = ({ item, trigger, setPop, /* listTopping,*/ cart, setCart }) => {
  const arrItem = useRef([]);
  const [indexOfSize, setIndexOfSize] = useState(0);
  const totalPrice = useRef(item.sizes[indexOfSize].price);
  const [quantity, setQuantity] = useState(1);
  const [priceRender, setPriceRender] = useState(item.sizes[indexOfSize].price);

  useEffect(() => {
    setPriceRender(item.sizes[indexOfSize].price);
  }, [indexOfSize]);

  const riseQuantity = () => {
    setQuantity(quantity + 1);
    totalPrice.current = totalPrice.current + totalPrice.current / quantity;
    setPriceRender(totalPrice.current);
  };

  const dropQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      totalPrice.current = totalPrice.current - totalPrice.current / quantity;
      setPriceRender(totalPrice.current);
    }
  };

  const handleAddToCart = () => {
    const ItemToPost = {
      userId: localStorage.getItem("userId"),
      productId: item.productId,
      quantity: quantity,
      size: item.sizes[indexOfSize].sizeName,
      // listTopping: typeTopping,
    };

    (async () => {
      await addToCart(ItemToPost);
      setCart([
        ...cart,
        {
          id: item.productId,
          name: item.name,
          totalPrice: totalPrice.curent,
          image: item.images[0],
          quantity: quantity,
          typeTopping: typeTopping,
        },
      ]);
    })();

    totalPrice.current = item.sizes[indexOfSize].price;
    setQuantity(1);
    arrItem.current = [];
    setPop(false);
    typeTopping = [];
  };

  // const handleChange = (value) => {
  //   if (!arrItem.current.includes(value)) {
  //     arrItem.current = [...arrItem.current, value];
  //   } else {
  //     const indexRm = arrItem.current.indexOf(value);
  //     arrItem.current.splice(indexRm, 1);
  //   }

  //   let priceOfTopping = 0;
  //   totalPrice.current = item.price;
  //   typeTopping = [];
  //   if (listTopping)
  //     listTopping.map((topping, index) => {
  //       if (arrItem.current.includes(index)) {
  //         priceOfTopping += topping.price;
  //         const object = {
  //           name: topping.name,
  //           price: topping.price,
  //         };
  //         typeTopping.push(object);
  //       }
  //     });
  //   totalPrice.current = (totalPrice.current + priceOfTopping) * quantity;
  //   setPriceRender(totalPrice.current);
  // };

  return trigger ? (
    <div className={stylesOrder.layer}>
      <Stack
        backgroundColor="#fbfbfb"
        p="20px"
        className={stylesOrder.myPopup}
        sx={{ width: { xs: "90%", md: "600px" } }}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Image
            className={stylesHome.imageProduct}
            alt="img"
            src={item.images[0]}
            width="170px"
            height="170px"
            loader={customNextLoader}
          />
          <Stack minWidth="70%" pl="20px" pr="100px">
            <Typography p="10px" fontSize="18px" fontWeight={600}>
              {item.name}
            </Typography>
            <Typography p="10px" color="#8a733f" fontWeight={600}>
              {item.sizes[indexOfSize].price}đ
            </Typography>
            <Stack p="10px" flexDirection="row" alignItems="center">
              <div
                onClick={dropQuantity}
                className={stylesOrder.changeQuantity}
              >
                -
              </div>
              <Typography padding="0 10px">{quantity}</Typography>
              <div
                onClick={riseQuantity}
                className={stylesOrder.changeQuantity}
              >
                +
              </div>
              <Box
                className={stylesHome.mainButton}
                p="7px 12px"
                backgroundColor="#d3b673"
                style={{ cursor: "pointer" }}
                ml="10px"
                onClick={handleAddToCart}
              >
                <Typography
                  className={stylesHome.textButton}
                  textTransform="Capitalize"
                  color="#fff"
                  fontSize="14px"
                  variant="h1"
                  letterSpacing={1}
                >
                  {priceRender}đ
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <CloseIcon
            className={stylesOrder.closeButton}
            onClick={() => {
              // setTotalPrice(item.price);
              totalPrice.current = item.sizes[indexOfSize].price;
              setQuantity(1);
              setPriceRender(item.sizes[indexOfSize].price);
              // setArrItem([]);
              arrItem.current = [];
              setPop(false);
              typeTopping = [];
            }}
            cursor="pointer"
          />
        </Stack>
        <Sizes sizes={item.sizes} indexOfSize={indexOfSize} setIndexOfSize={setIndexOfSize}/>
        {/* <Stack>
          <Stack
            sx={{ cursor: "pointer" }}
            p="10px"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px solid #f1f1f1"
          >
            <Typography
              ml="10px"
              fontSize="16px"
              variant="h2"
              fontWeight={700}
              textTransform="uppercase"
              color="#8a733f"
              letterSpacing={1}
            >
              Topping
            </Typography>
          </Stack>
          {listTopping
            ? listTopping.map((item, index) => (
              <Stack key={item.productId} to={item.productId} spy={true} smooth={true}>
                <Stack
                    sx={{ cursor: "pointer" }}
                    p="10px"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom="1px solid #f1f1f1"
                  >
                  <Typography
                      fontSize="14px"
                      variant="h3"
                      color="#282828"
                      textTransform="capitalize"
                      fontWeight={600}
                    >
                    {item.name}
                  </Typography>
                  <Stack flexDirection="row" alignItems="center">
                    <Typography
                        fontSize="14px"
                        variant="h3"
                        color="#282828"
                        mr="5px"
                      >
                      + {item.sizes[indexOfSize].price}đ
                    </Typography>
                    <input
                        type="checkbox"
                        onChange={() => handleChange(index)}
                      />
                  </Stack>
                </Stack>
              </Stack>
              ))
            : ""}
            </Stack> */ }
      </Stack>
    </div>
  ) : (
    ""
  );
};

export default Popup;
