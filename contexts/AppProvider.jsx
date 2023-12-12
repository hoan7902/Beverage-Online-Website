import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { getUserById } from "../api";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [listCart, setListCart] = useState([]);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const userData = await getUserById(userId);
        console.log('check userData.user: ', userData.user);
        setUser(userData.user);
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
