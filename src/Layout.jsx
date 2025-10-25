import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div>
      {/* =====when navbar use fixed position===== */}
      <div className="h-28">
        <Navbar></Navbar>
      </div>

      {/* ========dynamic content====== */}
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>

      {/* ===footer section=== */}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
