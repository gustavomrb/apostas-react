import { Box, Link, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function geraJogos(jogos) {
  return jogos.map((jogo, i) => (
    <Link
      sx={{
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
        color: "#000000",
        fontWeight: "bold",
        width: "70%",
        fontSize: "15px",
      }}
      component={RouterLink}
      to={"/tenis/jogo/" + jogo.id}
      key={i}
    >
      <Box sx={{ width: "70%" }}>
        <Paper sx={{ padding: "15px", display: "flex", justifyContent: "space-around" }}>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "10%" }}>
            {jogo.horario}
          </Box>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "44%" }}>
            {jogo.playerHome.name}
          </Box>
          <Box component="span" sx={{ flexBasis: "2%" }}>
            X
          </Box>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "44%" }}>
            {jogo.playerAway.name}
          </Box>
        </Paper>
      </Box>
    </Link>
  ));
}

function JogosTenis() {
  const [jogos, setJogos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/tenis/jogos")
      .then((response) => response.json())
      .then((data) => setJogos(data));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "13px",
      }}
    >
      <React.Fragment>{geraJogos(jogos)}</React.Fragment>
    </Box>
  );
}

export default JogosTenis;
