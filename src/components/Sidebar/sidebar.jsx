import { useSetRecoilState } from "recoil";
import config from '../../../config.json';
import { tabName } from "../../atoms/navbar";

export default function SideBar() {
  const setTabName = useSetRecoilState(tabName);
  return (
    <div className="bg-white h-screen max-w-[300px] min-w-[200px] w-[20%] shadow-md sticky top-0">
      <div className="h-[15%]">
        <img src={config['logo']} alt="Logo" className="w-[100%] h-[100%] align-middle rounded-full" /> {/* Display profile pic from config */}
      </div>
      <div className="flex flex-row items-center justify-center h-[85%]">
        Pages
      </div>
    </div>
  );
}
