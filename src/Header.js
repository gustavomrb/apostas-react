import { Box, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

function NavBar() {
  return (
    <header>
      <Box component="span" sx={{ display: "flex", justifyContent: "center", fontSize: "30px" }}>
        Header
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Link
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#000000",
              padding: "15px",
              fontWeight: "bold",
            }}
            component={RouterLink}
            to="/futebol/jogos"
          >
            <SportsSoccerIcon />
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
              padding: "15px",
              fontWeight: "bold",
            }}
            component={RouterLink}
            to="/jogos"
          >
            <SportsBasketballIcon />
            <span sx={{ padding: "15px" }}>Basquete</span>
          </Link>
        </Box>
      </Box>
    </header>
  );
}

export default NavBar;
