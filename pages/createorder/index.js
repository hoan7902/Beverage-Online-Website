import React from "react";
import CreateOrder from "../../components/create-order/CreateOrder";
import ResponsiveAppBar from "../../components/menu";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";

function CreateOrderPage() {
  return (
    <>
      <ResponsiveAppBar />
      <CreateOrder />
      <Advertisement />
      <Footer />
    </>
  );
}
export default CreateOrderPage;
