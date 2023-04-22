import React from "react";
import ResponsiveAppBar from "./menu";
function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      <main
        style={{
          paddingTop: 64,
        }}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
