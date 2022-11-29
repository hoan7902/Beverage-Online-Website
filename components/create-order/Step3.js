import { useState } from "react";
import Image from "next/image";
import Cod from "../../assets/image/cod.png";
import MoMo from "../../assets/image/momo.png";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import styled from "styled-components";
import Link from "next/link";

function Step3() {
  const [form, setForm] = useState();
  console.log(form);
  const handleFormChange = (e) => {
    setForm(e.target.value);
  };
  return (
    <>
      <div>
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
              <span style={{ fontSize: "20px", color: "#ffffff" }}>3</span>
            </div>
            <TitleCurrent>
              Hình thức thanh toán
              <Icon icon={chevronRight} style={{ marginLeft: "30px" }} />
            </TitleCurrent>
          </TitleContain>
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
            <Title>
              Xác nhận và mua hàng
              <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
            </Title>
          </div>
        </TitleForward>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            margin: "10px 50px 0 50px",
          }}
        >
          Chọn hình thức thành toán
        </p>
        <div style={{ display: "flex", margin: "50px 50px 0 50px" }}>
          <FormPay>
            <div style={{ display: "flex", marginLeft: "50px" }}>
              <input
                name="form"
                type="radio"
                value="COD(Thanh toán khi nhận hàng)"
                onChange={handleFormChange}
              />
              <p>COD-Thanh toán khi nhận hàng</p>
            </div>
            <div
              style={{
                width: "150px",
                position: "relative",
                margin: "20px auto",
              }}
            >
              <Image src={Cod} alt="Cod" />
            </div>
          </FormPay>
          <FormPay>
            <div style={{ display: "flex", marginLeft: "50px" }}>
              <input
                name="form"
                type="radio"
                value="COD(Thanh toán khi nhận hàng)"
                onChange={handleFormChange}
              />
              <p>Thanh toán trực tuyến bằng ví điện tử MoMo</p>
            </div>
            <div
              style={{
                width: "300px",
                position: "relative",
                margin: "20px auto",
              }}
            >
              <Image src={MoMo} alt="MoMo" />
            </div>
          </FormPay>
        </div>
        <Cost style={{ height: "100px" }}>
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
            246.000đ
          </p>
        </Cost>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "50px 50px",
          }}
        >
          <ButtonBack>
            <Icon icon={arrowLeft} style={{ marginRight: "10px" }} />
            <Link href="/createorder/step2">Quay lại</Link>
          </ButtonBack>
          <ButtonCon>
            {" "}
            <Link href="/createorder/step4">Tiếp tục</Link>
            <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
          </ButtonCon>
        </div>
      </div>
    </>
  );
}
export default Step3;
const FormPay = styled.div`
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  height: 300px;
`;
const Cost = styled.div`
  margin: 20px 50px;
  height: 200px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  display: flex;
`;
const ButtonBack = styled.button`
  background-color: #b9fad6;
  border: none;
  color: #8e8b8b;
  border-radius: 5px;
  width: 210px;
  height: 46px;
  cursor: pointer;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;
const ButtonCon = styled.button`
  background-color: #d8b979;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 210px;
  height: 46px;
  cursor: pointer;
  font-size: 18px;
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
