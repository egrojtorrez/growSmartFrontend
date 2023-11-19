import { Link } from "react-router-dom";
import { Stack } from "rsuite";
import { FaSeedling } from "react-icons/fa";

const BrandLogin = (props) => {
  return (
    <Stack className="brand" {...props} justifyContent="center">
      {/* <Logo height={26} style={{ marginTop: 6 }} /> */}
      <Link to="/">
        <Stack spacing={10}>
          <h2 style={{ color: "white", textTransform: "none" }}>GrowSmart</h2>
          <FaSeedling style={{ fontSize: 40, color: "#fff" }} />
        </Stack>
      </Link>
    </Stack>
  );
};

export default BrandLogin;
