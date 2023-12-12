import { useEffect, useState } from "react";
import Image from "next/image";
import Cod from "../../assets/image/cod.png";
import MoMo from "../../assets/image/momo.png";
import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { Box, Stack, Typography } from "@mui/material";

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
    <>
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
            <div className={style["title"]}>
              Địa chỉ giao hàng
            </div>
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
            <div className={style["title"]}>
              Kiểm tra đơn hàng
            </div>
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
              <span style={{ fontSize: "20px", color: "#ffffff" }}>3</span>
            </div>
            <div className={style["title"]}>
              Hình thức thanh toán
            </div>
          </Box>
          <Box display="flex" borderBottom="2px soild #D8B979" p="10px 0">
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
            </div>
          </Box>
        </Stack>
        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            margin: "10px 50px 0 50px",
          }}
        >
          Chọn hình thức thành toán
        </p>
        <Stack style={{ display: "flex", margin: "50px 50px 0 50px" }}>
          <Stack className={style["form-pay"]} mb="20px">
            <Stack flexDirection="row" p="10px">
              <input
                name="form"
                type="radio"
                value={false}
                onChange={handleFormChange}
                defaultChecked
              />
              <Typography ml="10px">COD-Thanh toán khi nhận hàng</Typography>
            </Stack>
            <Stack
              style={{
                width: "150px",
                position: "relative",
                margin: "20px auto",
              }}
            >
              <Image src={Cod} alt="Cod" />
            </Stack>
          </Stack>
          <div className={style["form-pay"]}>
            <Stack flexDirection="row" p="10px">
              <input
                name="form"
                type="radio"
                value={true}
                onChange={handleFormChange}
              />
              <Typography ml="10px">
                Thanh toán trực tuyến bằng ví điện tử MoMo
              </Typography>
            </Stack>
            <div
              style={{
                position: "relative",
                margin: "20px auto",
              }}
            >
              <Image src={MoMo} alt="MoMo" />
            </div>
          </div>
        </Stack>
        <Stack flexDirection="row" justifyContent="space-between" m="20px 12%">
          <Typography fontSize="2rem">Tổng chi phí</Typography>
          <Typography fontSize="2rem">
            {(finalPrice + shipFee).toLocaleString()} đ
          </Typography>
        </Stack>
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
      </Stack>
    </>
  );
}
export default Step3;
