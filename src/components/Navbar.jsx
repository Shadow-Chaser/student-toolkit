import { HomeFilled, InfoCircleFilled, ToolFilled } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ToolsDropdown from "../data/ToolDropdown";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header">
        <img className="logo" src={logo} alt="" />
        <ul className="main-nav">
          <Link className="nav-item" to="/">
            <HomeFilled /> Home
          </Link>

          <Dropdown overlay={ToolsDropdown} placement="bottom" arrow>
            <p className="nav-item">
              <ToolFilled /> Tools
            </p>
          </Dropdown>
          <Link className="nav-item" to="/about">
            <InfoCircleFilled /> About
          </Link>
        </ul>
      </header>
      <hr />
    </div>
  );
};
export default Navbar;
