import NavBar from "./components/Navbar/navbar"
import SideBar from "./components/Sidebar/sidebar"
import { RecoilRoot } from "recoil";
import config from "../config";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <RecoilRoot>
        <BrowserRouter>
      <div className="flex flex-row">
        <SideBar></SideBar>
          <div className="flex flex-col w-full p-0 h-screen">
            <NavBar></NavBar>
            <Routes>
            {config.navLinks.map((link, index) => (
                <Route
                  key={index}
                  path={link.href}
                  element={<link.component />}
                />
              ))}
            </Routes>
          </div>
      </div>
      </BrowserRouter>
      </RecoilRoot>
  )
}

export default App
