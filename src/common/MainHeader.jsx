import React, { useState } from "react";

import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/dashboard">Dashboard</Link>,
    key: "dashboard",
  },
  {
    label: <Link to="/about">AboutUs</Link>,
    key: "aboutus",
  },
  {
    label: <Link to="/contact">ContactUs</Link>,
    key: "contact",
  },
];

function MainHeader() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu
        style={{
          backgroundColor: "maroon",
          color: "white",
          padding: "1rems",
          width: "100vw",
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}

export default MainHeader;
