import { Link } from "react-router-dom";
import { Stack } from "rsuite";
import { FaSeedling } from "react-icons/fa";

const Brand = ({ sidebarShow, ...props }) => {
  return (
    <Stack className="brand" {...props} justifyContent="center">
      {/* <Logo height={26} style={{ marginTop: 6 }} /> */}
      <Link to="/">
        <Stack spacing={10}>
          <FaSeedling style={{ fontSize: 26, color: "#fff" }} />
          {sidebarShow ? <p style={{ color: "white" }}>GrowSmart</p> : null}
        </Stack>
      </Link>
    </Stack>
  );
};

export default Brand;
