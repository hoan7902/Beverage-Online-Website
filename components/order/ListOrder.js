import { Typography, Stack } from "@mui/material";
import ItemOrder from "./ItemOrder";
import { useRef, useState, useEffect } from "react";
import orderStyles from "../../styles/Order.module.css";
import Image from "next/image";
import Down from "../../assets/image/chevron-down-solid.svg";
import LoaderWaiting from "../Loader";
import { getListProduct } from "../../api";

const ListOrder = ({ title, id, listTopping, cart, setCart }) => {
  const [orderCategory, setOrderCategory] = useState(true);
  const [listCategoryProduct, setListCategoryProduct] = useState("");
  const element = useRef();
  const handleClick = () => {
    setOrderCategory(!orderCategory);
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const res = await getListProduct();
      if (res) {
        setListCategoryProduct(res);
      }
    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Stack
        flexDirection="column"
        width="100%"
        justifyContent="center"
        mt="10px"
        id={id}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          m="15px 0"
        >
          <Typography ml="20px" fontWeight={600} variant="h1" fontSize="16px">
            {title}
          </Typography>
          <Typography
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            fontWeight={600}
            variant="h2"
            fontSize="16px"
            mr="20px"
          >
            <Image
              className={orderStyles.iconDownListOrder}
              height={15}
              width={15}
              src={Down}
              alt="down"
            />
          </Typography>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          ref={element}
          className={
            orderCategory
              ? orderStyles.wrapperListOrder
              : orderStyles.wrapperListOrderHidden
          }
          gap="20px"
        >
          {listCategoryProduct ? (
            listCategoryProduct.map((item) => (
              <ItemOrder
                cart={cart}
                setCart={setCart}
                listTopping={listTopping}
                key={item._id}
                item={item}
                title=""
              />
            ))
          ) : (
            <Stack alignItems="center" justifyContent="center" width="100%">
              <LoaderWaiting />
            </Stack>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default ListOrder;
