import { Typography, Stack } from "@mui/material";
import ItemOrder from "./ItemOrder";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import orderStyles from "../../styles/Order.module.css";
import Image from "next/image";
import Down from "../../assets/image/chevron-down-solid.svg";
import LoaderWaiting from '../Loader'

const ListOrder = ({ title, id, listTopping }) => {
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
            if (res.data.data) {
                setListCategoryProduct(res.data.data.listProduct);
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
                    m='15px 0'
                >
                    <Typography
                        ml='20px'
                        fontWeight={600}
                        variant="h1"
                        fontSize="16px"
                    >
                        {title}
                    </Typography>
                    <Typography
                        onClick={handleClick}
                        style={{ cursor: "pointer" }}
                        fontWeight={600}
                        variant="h2"
                        fontSize="16px"
                        mr='20px'
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
                    ref={element}
                    className={
                        orderCategory
                            ? orderStyles.wrapperListOrder
                            : orderStyles.wrapperListOrderHidden
                    }
                >
                    {listCategoryProduct
                        ? listCategoryProduct.map((item) => (
                            <ItemOrder listTopping={listTopping} key={item._id} item={item} title="" />
                        ))
                        : <Stack alignItems='center' justifyContent='center' width='100%'><LoaderWaiting/></Stack>}
                </Stack>
            </Stack>
        </>
    );
};

export default ListOrder;
