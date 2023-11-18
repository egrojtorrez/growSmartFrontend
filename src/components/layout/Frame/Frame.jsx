import { Container, Content } from "rsuite";
import { Outlet } from "react-router-dom";
import { useSideBar } from "@hooks/useSideBar";
import AppHeader from "../Header";
import AppSidebar from "../Sidebar/AppSidebar";
import AppFooter from "../AppFooter";
import { useEffect, useState } from "react";

const Frame = () => {
  const { sidebarShow, setSidebarShow } = useSideBar();
  const [pantalla, setPantalla] = useState();

  useEffect(() => {
    const wid = window.screen.width;
    setPantalla(wid);
    if (wid > 300 && wid < 760) setSidebarShow(false);
  }, [pantalla]);

  const containerClasses = `page-container ${
    !sidebarShow ? "container-full" : ""
  }`;

  return (
    <Container className="frame">
      <AppSidebar />
      <Container className={containerClasses}>
        <AppHeader />
        <Content>
          <Outlet />
        </Content>
        <AppFooter />
      </Container>
    </Container>
  );
};

export default Frame;
