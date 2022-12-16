import Banner from "../components/home/Banner";
import ListItem from "../components/home/ListItem";
import Advertisement from "../components/home/Advertisement";
import Footer from "../components/home/Footer";
import BannerAboutUs from "../components/home/BannerAboutUs";
import Promotion from "../components/home/Promotion";
import Shipper from "../components/home/Shipper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/layout";

export default function Home() {
  const [dataProduct, setDataProduct] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const listProduct = await axios(
        "http://localhost:3000/product/get-product"
      );
      setDataProduct(listProduct.data.data.listProduct);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Layout>
      <Shipper />
      <Banner />
      <ListItem
        dataProduct={dataProduct}
        title="Menu"
        description="Các sản phẩm nổi bật"
      />
      <BannerAboutUs />
      <Promotion />
      <Advertisement />
      <Footer />
    </Layout>
  );
}
