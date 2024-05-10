import NavBar from "./components/Navbar/navbar"
import SideBar from "./components/Sidebar/sidebar"
import Content from "./components/Tabs/content"
import { RecoilRoot } from "recoil";

function App() {
  return (
      <RecoilRoot>
      <div className="flex flex-row">
        <SideBar></SideBar>
          <div className="flex flex-col w-full p-0 h-screen">
            <NavBar></NavBar>
            <Content></Content> 
          </div>
      </div>
      </RecoilRoot>
  )
}

export default App
