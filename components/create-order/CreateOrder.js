import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";
import { Box, Stack, Typography } from "@mui/material";
import { check } from "react-icons-kit/fa/check";


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
    <Stack mt="69px">
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
          backgroundColor: "#D8B979",
          textAlign: "center",
          marginRight: "10px",
        }}
      >
        <span style={{ fontSize: "20px", color: "#ffffff" }}>1</span>
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
          marginRight: "10px",
          border: "1px solid #333",
        }}
      >
        <span style={{ fontSize: "20px", color: "#333" }}>2</span>
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
      <Stack
        sx={{ flexDirection: { xs: "column", md: "row" }, flex: "1" }}
        width="100%"
      >
        <Stack width="100%">
          <p style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}>
            Thông tin khách hàng
          </p>
          <Stack ml="20px">
            <p style={{ margin: "0 20px" }}>Họ và tên</p>
            <input
              className={style["Input"]}
              style={{ width: "60%", padding: "0 10px" }}
              disabled={true}
              placeholder={user?.userName}
            />
          </Stack>
          <Stack ml="20px">
            <p style={{ margin: "0 20px" }}>Email</p>
            <input
              className={style["Input"]}
              style={{ width: "60%", padding: "0 10px" }}
              disabled={true}
              placeholder={user?.email}
            />
          </Stack>
          <Stack ml="20px">
            <p style={{ margin: "0 20px" }}>Số điện thoại</p>
            <input
              className={style["Input"]}
              style={{ width: "60%", padding: "0 10px" }}
              // disabled={true}
              placeholder={user?.phoneNumber}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Typography
          variant="p"
          style={{ margin: "20px 40px", fontSize: "20px", fontWeight: 600 }}
        >
          Địa chỉ giao hàng
        </Typography>

        <Stack ml="20px">
          <p style={{ margin: "0 20px" }}>Tỉnh/Thành phố</p>
          <input
            className={style["Input"]}
            style={{ width: "60%", padding: "0 10px" }}
            value={province}
            onChange={(e) => {
              setProvince(e.target.value);
            }}
          />
        </Stack>
        <Stack ml="20px" style={{ position: "relative" }}>
          <p style={{ margin: "0 20px" }}>Quận/Huyện</p>
          <input
            className={style["Input"]}
            style={{ width: "60%", padding: "0 10px" }}
            value={district}
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
          />
        </Stack>
        <Stack ml="20px" style={{ position: "relative" }}>
          <p style={{ margin: "0 20px" }}>Phường/Xã</p>
          <input
            className={style["Input"]}
            style={{ width: "60%", padding: "0 10px" }}
            value={ward}
            onChange={(e) => {
              setWard(e.target.value);
            }}
          />
        </Stack>
        <Stack ml="20px">
          <p style={{ margin: "0 20px" }}>Ghi chú</p>
          <input
            className={style["Input"]}
            style={{ width: "60%", padding: "0 10px" }}
            value={notice}
            onChange={(e) => {
              setNotice(e.target.value);
            }}
          />
        </Stack>
      </Stack>
      <Stack ml="40px" mt="20px" onClick={handleSubmit}>
        <button
          className={`${style["button-con"]} ${
            !allow ? style["not-allow"] : ""
          }`}
        >
          Tiếp tục
          <Icon icon={arrowRight} style={{ marginLeft: "10px" }} />
        </button>
      </Stack>
    </Stack>
  );
}
export default CreateOrder;
