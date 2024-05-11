import { useRecoilValue } from "recoil";
import { tabName } from "../../../atoms/navbar";
export default function NavContent() {
    const tabname = useRecoilValue(tabName);
    return (
        <div>
            {tabname}
        </div>
    );
}