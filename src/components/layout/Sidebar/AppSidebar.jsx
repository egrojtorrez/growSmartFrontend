import { Sidenav, Nav, DOMHelper } from "rsuite";
const { getHeight, on } = DOMHelper;
import { useSideBar } from "@hooks/useSideBar";
import { useState, useEffect } from "react";
import Brand from "./Brand";
import { Sidebar } from "rsuite";

import NavLink from "./NavLink";
import { configSidebar } from "./configSidebar";

const NavItem = (props) => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item
      eventKey={eventKey}
      as={NavLink}
      style={{ backgroundColor: "#24A148", fontSize: 18 }}
      {...rest}
    >
      <b>{title}</b>
    </Nav.Item>
  );
};

export default function AppSidebar() {
  const { sidebarShow, toggleSidebar } = useSideBar();
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  const navBodyStyle = sidebarShow
    ? { height: windowHeight - 112, overflow: "auto" }
    : {};

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, "resize", () =>
      setWindowHeight(getHeight(window))
    );

    return () => {
      resizeListenner.off();
    };
  }, []);

  return (
    <>
      <Sidebar
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#24A148",
        }}
        width={sidebarShow ? 260 : 56}
        collapsible
        className="sideVisible"
      >
        <Sidenav.Header>
          <Brand sidebarShow={sidebarShow} />
        </Sidenav.Header>
        <Sidenav
          expanded={sidebarShow}
          appearance="inverse"
          defaultOpenKeys={["2", "3"]}
          style={{
            backgroundColor: "#24A148",
          }}
        >
          <Sidenav.Body style={navBodyStyle}>
            <Nav>
              {configSidebar.map((item) => {
                const { children, ...rest } = item;
                if (children) {
                  return (
                    <Nav.Menu
                      key={item.eventKey}
                      placement="rightStart"
                      trigger="hover"
                      noCaret
                      {...rest}
                    >
                      {children.map((child) => {
                        return <NavItem key={child.eventKey} {...child} />;
                      })}
                    </Nav.Menu>
                  );
                }

                if (rest.target === "_blank") {
                  return (
                    <Nav.Item key={item.eventKey} {...rest}>
                      {item.title}
                    </Nav.Item>
                  );
                }

                return <NavItem key={rest.eventKey} {...rest} />;
              })}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </Sidebar>
    </>
  );
}
