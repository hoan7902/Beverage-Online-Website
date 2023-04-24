import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import Item from "./Item";
import Homeline from "../../assets/image/home_line.webp";
import LoaderWaiting from "../Loader";

const ListItem = ({ title, description, dataProduct }) => {
  return (
    <Stack
      flexDirection="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      mt="60px"
      id="home"
    >
      <Typography
        p="10px"
        color="#d3b673"
        variant="h3"
        fontSize="1.6rem"
        fontWeight={700}
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        p="10px"
        textTransform="uppercase"
        letterSpacing={1.8}
        fontWeight="700"
        sx={{ fontSize: { xs: "1.7rem", sm: "2.1rem" } }}
        color="#00000"
        textAlign="center"
      >
        {description}
      </Typography>
      <Image src={Homeline} alt="home-line" />
      <Stack
        width="70%"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        m="30px 0"
      >
        {dataProduct ? (
          dataProduct
            .slice(0, 9)
            .map((item) => <Item key={item._id} item={item} title="" />)
        ) : (
          <Stack alignItems="center" justifyContent="center" width="100%">
            <LoaderWaiting />
          </Stack>
        )}
        </Stack>
        <Link href="/order">
          <Box
            className={homeStyles.mainButton}
            m="20px 0"
            p="10px 20px"
            backgroundColor="#d3b673"
            style={{ cursor: "pointer" }}
          >
            <Typography
              className={homeStyles.textButton}
              textTransform="uppercase"
              color="#fff"
            >
              Xem tất cả
            </Typography>
          </Box>
        </Link>
    </Stack>
  );
};

export default ListItem;
