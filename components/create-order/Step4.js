import React from "react";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";

function Step4() {
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
        <button className={style["button-change"]}>
          <Link href="/createorder">Thay đổi</Link>
        </button>
      </div>
      <div
        className={style["info-customer"]}
        style={{ margin: "10px 50px 10px 50px" }}
      >
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Họ tên khách hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>Vince</p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Điện thoại liên lạc
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>097 181 0800</p>
        </div>
        <div style={{ margin: "0 20px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Địa chỉ giao hàng
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            22/4G, Mỹ Hòa 1, Trung Chánh, Hóc Môn, TP.HCM
          </p>
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
        <button className={style["button-change"]}>
          <Link href="/createorder/step2">Thay đổi</Link>
        </button>
      </div>
      <div
        className={style["cost"]}
        style={{ margin: "10px 50px 20px 50px", height: "300px" }}
      >
        <div style={{ borderBottom: "1px solid #BAB8B8" }}>
          <div style={{ display: "flex", margin: "10px 40px 10px 40px" }}>
            <p style={{ flex: "1", fontSize: "22px", color: "#6B6B6B" }}>
              Chi phí món ăn
            </p>
            <p style={{ flex: "0.2", fontSize: "22px", color: "#6B6B6B" }}>
              69.000đ
            </p>
          </div>
          <div style={{ display: "flex", margin: "10px 40px 10px 40px" }}>
            <p style={{ flex: "1", fontSize: "22px", color: "#6B6B6B" }}>
              Phí vận chuyển
            </p>
            <p style={{ flex: "0.2", fontSize: "22px", color: "#6B6B6B" }}>
              9.000đ
            </p>
          </div>
        </div>
        <div style={{ display: "flex", margin: "20px 40px" }}>
          <p style={{ flex: "1", fontSize: "30px", fontWeight: 500 }}>
            Tổng chi phí
          </p>
          <p style={{ flex: "0.2", fontSize: "30px", fontWeight: 500 }}>
            246.000đ
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
        <button className={style["button-change"]}>
          <Link href="/createorder/step3">Thay đổi</Link>
        </button>
      </div>
      <div className={style["pay-ment"]}>
        <div style={{ margin: "10px 40px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Khách hàng thanh toán
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            COD-Thanh toán khi nhận hàng
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <button className={style["confirm-order"]}>Tiến hành đặt hàng</button>
      </div>
    </>
  );
}
export default Step4;
