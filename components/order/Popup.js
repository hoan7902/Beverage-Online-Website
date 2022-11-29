import { Stack, Typography, Box } from "@mui/material";
import stylesOrder from "../../styles/Order.module.css";
import stylesHome from "../../styles/Home.module.css";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const typeTopping = [];
const Popup = ({ item, trigger, setPop, listTopping, cart, setCart }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [arrItem, setArrItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const priceOfTopping = 0;
    totalPrice = item.price;
    typeTopping = [];
    listTopping.map((topping, index) => {
      if (arrItem.includes(index)) {
        priceOfTopping += topping.price;
        const object = {
          name: topping.name,
          price: topping.price,
        };
        typeTopping.push(object);
      }
    });
    setTotalPrice((totalPrice + priceOfTopping) * quantity);
  }, [isChecked]);

  const dropQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - totalPrice / quantity);
    }
  };

  const riseQuantity = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + totalPrice / quantity);
  };

  const addToCart = () => {
    setCart([
      ...cart,
      {
        name: item.name,
        totalPrice: totalPrice,
        image: item.image,
        quantity: quantity,
        typeTopping: typeTopping,
      },
    ]);
    setTotalPrice(item.price);
    setQuantity(1);
    setArrItem([]);
    setPop(false);
    typeTopping = [];
  };
  const handleChange = (price, value) => {
    //arrItem is array of Topping
    if (!arrItem.includes(value)) {
      setArrItem((arrItem) => [...arrItem, value]);
      setIsChecked(!isChecked);
    } else {
      const indexRm = arrItem.indexOf(value);
      setArrItem((pre) => {
        const temp = pre;
        temp.splice(indexRm, 1);
        setIsChecked(!isChecked);
        return temp;
      });
    }
  };

  return trigger ? (
    <div className={stylesOrder.layer}>
      <Stack
        minWidth="600px"
        backgroundColor="#fbfbfb"
        p="20px"
        borderRadius={2}
      >
        <Stack flexDirection="row" justifyContent="space-between">
          <Image alt="img" src={item.image} width="170px" height="170px" />
          <Stack minWidth="70%" pl="20px" pr="100px">
            <Typography p="10px" fontSize="18px" fontWeight={600}>
              {item.name}
            </Typography>
            <Typography p="10px" color="#8a733f" fontWeight={600}>
              {item.price}đ
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
                borderRadius="6px"
                style={{ cursor: "pointer" }}
                ml="10px"
              >
                <Typography
                  className={stylesHome.textButton}
                  textTransform="Capitalize"
                  color="#fff"
                  fontSize="14px"
                  variant="h1"
                  letterSpacing={1}
                  onClick={addToCart}
                >
                  {totalPrice}đ
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <CloseIcon
            className={stylesOrder.closeButton}
            onClick={() => {
              setTotalPrice(item.price);
              setQuantity(1);
              setArrItem([]);
              setPop(false);
              typeTopping = [];
            }}
            cursor="pointer"
          />
        </Stack>
        <Stack>
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
                <Stack key={item._id} to={item._id} spy={true} smooth={true}>
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
                        + {item.price}đ
                      </Typography>
                      <input
                        type="checkbox"
                        value={isChecked}
                        onChange={() => handleChange(item.price, index)}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              ))
            : ""}
        </Stack>
      </Stack>
    </div>
  ) : (
    ""
  );
};

export default Popup;
