import NavBar from "./components/Navbar/navbar"
import SideBar from "./components/Sidebar/sidebar"
import Content from "./components/Tabs/content"
import { RecoilRoot } from "recoil";
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
              <Route exact path="/" element={<Content />} />
              <Route path="/about" element={<Content />} />
              <Route path="/contact" element={<Content />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
      </div>
      </BrowserRouter>
      </RecoilRoot>
  )
}

export default App
