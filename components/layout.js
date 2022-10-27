import React from "react";
import ResponsiveAppBar from "./menu";

function Layout({ children }) {
    return (
        <>
            <ResponsiveAppBar />
            <main>{children}</main>
        </>
    );
}

export default Layout;
