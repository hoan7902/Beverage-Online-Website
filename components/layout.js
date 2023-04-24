import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./menu";

function Layout({ children }) {

  return (
    <>
        <ResponsiveAppBar />
        <Box sx={{ marginTop: { xs: "56px", md: "69px" } }}>{children}</Box>
    </>
  );
}

export default Layout;
