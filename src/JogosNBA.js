import { Box, Link } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import jogosdoDia from "./jogosDoDia.json";

function geraJogos() {
  return jogosdoDia.map((jogo, i) => (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "#000000",
      }}
      component={RouterLink}
      to="/jogo"
      state={{ jogo }}
      key={i}
    >
      <Box component="span" sx={{ fontSize: "30px" }}>
        {jogo.horario}
      </Box>
      <Box
        component="img"
        alt={jogo.times[0].nome}
        src={`/images/${jogo.times[0].nomeCurto.toLowerCase()}.png`}
        sx={{ maxWidth: "150px" }}
      />
      <Box component="span" sx={{ fontSize: "30px" }}>
        @
      </Box>
      <Box
        component="img"
        alt={jogo.times[1].nome}
        src={`/images/${jogo.times[1].nomeCurto.toLowerCase()}.png`}
        sx={{ maxWidth: "150px" }}
      />
    </Link>
  ));
}

function JogosNBA() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <React.Fragment>{geraJogos()}</React.Fragment>
    </Box>
  );
}

export default JogosNBA;
