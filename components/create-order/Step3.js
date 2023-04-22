import { useEffect, useState } from "react";
import Image from "next/image";
import Cod from "../../assets/image/cod.png";
import MoMo from "../../assets/image/momo.png";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";

function Step3() {
  const [momo, setMomo] = useState(false);
  const handleFormChange = (e) => {
    setMomo(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("momo", momo);
  }, [momo]);
  const { listCart } = useAppContext();
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
      <div>
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
              <span style={{ fontSize: "20px", color: "#ffffff" }}>3</span>
            </div>
            <div className={style["title-current"]}>
              Hình thức thanh toán
              <Icon icon={chevronRight} style={{ marginLeft: "30px" }} />
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
          <div className={style["form-pay"]}>
            <div style={{ display: "flex", marginLeft: "50px" }}>
              <input
                name="form"
                type="radio"
                value={false}
                onChange={handleFormChange}
                defaultChecked
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
          </div>
          <div className={style["form-pay"]}>
            <div style={{ display: "flex", marginLeft: "50px" }}>
              <input
                name="form"
                type="radio"
                value={true}
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
          </div>
        </div>
        <div
          className={style["cost"]}
          style={{ height: "100px", flexDirection: "row" }}
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
            margin: "50px 50px",
          }}
        >
          <Link href="/createorder/step2">
            <button className={style["button-back"]}>
              <Icon icon={arrowLeft} style={{ marginRight: "10px" }} />
              Quay lại
            </button>
          </Link>

          <Link href="/createorder/step4">
            <button className={style["button-con"]}>
              Tiếp tục
              <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Step3;
