import * as React from "react";
import { Layout, Icon } from "antd";

const { Header } = Layout;

interface INavbarProps {
  isSideBardCollapsed: boolean;
  toggleSideBar(event: any): void;
}

const Navbar: React.SFC<INavbarProps> = ({
  isSideBardCollapsed,
  toggleSideBar
}) => (
  <Header style={{ background: "#fff", padding: 0 }}>
    <Icon
      className="trigger"
      type={isSideBardCollapsed ? "menu-unfold" : "menu-fold"}
      onClick={toggleSideBar}
    />
  </Header>
);

export default Navbar;
