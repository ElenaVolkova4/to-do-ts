import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Lyaout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Lyaout;
