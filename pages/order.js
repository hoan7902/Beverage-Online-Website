import { Stack, Box } from "@mui/material";
import CategoryOrder from "../components/order/CategoryOrder";
import ListOrder from "../components/order/ListOrder";
import CartOrder from "../components/order/CartOrder";
import { useState, useEffect } from "react";
import 'semantic-ui-css/semantic.min.css'
import axios from "axios";

const Order = () => {
    const [cart, setCart] = useState([])
    const [listNameCategory, setListNameCategory] = useState("");
    const [listTopping, setListTopping] = useState()
    const [render, setRender] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                "https://sleepy-scrubland-61892.herokuapp.com/category/get-category"
            );
            setListNameCategory(res.data.data.listCategory);

            const resTopping = await axios(
                `https://sleepy-scrubland-61892.herokuapp.com/topping/get-topping`
            );
            if (resTopping.data.data) {
              setListTopping(resTopping.data.data.listTopping);
            }
        };
        fetchData();
    }, []);

    return (
        <Stack
            position="relative"
            backgroundColor="#fbfbfb"
            flexDirection="row"
            width="100vw"
            justifyContent="space-around"
        >
            <Box width="30%">
                <CategoryOrder listNameCategory={listNameCategory} />
            </Box>
            <Stack width="40%">
                {listNameCategory
                    ? listNameCategory.map((item) => (
                            <ListOrder
                                key={item._id}
                                id={item._id}
                                title={item.name}
                                listTopping={listTopping}
                                cart={cart}
                                setCart={setCart}
                            />
                        ))
                    : ""}
            </Stack>
            <Box width="30%">
                <CartOrder cart={cart} setCart={setCart} />
            </Box>
        </Stack>
    );
};

export default Order;