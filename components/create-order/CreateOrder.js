import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { arrowRight } from "react-icons-kit/fa/arrowRight";
import style from "../../styles/CreateOrder.module.css";
import { useAppContext } from "../../contexts/AppProvider";
import { useRouter } from "next/router";
import { Box, Stack, Typography } from "@mui/material";

function CreateOrder() {
  const { user, setUser } = useAppContext();
  console.log('check user CreateOrder: ', user);
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState(user?.phone);
  const [userName, setUserName] = useState(user?.name);

  const [notice, setNotice] = useState("");
  const [allow, setAllow] = useState(true);
  const [address, setAddress] = useState(user?.address);

  const handleSubmit = () => {
    if (allow) {
      localStorage.setItem("notice", notice);
      localStorage.setItem("address", address);
      router.push("/createorder/step2");
    }
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  useEffect(() => {
    setUser({ ...user, phone: phoneNumber});
  }, [phoneNumber]);

  useEffect(() => {
    setUser({ ...user, name: userName });
  }, [userName]);

  useEffect(() => {
    setPhoneNumber(user?.phone);
    setAddress(user?.address);
    setUserName(user?.name);
  }, [user]);

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
              // placeholder={user?.name}
              value={userName}
              onChange={handleChangeUserName}
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
              placeholder={user?.phone}
              value={phoneNumber} // Bind value to state
              onChange={handlePhoneNumberChange} // Handle onChange event
            />
          </Stack>
          <Stack ml="20px">
            <p style={{ margin: "0 20px" }}>Địa chỉ giao hàng</p>
            <input
              className={style["Input"]}
              style={{ width: "60%", padding: "0 10px" }}
              placeholder={user?.address}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
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
