import { SnippetsFilled } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const toolDropdown = () => {
  return (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <Link className="" to="/cover-builder">
              <SnippetsFilled /> Cover Builder
            </Link>
          ),
        },
      ]}
    />
  );
};
export default toolDropdown;
