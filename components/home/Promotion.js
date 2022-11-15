import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Homeline from "../../assets/image/home_line.webp";
import TraSua from "../../assets/image/SPM_CHOCO_zalo-1.png";
import homeStyles from "../../styles/Home.module.css";

const Promotion = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            mb="50px"
        >
            <Stack justifyContent="center" alignItems="center">
                <Typography
                    p="10px"
                    textTransform="capitalize"
                    color="#d3b673"
                    variant="h3"
                    fontSize="25px"
                    fontWeight={700}
                >
                    Tin tức và Khuyến mãi
                </Typography>
                <Typography
                    p="10px"
                    textTransform="uppercase"
                    letterSpacing={1.8}
                    fontWeight="700"
                    fontSize="36px"
                    color="#00000"
                >
                    Khám phá nhận ngay khuyến mãi
                </Typography>
                <Image src={Homeline} alt="home-line" />
            </Stack>

            <Stack
                width="70%"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                <Stack
                    borderRadius="7px"
                    boxShadow="0px 2px 1.5px 0px #ccc"
                    width="300px"
                    m="15px"
                    backgroundColor="#fbfbfb"
                    className={homeStyles.imageProduct}
                >
                    <Image
                        style={{ borderRadius: "7px 7px 0 0" }}
                        src={TraSua}
                        alt="promotion"
                    />
                    <Typography
                        variant=""
                        fontWeight={600}
                        textTransform="uppercase"
                        p="20px 20px"
                        textAlign="center"
                        color='#000'
                    >
                        Nhân đôi sự ngọt ngào mùa lễ hội
                    </Typography>
                </Stack>
                <Stack
                    borderRadius="7px"
                    boxShadow="0px 2px 1.5px 0px #ccc"
                    width="300px"
                    m="15px"
                    backgroundColor="#fbfbfb"
                    className={homeStyles.imageProduct}
                >
                    <Image
                        style={{ borderRadius: "7px 7px 0 0" }}
                        src={TraSua}
                        alt="promotion"
                    />
                    <Typography
                        variant=""
                        fontWeight={600}
                        textTransform="uppercase"
                        p="20px 20px"
                        textAlign="center"
                        color='#000'
                    >
                        Nhân đôi sự ngọt ngào mùa lễ hội
                    </Typography>
                </Stack>
                <Stack
                    borderRadius="7px"
                    boxShadow="0px 2px 1.5px 0px #ccc"
                    width="300px"
                    m="15px"
                    backgroundColor="#fbfbfb"
                    className={homeStyles.imageProduct}
                >
                    <Image
                        style={{ borderRadius: "7px 7px 0 0" }}
                        src={TraSua}
                        alt="promotion"
                    />
                    <Typography
                        variant=""
                        fontWeight={600}
                        textTransform="uppercase"
                        p="20px 20px"
                        textAlign="center"
                        color='#000'
                    >
                        Nhân đôi sự ngọt ngào mùa lễ hội
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Promotion;
