import { Box, Typography, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import Item from "./Item";
import Homeline from "../../assets/image/home_line.webp";

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
                textTransform="uppercase"
                color="#d3b673"
                variant="h3"
                fontSize="25px"
                fontWeight={700}
            >
                {title}
            </Typography>
            <Typography
                p="10px"
                textTransform="uppercase"
                letterSpacing={1.8}
                fontWeight="700"
                fontSize="36px"
                color="#00000"
            >
                {description}
            </Typography>
            <Image src={Homeline} alt="home-line" />
            <Stack
                width="70%"
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
                m="30px 0"
            >
                {dataProduct
                    ? dataProduct
                          .slice(0, 9)
                          .map((item) => (
                              <Item key={item._id} item={item} title="" />
                          ))
                    : ""}
                <Box
                    className={homeStyles.mainButton}
                    mt="20px"
                    p="10px 20px"
                    backgroundColor="#d3b673"
                    borderRadius="6px"
                    style={{ cursor: "pointer" }}
                >
                    <Link href="/order">
                        <Typography
                            className={homeStyles.textButton}
                            textTransform="uppercase"
                            color="#fff"
                        >
                            Xem tất cả
                        </Typography>
                    </Link>
                </Box>
            </Stack>
        </Stack>
    );
};

export default ListItem;
