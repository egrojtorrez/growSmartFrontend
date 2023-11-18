import { Navbar, Nav } from "rsuite";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav pullRight>
        <Nav.Item
          onClick={onChange}
          style={{ textAlign: "center" }}
          icon={expand ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
        />
      </Nav>
    </Navbar>
  );
};

export default NavToggle;
