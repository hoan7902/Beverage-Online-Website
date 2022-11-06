import { Typography, Stack } from "@mui/material";
import ItemOrder from "./ItemOrder";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import orderStyles from "../../styles/Order.module.css";
import Image from "next/image";
import Down from "../../assets/image/chevron-down-solid.svg";

const ListOrder = ({ title, id }) => {
    const [orderCategory, setOrderCategory] = useState(true);
    const [listCategoryProduct, setListCategoryProduct] = useState("");
    const element = useRef();
    const handleClick = () => {
        setOrderCategory(!orderCategory);
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            const res = await axios(
                `https://sleepy-scrubland-61892.herokuapp.com/product/get-product?typeId=${id}`
            );
            //   setListCategoryProduct(res.data.listProduct)
            //   console.log(listCategoryProduct)
            if (res.data.data) {
                setListCategoryProduct(res.data.data.listProduct);
            }
        };
        fetchExercisesData();
    }, [id]);

    return (
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
            >
                <Typography
                    m="20px 0px"
                    fontWeight={600}
                    variant="h1"
                    fontSize="16px"
                >
                    {title}
                </Typography>
                <Typography
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    m="20px 0px"
                    fontWeight={600}
                    variant="h2"
                    fontSize="16px"
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
                flexWrap="wrap"
                justifyContent="space-between"
                ref={element}
                className={
                    orderCategory
                        ? orderStyles.wrapperListOrder
                        : orderStyles.wrapperListOrderHidden
                }
            >
                {listCategoryProduct
                    ? listCategoryProduct.map((item) => (
                          <ItemOrder key={item._id} item={item} title="" />
                      ))
                    : ""}
            </Stack>
        </Stack>
    );
};

export default ListOrder;
