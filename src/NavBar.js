import { Box, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#000000",
            }}
            component={RouterLink}
            to="/jogo"
          >
            <span>Futebol</span>
          </Link>
        </Box>
        <Box>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#000000",
            }}
            component={RouterLink}
            to="/jogos"
          >
            <span>Basquete</span>
          </Link>
        </Box>
      </Box>
    </nav>
  );
}

export default NavBar;
