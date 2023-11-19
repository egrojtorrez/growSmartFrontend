import { Dropdown, Popover, Whisper, Stack, Avatar } from "rsuite";

import { useRef } from "react";
import user from "@helpers/user";
import { logout } from "@helpers/logout";

const renderAdminSpeaker = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Iniciaste Sesion como</p>
          <strong>{user.user}</strong>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item onClick={logout}>Cerrar Sesion</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const AppHeader = () => {
  const trigger = useRef(null);

  return (
    <Stack className="header" style={{ top: ".5em" }} spacing={8}>
      <Whisper
        placement="bottomEnd"
        trigger="click"
        ref={trigger}
        speaker={renderAdminSpeaker}
      >
        <Avatar
          size="sm"
          circle
          src="https://avatars.githubusercontent.com/u/1203827"
          alt="@simonguo"
          style={{ marginLeft: 8 }}
        />
      </Whisper>
    </Stack>
  );
};

export default AppHeader;
