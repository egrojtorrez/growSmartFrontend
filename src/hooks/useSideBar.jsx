import { SidebarContext } from "@src/context/SidebarContext";
import { useContext } from "react";

export const useSideBar = () => {
  const { sidebarShow, unfoldable, toggleSidebar, toggleUnfoldable, setSidebarShow} =
    useContext(SidebarContext);

  return { sidebarShow, unfoldable, toggleSidebar, toggleUnfoldable, setSidebarShow };
};
