import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Lyaout = () => {
  const theme = useSelector((state: RootState) => state.themeList.theme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Lyaout;
