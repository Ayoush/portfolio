import { useSetRecoilState } from "recoil";
import { Link, useLocation } from "react-router-dom";
import config from "../../../config";
import { tabName } from "../../atoms/navbar";

export default function SideBar() {
  const setTabName = useSetRecoilState(tabName);
  const location = useLocation();
  const isActive = (href) => {
    return location.pathname === href;
  };
  
  const handleClick = (name) => {
   setTabName(name);
  };

  return (
    <div className="bg-white h-screen max-w-[300px] min-w-[200px] w-[20%] shadow-md sticky top-0">
      <div className="flex items-center justify-center h-[11%] gradient-border">
        <img src={config.logo} alt="thinkersClub" className="w-14 h-14 rounded-full" />
      </div>
        <div className="flex flex-col justify-center  h-[89%]  text-lg">
          <ul>
            {config.navLinks.map((link, index) => (
              <li key={index}>
                <Link
                onClick={() => handleClick(link.name)}
                className="block text-gray-600 hover:text-gray-800 px-4 py-2"
                to={link.href}
              >
                <div className="flex items-center">
                  {isActive(link.href) ? (
                    <link.activeIcon size={24} />
                  ) : (
                    <link.icon size={24} />
                  )}
                  <span className="ml-2">{link.name}</span>
                </div>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      
    </div>
  );
}