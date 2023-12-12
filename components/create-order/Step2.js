import Icon from "react-icons-kit";
import { check } from "react-icons-kit/fa/check";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import Link from "next/link";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { customNextLoader } from "../../utils";

function Step2() {
  const { listCart } = useAppContext();
  console.log('check listCart: ', listCart);
  console.log(listCart);

  let finalPrice = 0;
  const shipFee = 0;
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
              backgroundColor: "#D8B979",
              textAlign: "center",
              marginRight: "10px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#ffffff" }}>2</span>
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
              textAlign: "center",
              marginRight: "10px",
              border: "1px solid #333",
            }}
          >
            <span style={{ fontSize: "20px", color: "#333" }}>3</span>
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
      <Stack>
        <div className={style["title-contain-order"]}>
          <div className={style["title-order"]}>Tên thức uống</div>
          <div className={style["title-order"]}>Số lượng</div>
          <div className={style["title-order"]}>Topping</div>
          <div className={style["title-order"]}>Thành tiền</div>
        </div>
      </Stack>
      <div className={style["order-contain"]}>
        {listCart.map((cart, index) => {
          let totalOfTopping = 0;
          for (let i = 0; i < cart.listTopping.length; i++) {
            totalOfTopping += cart.listTopping[i].price;
          }
          const totalPrice =
            (cart.size[0].price + totalOfTopping) * cart.quantity;
          finalPrice += totalPrice;
          return (
            <div className={style["cart-item"]} key={index}>
              <div style={{ display: "flex" }} className={style["cart-image"]}>
                <Image
                  src={cart.images[0].imageLink}
                  alt={cart.name}
                  width={"100px"}
                  height={"100px"}
                  loader={customNextLoader}
                />
                <p className={style["cart-item-name"]}>{cart.name}</p>
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
                <p>{((cart.size[0].price + totalOfTopping) * cart.quantity).toLocaleString()} đ</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={style["cost"]}>
        <Stack flexDirection="row" justifyContent="space-between" p="10px 30px">
          <Typography fontSize="1.3rem"> Chi phí món ăn</Typography>
          <Typography fontSize="1.3rem">
            {parseInt(finalPrice).toLocaleString()} đ
          </Typography>
        </Stack>

        <Stack flexDirection="row" justifyContent="space-between" p="10px 30px">
          <Typography fontSize="1.3rem"> Chi phí vận chuyển</Typography>
          <Typography fontSize="1.3rem">
            {parseInt(shipFee).toLocaleString()} đ
          </Typography>
        </Stack>
      </div>
      <Stack flexDirection="row" justifyContent="space-between" p="10px 90px">
        <Typography fontSize="1.3rem"> Tổng Chi Phí</Typography>
        <Typography fontSize="1.3rem">
          {parseInt(shipFee + finalPrice).toLocaleString()} đ
        </Typography>
      </Stack>
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
    </Stack>
  );
}
export default Step2;
