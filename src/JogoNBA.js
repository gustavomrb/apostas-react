import { useLocation } from "react-router-dom";
import React from "react";
import PropAccordion from "./PropAccordion";
import { Box } from "@mui/material";

function JogoNBA() {
  let location = useLocation();
  let { jogo } = location.state;
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {jogo.mercado.playerProps.map((prop, i) => (
        <PropAccordion key={i} prop={prop} />
      ))}
    </Box>
  );
}

export default JogoNBA;
