import React from "react";
import ResponsiveAppBar from "./menu";
function Layout({ inputColor, children }) {
  return (
    <>
      <ResponsiveAppBar inputColor={inputColor} />
      <main>{children}</main>
    </>
  );
}

export default Layout;
