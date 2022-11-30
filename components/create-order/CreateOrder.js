import React, { useState } from "react";
import Icon from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import Link from "next/link";
import style from '../../styles/CreateOrder.module.css';

function CreateOrder() {
  const [gender, setGender] = useState();
  const handleChange = (e) => {
    setGender(e.target.value);
  };
  const [time, setTime] = useState();
  console.log(gender, time);
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <div>
      <div className={style["title-forward"]}>
        <div className={style["title-contain"]}>
            <div className={style["title-contain-forward"]}>
                <span className={style["number-forward"]}>1</span>
            </div>
            <div className={style["title-current"]}>
              Địa chỉ giao hàng
              <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div className={style["title-contain-notforward"]}>
                <span className={style["number"]}>2</span>
            </div>
            <div className={style["title"]}>
              Kiểm tra đơn hàng
              <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div className={style["title-contain-notforward"]}>
                <span className={style["number"]}>3</span>
            </div>
            <div className={style["title"]}>
              Hình thức thanh toán
              <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div className={style["title-contain-notforward"]}>
                <span className={style["number"]}>4</span>
            </div>
            <div className={style["title"]}>
              Xác nhận và mua hàng
              <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
            </div>
        </div>
      </div>
      <div className={style["content"]}>
          <div style={{display:"flex",flexDirection:"column",flex:"1"}}>
            <div className={style["info-customer"]}  style={{height:"360px"}}>
              <p
                style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}
              >
                Thông tin khách hàng
              </p>
               <div style={{ margin: "0 20px"}}>
                <p style={{ margin: "0 20px" }}>Họ và tên</p>
                <input className={style["Input"]} style={{ width: "90%" }} />
              </div>
              <div style={{ margin: "0 20px"}}>
                <p style={{ margin: "0 20px" }}>Email</p>
                <input className={style["Input"]} style={{ width: "90%" }} />
              </div>
              <div style={{ margin: "0 20px"}}>
                <p style={{ margin: "0 20px" }}>Số điện thoại</p>
                <input className={style["Input"]} style={{ width: "90%" }} />
              </div>
            </div>
            <div style={{ display: "flex", height: "200px", margin: "10px 0",position:"relative"}}>
             <div
              style={{
                flex: "1",
                boxShadow:
                  "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),0 9px 28px 8px rgb(0 0 0 / 5%)",
                margin: "0 10px",
                position:"relative"
              }}
            >
              <p
                style={{
                  margin: "20px 40px",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                Thời gian mong muốn nhận hàng
              </p>
              <div style={{ margin: "10px 40px",position:"relative"}}>
                <input
                  type="radio"
                  name="time"
                  value="Sớm nhất có thể"
                  onChange={handleTime}
                />
                Sớm nhất có thể
              </div>
              <div style={{ margin: "10px 40px",position:"relative"}}>
                <input
                  type="radio"
                  name="time"
                  value="Chọn ngày muốn nhận"
                  onChange={handleTime}
                />
                Chọn ngày muốn nhận
              </div>
              <div style={{ margin: "0 20px",position:"relative"}}>
                <input className={style["Input"]}
                  style={{ width: "90%", height: "40px", margin: "0 20px" }}
                />
              </div>
            </div>
          </div>
          </div>
          <div className={style["address"]} style={{height:"570px"}}>
          <p style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}>
             Địa chỉ giao hàng
           </p>

         <div style={{ margin: "0 20px",position:"relative"}}>
             <p style={{ margin: "0 20px" }}>Tỉnh/Thành phố</p>
            <input className={style["Input"]} style={{ width: "90%" }} />
        </div>
           <div
            style={{
              margin: "0 20px",
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              position:"relative"
            }}
          >
            <div style={{position:"relative"}}>
              <p style={{ margin: "0 20px" }}>Quận/Huyện</p>
              <input className={style["Input"]} style={{ width: "250px" }} />
            </div>
            <div style={{position:"relative"}}>
              <p style={{ margin: "0 20px" }}>Phường/Xã</p>
              <input className={style["Input"]} style={{ width: "250px" }} />
            </div>
          </div>
          <div style={{ margin: "0 20px", position:"relative"}}>
            <p style={{ margin: "0 20px" }}>Địa chỉ cụ thể</p>
            <input className={style["Input"]} style={{ width: "90%" }} />
          </div>
          <div
            style={{
              margin: "0 20px",
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              position:"relative"
            }}
          >
            <div style={{ margin: "0 20px",position:"relative"}}>
              <input
                type="radio"
                name="gender"
                value="Nhà ở"
                onChange={handleChange}
              />
              Nhà ở
            </div>
            <div style={{ margin: "0 20px", position:"relative"}}>
              <input
                type="radio"
                name="gender"
                value="Công ty"
                onChange={handleChange}
              />
              Công ty
            </div>
            <div style={{ margin: "0 20px", position:"relative"}}>
              <input
                type="radio"
                name="gender"
                value="Chung cư"
                onChange={handleChange}
              />
              Chung cư
            </div>
          </div>
          <div style={{ margin: "10px 20px", position:"relative"}}>
            <p style={{ margin: "0 20px" }}>Ghi chú</p>
            <input className={style["Input"]} style={{ width: "90%" }} />
          </div>
          </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "50px 50px",
          position:"relative"
        }}
      >
        <button className={style["button-con"]}>
          <Link href="/createorder/step2">Tiếp tục</Link>
          <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};
export default CreateOrder;
