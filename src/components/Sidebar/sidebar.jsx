import { useSetRecoilState } from "recoil";
import { tabName } from "../../atoms/navbar";

export default function SideBar() {
  const setTabName = useSetRecoilState(tabName);
  return (
    <div className="bg-white h-screen max-w-[300px] min-w-[200px] w-[20%] py-4 shadow-md sticky top-0 border border-black">
      <div>
        Logo
      </div>
      <div>
        Pages
      {/* <button onClick={() => setTabName("github")}>Click Here</button> */}
      </div>
    </div>
  );
}
