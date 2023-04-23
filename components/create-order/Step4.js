import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";
import io from "socket.io-client";
import axios from "axios";
const socket = io("https://sleepy-scrubland-61892.herokuapp.com");

function Step4() {
  const { listCart, user } = useAppContext();
  const [address, setAddress] = useState("");
  const [momo, setMomo] = useState();
  const router = useRouter();
  console.log(momo);
  const handleSubmit = async (totalPrice) => {
    try {
      if (momo) router.push("/momo");
      else {
        const listProduct = listCart.map((item) => {
          return {
            ...item.product,
            productId: item.product._id,
            quantity: item.quantity,
            toppings: item.listTopping,
          };
        });
        const data = {
          phoneNumber: user?.phoneNumber,
          userName: user?.userName,
          listProduct: listProduct,
          totalPrice,
          isPay: momo,
          status: "pending",
          address,
          userId: user?._id,
          description: localStorage.getItem("notice"),
        };
        await axios.post(
          "https://beverage-store7902.onrender.com/order/add-order",
          data
        );
        socket.emit("client-submit", { userId: user?._id });
        router.push("/profile/manageorders");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const data = `${localStorage.getItem("ward")} - ${localStorage.getItem(
      "district"
    )} - ${localStorage.getItem("province")}`;
    const isMomo = localStorage.getItem("momo") === "true" ? true : false;
    const handle = () => {
      setMomo(isMomo);
      setAddress(data);
    };
    handle();
  }, []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("success");
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  console.log(listCart);
  let finalPrice = 0;
  const shipFee = 9000;
  listCart.map((cart) => {
    let totalOfTopping = 0;
    for (let i = 0; i < cart.listTopping.length; i++) {
      totalOfTopping += cart.listTopping[i].price;
    }
    const totalPrice = (cart.product.price + totalOfTopping) * cart.quantity;
    finalPrice += totalPrice;
  });
  return (
    <>
      <div className={style["title-forward"]}>
        <div style={{ display: "flex", borderBottom: "2px soild #D8B979" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              textAlign: "center",
              backgroundColor: "green",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>
              <Icon icon={check} style={{ color: "#fff" }} />
            </span>
          </div>
          <div className={style["title"]}>
            Địa chỉ giao hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex", borderBottom: "2px soild #D8B979" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              textAlign: "center",
              backgroundColor: "green",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>
              <Icon icon={check} style={{ color: "#fff" }} />
            </span>
          </div>
          <div className={style["title"]}>
            Kiểm tra đơn hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex", borderBottom: "2px soild #D8B979" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              textAlign: "center",
              backgroundColor: "green",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>
              <Icon icon={check} style={{ color: "#fff" }} />
            </span>
          </div>
          <div className={style["title"]}>
            Hình thức thanh toán
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div className={style["title-contain"]}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              backgroundColor: "#D8B979",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#ffffff" }}>4</span>
          </div>
          <div className={style["title-current"]}>
            Xác nhận và mua hàng
            <Icon icon={chevronRight} style={{ marginLeft: "30px" }} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "10px 50px 0 50px",
        }}
      >
        <p className={style["title-step"]}>Thông tin giao hàng</p>

        <Link href="/createorder">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </div>
      <div
        className={style["info-customer"]}
        style={{ margin: "10px 50px 10px 50px" }}
      >
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Họ tên khách hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>{user?.userName}</p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Điện thoại liên lạc
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            {user?.phoneNumber}
          </p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Địa chỉ giao hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>{address}</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "10px 50px 0 50px",
        }}
      >
        <p className={style["title-step"]}>Thông tin đơn hàng</p>
        <Link href="/createorder/step2">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </div>
      <div
        className={style["cost"]}
        style={{ margin: "10px 50px 20px 50px", height: "300px" }}
      >
        <div style={{ borderBottom: "1px solid #BAB8B8" }}>
          <div style={{ display: "flex", margin: "10px 40px 10px 40px" }}>
            <p style={{ flex: "1", fontSize: "22px", color: "#6B6B6B" }}>
              Chi phí nước uống
            </p>
            <p style={{ flex: "0.2", fontSize: "22px", color: "#6B6B6B" }}>
              {finalPrice}
            </p>
          </div>
          <div style={{ display: "flex", margin: "10px 40px 10px 40px" }}>
            <p style={{ flex: "1", fontSize: "22px", color: "#6B6B6B" }}>
              Phí vận chuyển
            </p>
            <p style={{ flex: "0.2", fontSize: "22px", color: "#6B6B6B" }}>
              {shipFee}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", margin: "20px 40px" }}>
          <p style={{ flex: "1", fontSize: "30px", fontWeight: 500 }}>
            Tổng chi phí
          </p>
          <p style={{ flex: "0.2", fontSize: "30px", fontWeight: 500 }}>
            {finalPrice + shipFee}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "20px 50px 0 50px",
        }}
      >
        <p className={style["title-step"]}>Hình thức thanh toán</p>

        <Link href="/createorder/step3">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </div>
      <div className={style["pay-ment"]}>
        <div style={{ margin: "10px 40px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Khách hàng thanh toán
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            {momo === true
              ? "Thanh toán bằng momo"
              : "Thanh toán khi nhận hàng"}
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <button
          className={style["confirm-order"]}
          onClick={() => handleSubmit(finalPrice)}
        >
          Tiến hành đặt hàng
        </button>
      </div>
    </>
  );
}
export default Step4;
