import { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";
import io from "socket.io-client";
import axios from "axios";
import { Box, Stack } from "@mui/material";
import { createUserOrder } from "../../api";
const socket = io("https://sleepy-scrubland-61892.herokuapp.com");

const Step4 = () => {
  const { listCart, user } = useAppContext();
  console.log('check user step 4: ', user);
  const [address, setAddress] = useState("");
  const [momo, setMomo] = useState();
  let userId = "";
  if (typeof window !== 'undefined') {
    userId = localStorage.getItem("userId");
  }
  const router = useRouter();
  console.log(momo);
  const handleSubmit = async () => {
    try {
      if (typeof window !== "undefined") {
        if (momo) router.push("/momo");
        else {
          const payload = {
            phone: user?.phoneNumber || user?.phone,
            address,
            userId: user?.userId,
            note: localStorage.getItem("notice"),
          };
          await createUserOrder(payload);

          // listCart.forEach((item) => {
          //   const objectDelete = {
          //     userId: userId,
          //     productId: item.product._id,
          //   };
          //   const functionDelete = async () => {
          //     // DELETE request using axios with async/await
          //     await axios.delete(
          //       "https://beverage-store7902.onrender.com/cart/remove-from-cart",
          //       { data: objectDelete },
          //       {
          //         headers: {
          //           "content-type": "application/json",
          //         },
          //       }
          //     );
          //   };
          //   functionDelete();
          // });

          socket.emit("client-submit", { userId: user?.userId });
          router.push("/profile/manageorders");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const addressData = localStorage.getItem('address');
      const isMomo = localStorage.getItem("momo") === "true" ? true : false;
      const handle = () => {
        setMomo(isMomo);
        setAddress(addressData);
      };
      handle();
    }
  }, []);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("success");
    });
    return () => {
      socket.off("connect");
    };
  }, []);
  let finalPrice = 0;
  const shipFee = 0;
  listCart.map((cart) => {
    let totalOfTopping = 0;
    for (let i = 0; i < cart.listTopping.length; i++) {
      totalOfTopping += cart.listTopping[i].price;
    }
    const totalPrice = (cart.size[0].price + totalOfTopping) * cart.quantity;
    finalPrice += totalPrice;
  });
  return (
    <Stack>
      <Stack
        sx={{ flexDirection: { xs: "column", md: "row" } }}
        className={style["title-forward"]}
      >
        <Box display="flex" borderBottom="2px soild #D8B979" p="10px 0">
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
          <div className={style["title"]}>Địa chỉ giao hàng</div>
        </Box>
        <Box display="flex" borderBottom="2px soild #D8B979" p="10px 0">
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
          <div className={style["title"]}>Kiểm tra đơn hàng</div>
        </Box>
        <Box display="flex" borderBottom="2px soild #D8B979" p="10px 0">
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
          <div className={style["title"]}>Hình thức thanh toán</div>
        </Box>
        <Box display="flex" borderBottom="2px soild #D8B979" p="10px 0">
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
          <div className={style["title"]}>Xác nhận và mua hàng</div>
        </Box>
      </Stack>
      <Stack
        p="10px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mx="40px"
      >
        <p className={style["title-step"]}>Thông tin giao hàng</p>

        <Link href="/createorder">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </Stack>
      <Stack
        p="20px 0"
        className={style["info-customer"]}
        style={{ margin: "10px 50px 10px 50px" }}
      >
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Họ tên khách hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>{user?.userName || user?.name}</p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Điện thoại liên lạc
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            {user?.phone}
          </p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Địa chỉ giao hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>{address}</p>
        </div>
      </Stack>

      <Stack
        p="10px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mx="40px"
      >
        <p className={style["title-step"]}>Thông tin đơn hàng</p>
        <Link href="/createorder/step2">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </Stack>
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
              {finalPrice.toLocaleString()} đ
            </p>
          </div>
          <div style={{ display: "flex", margin: "10px 40px 10px 40px" }}>
            <p style={{ flex: "1", fontSize: "22px", color: "#6B6B6B" }}>
              Phí vận chuyển
            </p>
            <p style={{ flex: "0.2", fontSize: "22px", color: "#6B6B6B" }}>
              {shipFee.toLocaleString()} đ
            </p>
          </div>
        </div>
        <div style={{ display: "flex", margin: "20px 40px" }}>
          <p style={{ flex: "1", fontSize: "30px", fontWeight: 500 }}>
            Tổng chi phí
          </p>
          <p style={{ flex: "0.2", fontSize: "30px", fontWeight: 500 }}>
            {(finalPrice + shipFee).toLocaleString()} đ
          </p>
        </div>
      </div>
      <Stack
        p="10px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mx="40px"
      >
        <p className={style["title-step"]}>Hình thức thanh toán</p>
        <Link href="/createorder/step3">
          <button className={style["button-change"]}>Thay đổi</button>
        </Link>
      </Stack>
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
          onClick={() => handleSubmit()}
        >
          Tiến hành đặt hàng
        </button>
      </div>
    </Stack>
  );
};
export default Step4;
