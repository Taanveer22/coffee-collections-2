import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* ========dynamic content====== */}
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      {/* ========dynamic content====== */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
