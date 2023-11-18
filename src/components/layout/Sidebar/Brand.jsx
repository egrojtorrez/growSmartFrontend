import { Link } from "react-router-dom";
// import Logo from "../Logo";
import { Stack } from "rsuite";
import { FaSeedling } from "react-icons/fa";

const Brand = (props) => {
  return (
    <Stack className="brand" {...props} justifyContent="center">
      {/* <Logo height={26} style={{ marginTop: 6 }} /> */}
      <Link to="/">
        <Stack spacing={10}>
          <FaSeedling style={{ fontSize: 26, color: "#fff" }} />
          <p style={{ color: "white" }}>GrowSmart</p>
        </Stack>
      </Link>
    </Stack>
  );
};

export default Brand;
