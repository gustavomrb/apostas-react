import React from "react";
import { Box, Paper } from "@mui/material";
import Tabela from "./Tabela";
import Filtro from "./Filtro";

const metaDados = {
  nome: "",
  metaDados: [
    { nomeColuna: "Data", valor: "data", basis: "20%" },
    { nomeColuna: "Campeonato", valor: "campeonato", basis: "22%" },
    { nomeColuna: "Oponente", valor: "oponente", basis: "18%" },
    { nomeColuna: "Res.", valor: "resultado", basis: "14%" },
    { nomeColuna: "Mando", valor: "mando", basis: "10%" },
    { nomeColuna: "Placar", valor: "placar", basis: "14%" },
    { nomeColuna: "Gols", valor: "gols", basis: "6%" },
  ],
};

function PanelResultados(state) {
  const { time } = state;

  const [resultados, setResultados] = React.useState([]);

  return (
    <Box sx={{ width: "48%" }}>
      <Paper>
        <Filtro resultados={resultados} setResultados={setResultados} idTime={time.id} />
      </Paper>
      <Tabela metaDados={metaDados} dados={resultados} />
    </Box>
  );
}

export default PanelResultados;
