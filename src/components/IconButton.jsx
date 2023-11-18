import { IconButton } from "rsuite";
import { Icon } from "@rsuite/icons";

export default function IconAButton({
  Icon: bIcon,
  iconColor,
  bgColor,
  url,
  fontSize = 40,
}) {
  return (
    <a href={url} rel="noreferrer" target="_blank">
      <IconButton
        icon={
          <Icon
            style={{
              fontSize: fontSize,
              color: iconColor,
            }}
            as={bIcon}
          />
        }
        style={{ backgroundColor: bgColor }}
      />
    </a>
  );
}
