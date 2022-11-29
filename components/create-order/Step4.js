import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import Link from "next/link";

function Step4() {
  return (
    <>
      <TitleForward>
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
          <Title>
            Địa chỉ giao hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </Title>
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
          <Title>
            Kiểm tra đơn hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </Title>
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
          <Title>
            Hình thức thanh toán
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </Title>
        </div>
        <TitleContain>
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
          <TitleCurrent>
            Xác nhận và mua hàng
            <Icon icon={chevronRight} style={{ marginLeft: "30px" }} />
          </TitleCurrent>
        </TitleContain>
      </TitleForward>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "10px 50px 0 50px",
        }}
      >
        <TitleStep>Thông tin giao hàng</TitleStep>
        <ButtonChange>
          <Link href="/createorder">Thay đổi</Link>
        </ButtonChange>
      </div>
      <InfoCustomer>
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
      </InfoCustomer>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "10px 50px 0 50px",
        }}
      >
        <TitleStep>Thông tin đơn hàng</TitleStep>
        <ButtonChange>
          <Link href="/createorder/step2">Thay đổi</Link>
        </ButtonChange>
      </div>
      <Cost>
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
      </Cost>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          margin: "20px 50px 0 50px",
        }}
      >
        <TitleStep>Hình thức thanh toán</TitleStep>
        <ButtonChange>
          <Link href="/createorder/step3">Thay đổi</Link>
        </ButtonChange>
      </div>
      <PayMent>
        <div style={{ margin: "10px 40px" }}>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "#333" }}>
            Khách hàng thanh toán
          </p>
          <p style={{ fontSize: "20px", color: "#2F2F2F" }}>
            COD-Thanh toán khi nhận hàng
          </p>
        </div>
      </PayMent>
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <ConfirmOrder>Tiến hành đặt hàng</ConfirmOrder>
      </div>
    </>
  );
}
export default Step4;
const Cost = styled.div`
  height: 350px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  margin: 10px 50px 20px 50px;
  position: relative;
`;
const TitleStep = styled.p`
  font-size: 28px;
  font-weight: 600;
`;
const ButtonChange = styled.button`
  font-size: 18px;
  color: #8e8b8b;
  background-color: #ffe9ab;
  width: 125px;
  height: 46px;
  border: none;
  border-radius: 5px;
  margin-top: 23px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;
const InfoCustomer = styled.div`
  height: 400px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  margin: 10px 50px 10px 50px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const PayMent = styled.div`
  height: 150px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  margin: 10px 50px 50px 50px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const ConfirmOrder = styled.button`
  font-size: 28px;
  background-color: #d8b979;
  color: #fff;
  width: 360px;
  height: 70px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const TitleContain = styled.div`
  display: flex;
  border-bottom: 4px solid #d8b979;
`;
const TitleForward = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin: 100px 50px 10px 50px;
`;
const TitleCurrent = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  opacity: 0.45;
`;
