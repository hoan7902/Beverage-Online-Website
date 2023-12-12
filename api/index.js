// pages/api/example.js

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_BE_URL;

// Function to get the token from localStorage
const getTokenFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: baseUrl,
  // You can add other default configurations here if needed
});

// Get the token from localStorage
const token = getTokenFromLocalStorage();

// Set Bearer token as a default header for all requests if token exists
if (token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const getListProduct = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/product`);
    const data = res.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const signIn = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/user/signin`, {
      email,
      password,
    });
    console.log('check res: ', res);
    return res.data;
  } catch (error) {
    console.error('Error login:', error);
  }
};

export const addToCart = async (payload) => {
  try {
    await axiosInstance.post(`${baseUrl}/cart`, payload);
  } catch (error) {
    console.error('Error add to cart:', error);
  }
};

export const getAllProductsInCart = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/cart/${userId}`);
    return res.data.map(product => ({...product, listTopping: []}));
  } catch (error) {
    console.error('Error getAllProductsInCart:', error);
  }
};

export const deleteProductFromCart = async (cartId) => {
  try {
    await axiosInstance.delete(`${baseUrl}/cart/delete`, {
      data: { cartId }
    });
  } catch (error) {
    console.error('Error delete product in cart:', error);
  }
};

export const deleteAllProductFromCart = async (userId) => {
  try {
    await axiosInstance.delete(`${baseUrl}/cart/deleteAll`, {
      data: { userId }
    });
  } catch (error) {
    console.error('Error delete all product in cart:', error);
  }
};

export const getUserById = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/user/${userId}`, {
      data: { userId }
    });
    return res.data;
  } catch (error) {
    console.error('Error get user:', error);
  }
};

export const createUserOrder = async (payload) => {
  try {
    const res = await axiosInstance.post(`${baseUrl}/order`, payload);
    return res.data;
  } catch (error) {
    console.error('Error create user order:', error);
  }
};

export const getListUserOrder = async (userId) => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/order/${userId}`);
    return res.data;
  } catch (error) {
    console.error('Error get user order:', error);
  }
};

export const updateUserProfile = async (userId, payload) => {
  try {
    console.log('check payload: ', payload);
    console.log('check userId: ', userId);
    await axiosInstance.put(`${baseUrl}/user/${userId}`, payload);
    return true; // true nghĩa là k có lỗi
  } catch (error) {
    console.error('Error update user profile:', error);
    return false; // failed
  }
};