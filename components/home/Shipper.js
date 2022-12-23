import Motor from "../../assets/image/button_delivery.png";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";
import { Box } from "@mui/material";
import Link from "next/link";

const Shipper = () => {
  return (
    <Link href="/createorder">
      <Box sx={{ cursor: "pointer" }} className={homeStyles.shipIconWrapper}>
        <Image className={homeStyles.shipIcon} src={Motor} alt="motor" />
      </Box>
    </Link>
  );
};

export default Shipper;
