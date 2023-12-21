import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

export default function Header({ isDarkMode, setIsDarkMode }: any) {
  return (
    <div className="w-full h-[64px] shadow-md bg-[#57756D] flex items-center justify-end p-4">
      <div className="text-white">
        <span>Dark Mode : </span>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={isDarkMode}
          onChange={() => {
            setIsDarkMode((prev: boolean) => !prev);
          }}
        />
      </div>
    </div>
  );
}
