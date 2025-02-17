import React from "react";
import { Box, MenuItem, Paper, Select } from "@mui/material";
import Tabela from "./Tabela";
import FiltroTenis from "./FiltroTenis";

const metaDados = {
  nome: "",
  metaDados: [
    { nomeColuna: "Data", valor: "data", basis: "16%" },
    { nomeColuna: "Piso", valor: "quadra", basis: "11%" },
    { nomeColuna: "Camp.", valor: "campeonato", basis: "18%" },
    { nomeColuna: "R", valor: "round", basis: "7%" },
    { nomeColuna: "RO", valor: "oponenteRanking", basis: "10%" },
    { nomeColuna: "Oponente", valor: "oponente", basis: "16%" },
    { nomeColuna: "Res.", valor: "resultado", basis: "10%" },
    { nomeColuna: "Placar", valor: "placar", basis: "12%" },
  ],
};

const metaDadosTotalizador = [
  { nomeColuna: "W/L", valor: "wl" },
  { nomeColuna: "O/U 2.5", valor: "ou25" },
  { nomeColuna: "Hard", valor: "Hard" },
  { nomeColuna: "Clay", valor: "Clay" },
  { nomeColuna: "Grass", valor: "Grass" },
];

const metaDadosTotalizadorRanks = [
  { nomeColuna: "<30", valor: "0.30" },
  { nomeColuna: "30-50", valor: "30.50" },
  { nomeColuna: "51-80", valor: "51.80" },
  { nomeColuna: "81-100", valor: "81.100" },
  { nomeColuna: "101-150", valor: "101.150" },
  { nomeColuna: "151-200", valor: "151.200" },
  { nomeColuna: "201-300", valor: "201.300" },
  { nomeColuna: "301-400", valor: "301.400" },
  { nomeColuna: "400-500", valor: "400.500" },
  { nomeColuna: "500-600", valor: "500.600" },
  { nomeColuna: "600-700", valor: "600.700" },
  { nomeColuna: "700-800", valor: "700.800" },
  { nomeColuna: "800-900", valor: "800.900" },
  { nomeColuna: "900-1000", valor: "900.1000" },
  { nomeColuna: "1000-", valor: "1000.2000" },
];

function PanelResultadosTenis(state) {
  const { jogador } = state;
  const [totalizador, setTotalizador] = React.useState("ft");
  const [resultados, setResultados] = React.useState([]);

  const geraTotalizador = (stat) => {
    if (stat === "wl") {
      return `${resultados.filter((r) => r.resultado === "W").length}-${
        resultados.filter((r) => r.resultado === "L").length
      }`;
    } else if (stat === "ou25") {
      return `${
        resultados.filter((r) => {
          const placarSplit = r.placar.split(" ");
          return placarSplit.length === 3;
        }).length
      }/${resultados.length}`;
    } else {
      return `${
        resultados.filter((r) => {
          return r.quadra === stat && r.resultado === "W";
        }).length
      }-${resultados.filter((r) => r.quadra === stat && r.resultado === "L").length}`;
    }
  };

  const geraTotalizadorRanks = (rankStr) => {
    const jogos = resultados.map((r) => ({ rank: parseInt(r.oponenteRanking), result: r.resultado }));
    let statOver = parseInt(rankStr.split(".")[0]);
    let statUnder = parseInt(rankStr.split(".")[1]);

    return `${jogos.filter((j) => j.rank >= statOver && j.rank <= statUnder && j.result === "W").length}-${
      jogos.filter((j) => j.rank >= statOver && j.rank <= statUnder && j.result === "L").length
    }`;
  };

  const escolheTotalizador = () => {
    switch (totalizador) {
      case "ft":
        return metaDadosTotalizador.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizador(m.valor)}</Box>
          </Box>
        ));
      case "ranks":
        return metaDadosTotalizadorRanks.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizadorRanks(m.valor)}</Box>
          </Box>
        ));
      default:
        <Box></Box>;
    }
  };

  return (
    <Box sx={{ width: "48%" }}>
      <Paper sx={{ padding: "15px" }}>
        <FiltroTenis resultados={resultados} setResultados={setResultados} nomeJogador={jogador.name} />
      </Paper>
      <Box component="span">
        Resultados {jogador.name} - Rank: {jogador.ranking} - Idade: {jogador.age} - Odds: {jogador.odds}
      </Box>
      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Select
            size="small"
            value={totalizador}
            label="Totalizadores"
            onChange={(e) => setTotalizador(e.target.value)}
          >
            <MenuItem value={"ft"}>Full Time</MenuItem>
            <MenuItem value={"ranks"}>Ranks</MenuItem>
            {/*<MenuItem value={"sh"}>2nd Half</MenuItem>
            <MenuItem value={"htft"}>HT/FT</MenuItem>
            <MenuItem value={"margin"}>Margin</MenuItem>*/}
          </Select>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>{escolheTotalizador()}</Box>
      </Paper>
      <Tabela metaDados={metaDados} dados={resultados.slice(0, 50)} />
    </Box>
  );
}

export default PanelResultadosTenis;
