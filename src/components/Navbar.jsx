import { HomeFilled, InfoCircleFilled, ToolFilled } from "@ant-design/icons";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ToolsDropdown from "../data/ToolDropdown";
import "../styles/Navbar.css";

const GH_ISSUE = "//github.com/Shadow-Chaser/student-toolkit/issues/";
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
          <Link className=" btn__cta" target="_blank" to={GH_ISSUE}>
            Request a Tool
          </Link>
        </ul>
      </header>
      <hr />
    </div>
  );
};
export default Navbar;
