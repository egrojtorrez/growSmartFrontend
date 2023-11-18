import PropTypes from "prop-types";
import {
  BsFillFileExcelFill,
  BsFillFileImageFill,
  BsFillFilePdfFill,
  BsFillFileTextFill,
} from "react-icons/bs";
import IconAButton from "./IconButton";

const typeOptions = {
  doc: {
    Icon: BsFillFileTextFill,
    bgColor: "#4285f4",
    iconColor: "white",
  },
  image: {
    Icon: BsFillFileImageFill,
    bgColor: "#0d6efd",
    iconColor: "white",
  },
  excel: {
    Icon: BsFillFileExcelFill,
    bgColor: "#08753f",
    iconColor: "white",
  },
  pdf: {
    Icon: BsFillFilePdfFill,
    bgColor: "#dc3545",
    iconColor: "white",
  },
};

export default function RecursoButton({ url, type = "doc" }) {
  const { Icon, bgColor, iconColor } = typeOptions[type];

  return (
    <IconAButton
      Icon={Icon}
      bgColor={bgColor}
      iconColor={iconColor}
      url={url}
    />
  );
}

RecursoButton.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["doc", "image", "excel", "pdf"]),
};
