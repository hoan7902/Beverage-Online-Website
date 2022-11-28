import Step2 from '../../components/create-order/Step2';
import ResponsiveAppBar from "../../components/menu";
import Footer from "../../components/home/Footer";
import Advertisement from "../../components/home/Advertisement";


function Step2Page(){
    return (
        <>
        <ResponsiveAppBar/>
        <Step2/>
        <Advertisement/>
        <Footer/>
        </>
    );
};
export default Step2Page;