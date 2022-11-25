import { useRouter } from "next/router";
function ProfileDetail() {
    const router = useRouter();
    const profileId = router.query.profileId;
    return <div>{profileId}</div>;
}
export default ProfileDetail;
