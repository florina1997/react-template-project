import React from "react";
import MainHeader from "./MainHeader";
import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div>
      <MainHeader />
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default AuthLayout;
