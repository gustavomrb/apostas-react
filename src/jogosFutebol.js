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
      to={"/futebol/jogo/" + jogo.id}
      key={i}
    >
      <Box sx={{ width: "70%" }}>
        <Paper sx={{ padding: "15px", display: "flex", justifyContent: "space-around" }}>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "10%" }}>
            {jogo.horario}
          </Box>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "44%" }}>
            {jogo.casa.nome}
          </Box>
          <Box component="span" sx={{ flexBasis: "2%" }}>
            X
          </Box>
          <Box component="span" sx={{ display: "flex", justifyContent: "center", flexBasis: "44%" }}>
            {jogo.fora.nome}
          </Box>
        </Paper>
      </Box>
    </Link>
  ));
}

function JogosFutebol() {
  const [jogos, setJogos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/futebol/jogos")
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

export default JogosFutebol;
