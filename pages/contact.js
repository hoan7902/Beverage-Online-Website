import { Stack, Box, Typography } from "@mui/material";
import contactStyles from "../styles/Contact.module.css";
import qrImage from "../assets/image/QRCode.png";
import Image from "next/image";
import Footer from "../components/home/Footer";
import Advertisement from "../components/home/Advertisement";
import homeStyles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber.toString());
      formData.append("address", address);
      formData.append("title", title);
      formData.append("content", content);
      axios.post(
        "https://sheet.best/api/sheets/a003ecca-3834-43e0-baa3-37a2c6539bcb",
        formData
      );
      const resetData = () => {
        setFullName("");
        setEmail("");
        setAddress("");
        setContent("");
        setPhoneNumber("");
        setTitle("");
      };
      resetData();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <Stack
        className={contactStyles.backgroundImage}
        position="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Stack m="40px 0" p="20px" backgroundColor="#fff" borderRadius="8px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Image src={qrImage} alt="qr" />
            <Stack ml="10px" justifyContent="space-between">
              <Typography
                mt="25px"
                textTransform="uppercase"
                variant="h2"
                fontSize="20px"
                fontWeight={600}
              >
                Công ty cổ phần giải khát Jucify
              </Typography>
              <Box>
                <Typography mt="20px">
                  Địa chỉ liên hệ: Kí túc xá khu B đại học quốc gia
                </Typography>
                <Typography mt="20px">
                  Email: phuccao.30012001@gmail.com
                </Typography>
                <Typography mt="20px">Số điện thoại: 0879250665</Typography>
                <Typography mt="20px">
                  Facebook: https://www.facebook.com/hieunghia.cao.37
                </Typography>
                <Typography mt="20px">
                  Mọi thông tin của các thành viên trong nhóm xin hãy quét mã QR
                  bên cạnh
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Typography
            fontWeight={900}
            variant="h1"
            fontSize="23px"
            letterSpacing="1px"
            mt="15px"
            textTransform="uppercase"
          >
            Liên hệ
          </Typography>
          <Stack m="10px 0">
            <Typography>Họ và tên</Typography>
            <input
              value={fullName}
              type="text"
              placeholder="Điền họ và tên"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </Stack>
          <Stack m="10px 0">
            <Typography>Email</Typography>
            <input
              value={email}
              type="text"
              placeholder="Điền Email"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Stack>
          <Stack m="10px 0">
            <Typography>Số điện thoại</Typography>
            <input
              value={phoneNumber}
              type="text"
              placeholder="Điền Số điện thoại"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
          </Stack>
          <Stack m="10px 0">
            <Typography>Địa chỉ</Typography>
            <input
              value={address}
              type="text"
              placeholder="Điền Địa chỉ"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </Stack>
          <Stack m="10px 0">
            <Typography>Tiêu đề</Typography>
            <input
              value={title}
              type="text"
              placeholder="Điền Tiêu đề"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Stack>
          <Stack m="10px 0">
            <Typography>Nội dung</Typography>
            <input
              value={content}
              style={{ minHeight: "100px" }}
              type="text"
              className={contactStyles.inputCss}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </Stack>
          <Box
            width="100%"
            mt="10px"
            className={homeStyles.mainButton}
            p="10px"
            backgroundColor="#d3b673"
            borderRadius="6px"
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
          >
            <Typography
              textAlign="center"
              className={homeStyles.textButton}
              textTransform="uppercase"
              color="#fff"
              fontSize="15px"
              fontWeight={500}
            >
              Gửi thông tin
            </Typography>
          </Box>
        </Stack>
        <Advertisement />
        <Footer />
      </Stack>
    </Layout>
  );
};

export default Contact;
