import ResponsiveAppBar from "../../components/menu";
import styles from "../../styles/Profile.module.css";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";
import * as React from "react";
import Link from "next/link";
import { useState } from "react";
import style from "../../styles/Profile.module.css";

function ManageOrders() {
  const [status, setStatus] = useState(1);
  const handleOpenLoading = () => {
    setStatus(1);
  };
  const handleOpenComplete = () => {
    setStatus(0);
  };
  function ChangeOrders({ status }) {
    if (status) return <OrdersLoading />;
    else return <OrdersComplete />;
  }
  function OrdersLoading() {
    return (
      <div className={style["content-container"]}>
        <div className={style["title-container"]}>
          <div className={style["title-color"]}>Đơn hàng đang xử lý</div>
          <div className={style["title"]} onClick={handleOpenComplete}>
            Đơn hàng hoàn tất
          </div>
        </div>
      </div>
    );
  }
  function OrdersComplete() {
    return (
      <div className={style["content-container"]}>
        <div className={style["title-container"]}>
          <div className={style["title"]} onClick={handleOpenLoading}>
            Đơn hàng đang xử lý
          </div>
          <div className={style["title-color"]}>Đơn hàng hoàn tất</div>
        </div>
      </div>
    );
  }
  return (
    <div clasName={styles.container}>
      <ResponsiveAppBar />
      <div className={style["container"]}>
        <div className={style["menu-container"]}>
          <div className={style["title-forward"]}>
            <Link href="/profile">THÔNG TIN CÁ NHÂN</Link>
          </div>
          <div className={style["color-title-forward"]}>QUẢN LÝ ĐƠN HÀNG</div>
        </div>

        <ChangeOrders status={status} />
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
}
export default ManageOrders;
