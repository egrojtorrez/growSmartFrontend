import { SidebarProvider } from "./SidebarContext";

export const LayoutProvider = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
