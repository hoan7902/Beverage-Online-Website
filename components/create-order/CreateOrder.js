import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";

function CreateOrder() {
  const { user } = useAppContext();
  const router = useRouter();
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [notice, setNotice] = useState("");
  const [allow, setAllow] = useState(false);
  useEffect(() => {
    setProvince(localStorage.getItem("province"));
    setDistrict(localStorage.getItem("district"));
    setWard(localStorage.getItem("ward"));
  }, []);
  useEffect(() => {
    if (
      province?.trim().length > 0 &&
      district?.trim().length > 0 &&
      ward?.trim().length > 0
    )
      setAllow(true);
    else setAllow(false);
  }, [province, ward, district]);
  const handleSubmit = () => {
    if (allow) {
      localStorage.setItem("province", province);
      localStorage.setItem("district", district);
      localStorage.setItem("ward", ward);
      localStorage.setItem("notice", notice);
      router.push("/createorder/step2");
    }
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
        <div style={{ display: "flex" }}>
          <div className={style["title-contain-notforward"]}>
            <span className={style["number"]}>2</span>
          </div>
          <div className={style["title"]}>
            Kiểm tra đơn hàng
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={style["title-contain-notforward"]}>
            <span className={style["number"]}>3</span>
          </div>
          <div className={style["title"]}>
            Hình thức thanh toán
            <Icon icon={chevronRight} style={{ marginLeft: "10px" }} />
          </div>
        </div>
        <div style={{ display: "flex" }}>
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
        <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <div
            className={style["info-customer"]}
            style={{ height: "fit-content", paddingBottom: 20 }}
          >
            <p
              style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}
            >
              Thông tin khách hàng
            </p>
            <div style={{ margin: "0 20px" }}>
              <p style={{ margin: "0 20px" }}>Họ và tên</p>
              <input
                className={style["Input"]}
                style={{ width: "90%" }}
                disabled={true}
                placeholder={user?.userName}
              />
            </div>
            <div style={{ margin: "0 20px" }}>
              <p style={{ margin: "0 20px" }}>Email</p>
              <input
                className={style["Input"]}
                style={{ width: "90%" }}
                disabled={true}
                placeholder={user?.email}
              />
            </div>
            <div style={{ margin: "0 20px" }}>
              <p style={{ margin: "0 20px" }}>Số điện thoại</p>
              <input
                className={style["Input"]}
                style={{ width: "90%" }}
                disabled={true}
                placeholder={user?.phoneNumber}
              />
            </div>
          </div>
        </div>
        <div
          className={style["address"]}
          style={{ height: "fit-content", paddingBottom: 20 }}
        >
          <p style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}>
            Địa chỉ giao hàng
          </p>

          <div style={{ margin: "0 20px", position: "relative" }}>
            <p style={{ margin: "0 20px" }}>Tỉnh/Thành phố</p>
            <input
              className={style["Input"]}
              style={{ width: "90%" }}
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              margin: "0 20px",
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              position: "relative",
            }}
          >
            <div style={{ position: "relative" }}>
              <p style={{ margin: "0 20px" }}>Quận/Huyện</p>
              <input
                className={style["Input"]}
                style={{ width: "250px" }}
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                }}
              />
            </div>
            <div style={{ position: "relative" }}>
              <p style={{ margin: "0 20px" }}>Phường/Xã</p>
              <input
                className={style["Input"]}
                style={{ width: "250px" }}
                value={ward}
                onChange={(e) => {
                  setWard(e.target.value);
                }}
              />
            </div>
          </div>
          <div style={{ margin: "0px 20px", position: "relative" }}>
            <p style={{ margin: "0 20px" }}>Ghi chú</p>
            <input
              className={style["Input"]}
              style={{ width: "90%" }}
              value={notice}
              onChange={(e) => {
                setNotice(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "50px 50px",
          position: "relative",
        }}
      >
        <button
          className={`${style["button-con"]} ${
            !allow ? style["not-allow"] : ""
          }`}
          onClick={handleSubmit}
        >
          Tiếp tục
          <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
}
export default CreateOrder;
