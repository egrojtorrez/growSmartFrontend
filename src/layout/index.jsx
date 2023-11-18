import Frame from "@components/layout/Frame";
import { configSidebar } from "@components/layout/Sidebar/configSidebar";
import { LayoutProvider } from "@context/LayoutProvider";

export default function DefaultLayout() {
  return (
    <LayoutProvider>
      <Frame navs={configSidebar} />
    </LayoutProvider>
  );
}
