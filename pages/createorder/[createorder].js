import { useRouter } from "next/router";
function CreateOrderPage() {
    const router = useRouter();
    const createorderId = router.query.createorderId;
    return <div>{createorderId}</div>;
}
export default CreateOrderPage;