import { Navbar, Nav } from "rsuite";
import MenuIcon from "@rsuite/icons/Menu";
import AppHeader from "./AppHeader";
import { useSideBar } from "@hooks/useSideBar";

export default function NavHeader() {
  const { toggleSidebar } = useSideBar();

  return (
    <>
      <Navbar>
        <Nav>
          <Nav.Item onClick={toggleSidebar} icon={<MenuIcon />}/>
        </Nav>
      </Navbar>
      <AppHeader />
    </>
  );
}
