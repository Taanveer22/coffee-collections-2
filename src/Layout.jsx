import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      {/* ====react hot toast component==== */}
      <Toaster></Toaster>
      
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
    </>
  );
};

export default Layout;
