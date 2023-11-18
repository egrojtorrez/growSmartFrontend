import { Icon } from "@rsuite/icons";
import { FaLeaf } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

export const configSidebar = [
  {
    eventKey: "dashboard",
    icon: <Icon as={FaHome} />,
    title: "Dashboard",
    to: "dashboard",
  },
  {
    eventKey: "mi-planta",
    icon: <Icon as={FaLeaf} />,
    title: "Mi Planta",
    to: "mi-planta",
  },
  {
    eventKey: "agregar-planta",
    icon: <Icon as={FaPlus} />,
    title: "Agregar planta",
    to: "agregar-planta",
  },
];
