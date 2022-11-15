import { Typography, Stack, Box } from "@mui/material";
import Image from "next/image";
import Appstore from "../../assets/image/logo-appstore.svg";
import Playstore from "../../assets/image/logo-playstore.svg";
import Mobile from "../../assets/image/5027862_chat_mobile_pie_icon.svg";
import Drink from "../../assets/image/2987779_coffee_cup_drink_icon.svg";

const Advertisement = () => {
    return (
        <Stack
            flexDirection="row"
            justifyContent="space-around"
            backgroundColor="#fbfbfb"
            padding="50px 0"
            width="100vw"
        >
            <Stack textAlign="center">
                <Image src={Drink} alt="drink" height={200} width={200} />
                <Typography margin="20px 0" fontWeight={600} fontSize="20px">
                    Curated bevarages
                </Typography>
                <Typography>
                    From small bites to big meals, we won&apos;t limit your{" "}
                    <br /> appetite. Go ahead and order all you want.
                </Typography>
            </Stack>
            <Stack textAlign="center">
                <Image src={Mobile} alt="mobile" height={200} width={200} />
                <Typography margin="20px 0" fontWeight={600} fontSize="20px">
                    More cool features available on the app
                </Typography>
                <Typography>
                    Download Grab app to use other payment methods <br /> and
                    enjoy seamless communication with your driver
                </Typography>
                <Stack flexDirection="row" justifyContent="center" mt="20px">
                    <Box mr="20px">
                        <Image src={Appstore} alt="app-store" />
                    </Box>
                    <Box>
                        <Image src={Playstore} alt="play-store" />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Advertisement;
