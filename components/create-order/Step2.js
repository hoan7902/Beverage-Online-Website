import React from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import Image from "next/image";

function Step2() {
  const { listCart } = useAppContext();
  console.log(listCart);

  let finalPrice = 0;
  const shipFee = 9000;
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
        <div style={{ display: "flex", borderBottom: "4px solid #D8B979" }}>
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
            <span style={{ fontSize: "20px", color: "#ffffff" }}>2</span>
          </div>
          <div className={style["title"]}>
            Kiểm tra đơn hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              textAlign: "center",
              marginRight: "10px",
              border: "1px solid #333",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>3</span>
          </div>
          <div className={style["title"]}>
            Hình thức thanh toán
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              textAlign: "center",
              marginRight: "10px",
              border: "1px solid #333",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>4</span>
          </div>
          <div className={style["title"]}>
            Xác nhận và mua hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
      </div>
      <div>
        <div className={style["title-contain-order"]}>
          <div className={style["title-order"]}>Tên thức uống</div>
          <div className={style["title-order"]}>Số lượng</div>
          <div className={style["title-order"]}>Topping</div>
          <div className={style["title-order"]}>Thành tiền</div>
        </div>
      </div>
      <div className={style["order-contain"]}>
        {listCart.map((cart, index) => {
          let totalOfTopping = 0;
          for (let i = 0; i < cart.listTopping.length; i++) {
            totalOfTopping += cart.listTopping[i].price;
          }
          const totalPrice =
            (cart.product.price + totalOfTopping) * cart.quantity;
          finalPrice += totalPrice;
          return (
            <div className={style["cart-item"]} key={index}>
              <div style={{ display: "flex" }} className={style["cart-image"]}>
                <Image
                  src={cart.product.image}
                  alt={cart.product.name}
                  width={"100px"}
                  height={"100px"}
                />
                <p className={style["cart-item-name"]}>{cart.product.name}</p>
              </div>
              <div className={style["cart-item-quantity"]}>
                <p>{cart.quantity}</p>
              </div>
              <div className={style["cart-item-topping"]}>
                {cart.listTopping.map((topping, id) => {
                  return <p key={id}>{topping.name}</p>;
                })}
              </div>
              <div className={style["cart-item-price"]}>
                <p>{(cart.product.price + totalOfTopping) * cart.quantity}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={style["cost"]}>
        <div style={{ fontSize: "22px", display: "flex" }}>
          <p style={{ margin: "50px 0 0 50px", flex: "1" }}> Chi phí món ăn</p>
          <p style={{ margin: "50px 0 0 50px", flex: "0.2" }}>{finalPrice}</p>
        </div>

        <div style={{ fontSize: "22px", display: "flex" }}>
          <p style={{ marginLeft: "50px", flex: "1" }}>Chi phí vận chuyển</p>
          <p style={{ marginLeft: "50px", flex: "0.2" }}>{shipFee}</p>
        </div>
      </div>
      <div
        className={style["cost"]}
        style={{ height: "100px", display: "flex", flexDirection: "row" }}
      >
        <p
          style={{
            fontSize: "25px",
            marginLeft: "50px",
            fontWeight: 600,
            flex: "1",
          }}
        >
          Tổng chi phí
        </p>
        <p
          style={{
            fontSize: "25px",
            marginLeft: "50px",
            fontWeight: 600,
            flex: "0.2",
          }}
        >
          {finalPrice + shipFee}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px",
        }}
      >
        <Link href="/createorder">
          <button className={style["button-back"]}>
            <Icon icon={arrowLeft} style={{ marginRight: "10px" }}></Icon>Quay
            lại
          </button>
        </Link>
        <Link href="/createorder/step3">
          <button className={style["button-con"]}>
            Tiếp tục
            <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
          </button>
        </Link>
      </div>
    </>
  );
}
export default Step2;
