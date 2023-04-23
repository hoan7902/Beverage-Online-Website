import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await axios.post(
          "https://beverage-store7902.onrender.com/user/get-detail-user",
          {
            userId: localStorage.getItem("_id"),
          }
        );
        setUser(data?.data?.data?.user);
      } catch (error) {
        console.log(error);
      }
    };
    const getCart = async () => {
      try {
        const data = await axios.get(
          `https://beverage-store7902.onrender.com/cart/get-all-cart?userId=${localStorage.getItem(
            "_id"
          )}`
        );
        setListCart(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
    getCart();
  }, []);
  return (
    <AppContext.Provider value={{ user, setUser, listCart, setListCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
