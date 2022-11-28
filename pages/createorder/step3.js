import Step3 from '../../components/create-order/Step3';
import ResponsiveAppBar from "../../components/menu";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";

function Step3Page(){
    return (
        <>
        <ResponsiveAppBar/>
        <Step3/>
        <Advertisement/>
        <Footer/>
        </>
    );
};
export default Step3Page;