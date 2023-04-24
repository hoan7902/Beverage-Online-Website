import { Stack, Box } from "@mui/material";
import CategoryOrder from "../components/order/CategoryOrder";
import ListOrder from "../components/order/ListOrder";
import CartOrder from "../components/order/CartOrder";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/layout";

var checkChange = false;

const Order = () => {
  const [cart, setCart] = useState([]);
  const [listNameCategory, setListNameCategory] = useState("");
  const [listTopping, setListTopping] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        "https://beverage-store7902.onrender.com/category/get-category"
      );
      setListNameCategory(res.data.data.listCategory);

      const resTopping = await axios(
        `https://beverage-store7902.onrender.com/topping/get-topping`
      );
      if (resTopping.data.data) {
        setListTopping(resTopping.data.data.listTopping);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <Box>
        <Stack
          position="relative"
          backgroundColor="#fbfbfb"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          width="100vw"
          justifyContent="space-around"
        >
          <Box sx={{ width: { md: "30%", xs: "100%" } }} height="100%">
            <CategoryOrder listNameCategory={listNameCategory} />
          </Box>
          <Stack sx={{ width: { md: "40%", xs: "100%" } }}>
            {listNameCategory
              ? listNameCategory.map((item) => (
                  <ListOrder
                    key={item._id}
                    id={item._id}
                    title={item.name}
                    listTopping={listTopping}
                    cart={cart}
                    setCart={setCart}
                    checkChange={checkChange}
                  />
                ))
              : ""}
          </Stack>
          <Box sx={{ width: { xs: "30%" } }}>
            <CartOrder
              checkChange={checkChange}
              cart={cart}
              setCart={setCart}
            />
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Order;
