import Banner from "../components/home/Banner";
import ListItem from "../components/home/ListItem";
import Advertisement from "../components/home/Advertisement";
import Footer from "../components/home/Footer";
import BannerAboutUs from "../components/home/BannerAboutUs";
import Promotion from "../components/home/Promotion";
import Shipper from "../components/home/Shipper";
import Layout from "../components/layout";

export default function Home() {
    return (
        <Layout>
            <Shipper />
            <Banner />
            <ListItem title="Menu" description="Các sản phẩm nổi bật" />
            <BannerAboutUs />
            <Promotion />
            <Advertisement />
            <Footer />
        </Layout>
    );
}
