import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom"

const Layouts = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layouts;
