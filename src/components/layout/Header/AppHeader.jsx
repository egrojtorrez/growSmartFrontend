import {
  Dropdown,
  Popover,
  Whisper,
  Stack,
  Badge,
  Avatar,
  IconButton,
  List,
  Button,
} from "rsuite";

import { useRef } from "react";

import NoticeIcon from "@rsuite/icons/Notice";
import GearIcon from "@rsuite/icons/Gear";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";

const renderAdminSpeaker = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>Administrator</strong>
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Set status</Dropdown.Item>
        <Dropdown.Item>Profile & account</Dropdown.Item>
        <Dropdown.Item>Feedback</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Settings</Dropdown.Item>
        {/* <Dropdown.Item onClick={logout}>Cerrar Sesion</Dropdown.Item> */}
        <Dropdown.Item
          icon={<HelpOutlineIcon />}
          href="https://rsuitejs.com"
          target="_blank"
          as="a"
        >
          Help{" "}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const renderSettingSpeaker = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <strong>Settings</strong>
        </Dropdown.Item>
        <Dropdown.Item>Applications</Dropdown.Item>
        <Dropdown.Item>Projects</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Members</Dropdown.Item>
        <Dropdown.Item>Teams</Dropdown.Item>
        <Dropdown.Item>Channels</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>Integrations</Dropdown.Item>
        <Dropdown.Item>Customize</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const renderNoticeSpeaker = ({ onClose, left, top, className }, ref) => {
  const notifications = [
    [
      "7 hours ago",
      "The charts of the dashboard have been fully upgraded and are more visually pleasing.",
    ],
    [
      "13 hours ago",
      "The function of virtualizing large lists has been added, and the style of the list can be customized as required.",
    ],
    ["2 days ago", "Upgraded React 18 and Webpack 5."],
    [
      "3 days ago",
      "Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.",
    ],
  ];

  return (
    <Popover
      ref={ref}
      className={className}
      style={{ left, top, width: 300 }}
      title="Last updates"
    >
      <List>
        {notifications.map((item, index) => {
          const [time, content] = item;
          return (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: "#57606a" }}>{time}</span>
              </Stack>

              <p>{content}</p>
            </List.Item>
          );
        })}
      </List>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Button onClick={onClose}>More notifications</Button>
      </div>
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
