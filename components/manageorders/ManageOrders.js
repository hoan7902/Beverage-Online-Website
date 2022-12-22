import ResponsiveAppBar from "../../components/menu";
import styles from "../../styles/Profile.module.css";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import style from "../../styles/Profile.module.css";
import axios from "axios";
import io from "socket.io-client";
import { useAppContext } from "../../contexts/AppProvider";

const socket = io("http://localhost:3000");

function ManageOrders() {
  const [status, setStatus] = useState(1);
  const { user } = useAppContext();
  const [listOrder, setListOrder] = useState();
  const handleOpenLoading = () => {
    setStatus(1);
  };
  const handleOpenComplete = () => {
    setStatus(0);
  };
  const getOrders = async () => {
    try {
      const data = await axios.post(
        "http://localhost:3000/order/get-list-order",
        {
          userId: user?._id,
          status: !status ? "complete" : "",
        }
      );
      setListOrder(data.data.data.listOrder);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    socket.on("connect", () => {
      console.log("success");
    });
    socket.on(`${user?._id}-dashboard`, () => {
      getOrders();
    });
    return () => {
      socket.off(`connect`);
      socket.off(`${user?._id}-dashboard`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    user?._id && getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, user]);
  function ChangeOrders({ status, listOrder }) {
    if (status) return <OrdersLoading listOrder={listOrder} />;
    else return <OrdersComplete listOrder={listOrder} />;
  }
  function ItemCard({ order }) {
    const completeHandle = async () => {
      try {
        await axios.post(
          "http://localhost:3000/order/complete-order",
          {
            userId: user?._id,
            orderId: order._id,
          }
        );
        await getOrders();
        socket.emit("client-submit", {
          userId: user?._id,
        });
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <Card
        style={{
          marginBottom: 20,
        }}
      >
        <CardHeader
          subheader={`Trạng thái: ${order.status}`}
          style={{
            borderBottom: "1px solid gray",

          }}
          action={
            order.status === "delivering" ? (
              <button
                style={{
                  background: "orange",
                  color: "white",
                  width: 100,
                  height: 30,
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
                onClick={completeHandle}
              >
                Hoàn thành
              </button>
            ) : (
              false
            )
          }
        />
        <CardContent>
          {order?.listProduct?.map((product) => {
            return (
              <div
                key={product._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar alt="" src={product.image} />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingLeft: 10,
                  }}
                >
                  <p>{product.name}</p>
                  <p>{"Số lượng: " + product.quantity}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }
  function OrdersLoading({ listOrder }) {
    return (
      <div className={style["content-container"]}>
        <div className={style["title-container"]}>
          <div className={style["title-color"]}>Đơn hàng đang xử lý</div>
          <div className={style["title"]} onClick={handleOpenComplete}>
            Đơn hàng hoàn tất
          </div>
        </div>
        <div className={style["container-order"]}>
          {listOrder?.map((order) => {
            return <ItemCard key={order._id} order={order} />;
          })}
        </div>
      </div>
    );
  }
  function OrdersComplete({ listOrder }) {
    return (
      <div className={style["content-container"]}>
        <div className={style["title-container"]}>
          <div className={style["title"]} onClick={handleOpenLoading}>
            Đơn hàng đang xử lý
          </div>
          <div className={style["title-color"]}>Đơn hàng hoàn tất</div>
        </div>
        <div className={style["container-order"]}>
          {listOrder?.map((order) => {
            return <ItemCard key={order._id} order={order} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div clasName={styles.container}>
      <ResponsiveAppBar />
      <div className={style["container"]}>
        <div className={style["menu-container"]}>
          <Link href="/profile">
            <div className={style["title-forward"]}>THÔNG TIN CÁ NHÂN</div>
          </Link>
          <div className={style["color-title-forward"]}>QUẢN LÝ ĐƠN HÀNG</div>
        </div>

        <ChangeOrders status={status} listOrder={listOrder} />
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
}
export default ManageOrders;
