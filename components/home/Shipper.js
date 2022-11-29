import Motor from "../../assets/image/button_delivery.png";
import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";

const Shipper = () => {
  return (
    <div className={homeStyles.shipIconWrapper}>
      <Image className={homeStyles.shipIcon} src={Motor} alt="motor" />
    </div>
  );
};

export default Shipper;
