import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-scroll";
import LoaderWaiting from "../Loader";
import Down from "../../assets/image/chevron-down-solid.svg";
import orderStyles from "../../styles/Order.module.css";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Category = ({ listNameCategory }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [orderCategory, setOrderCategory] = useState(true);

  const handleClick = () => {
    setOrderCategory(!orderCategory);
  };

  return (
    <>
      <Stack
        justifyContent="center"
        backgroundColor="#fff"
        sx={{
          margin: { md: "25px" },
          position: { md: "fixed" },
          top: { md: "55px" },
          left: { md: "20px" },
        }}
        p="0 20px"
        boxShadow="0 2px 7px 0 rgba(0, 0, 0, .05)"
      >
        <Stack
          sx={{ cursor: "pointer" }}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #f1f1f1"
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            m="20px 0"
            width="100%"
          >
            <Typography ml="20px" fontWeight={600} variant="h1" fontSize="16px">
              Danh mục
            </Typography>
            <Box
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              fontWeight={600}
              variant="h2"
              fontSize="16px"
              mr="20px"
            >
              <Image
                className={orderStyles.iconDownListOrder}
                height={15}
                width={15}
                src={Down}
                alt="down"
              />
            </Box>
          </Stack>
        </Stack>
        {listNameCategory ? (
          listNameCategory.map((item) => (
            <Link
              className={
                orderCategory
                  ? orderStyles.wrapperListOrder
                  : orderStyles.wrapperListOrderHidden
              }
              key={item._id}
              to={item._id}
              spy={true}
              smooth={true}
            >
              <Stack
                sx={{ cursor: "pointer" }}
                p="15px 70px"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #f1f1f1"
              >
                <Typography fontSize="14px" variant="h3" color="#282828">
                  {item.name}
                </Typography>
              </Stack>
            </Link>
          ))
        ) : (
          <Stack
            p="20px 0"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <LoaderWaiting />
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default Category;
