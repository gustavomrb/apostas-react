import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useLocation } from "react-router-dom";
import Tabela from "./Tabela";

const metaDadosPlayerProps = [
  { nomeColuna: "Jogador", valor: "jogador", basis: "17%" },
  { nomeColuna: "Time", valor: "time", basis: "5%" },
  { nomeColuna: "Limite", valor: "limite", basis: "5%" },
  { nomeColuna: "Média", valor: "media", basis: "5%" },
  { nomeColuna: "Over Odds", valor: "oddsOver", basis: "5%", tipo: "odd" },
  { nomeColuna: "Under Odds", valor: "oddsUnder", basis: "5%", tipo: "odd" },
  { nomeColuna: "Temp. Atual", valor: "temporada", basis: "6%", tipo: "stat" },
  { nomeColuna: "Ultima", valor: "temporadaUltima", basis: "6%", tipo: "stat" },
  //{ nomeColuna: "Dif. Over", valor: "diferencaOver", basis: "10%" },
  //{ nomeColuna: "Dif. Under", valor: "diferencaUnder", basis: "10%" },
  { nomeColuna: "Últimos 5", valor: "ultimos5", basis: "8%", tipo: "stat" },
  { nomeColuna: "Últimos 10", valor: "ultimos10", basis: "8%", tipo: "stat" },
  //{ nomeColuna: "DvPos", valor: "defenseVsPosition", basis: "10%" },
  { nomeColuna: "Final", valor: "taxaFinal", basis: "10%" },
  { nomeColuna: "Dif. Over", valor: "diferencaOverFinal", basis: "10%" },
  { nomeColuna: "Dif. Under", valor: "diferencaUnderFinal", basis: "10%" },
];

const metaDadosBoxScore = [
  { nomeColuna: "VS", valor: "matchup", basis: "10%" },
  { nomeColuna: "W/L", valor: "wl", basis: "5%" },
  { nomeColuna: "MIN", valor: "min", basis: "5%" },
  { nomeColuna: "FGM", valor: "fgm", basis: "5%" },
  { nomeColuna: "FGA", valor: "fga", basis: "5%" },
  { nomeColuna: "FG%", valor: "fg_pct", basis: "5%" },
  { nomeColuna: "3PM", valor: "fg3m", basis: "5%" },
  { nomeColuna: "3PA", valor: "fg3a", basis: "5%" },
  { nomeColuna: "3P%", valor: "fg3_pct", basis: "5%" },
  { nomeColuna: "FTM", valor: "ftm", basis: "5%" },
  { nomeColuna: "FTA", valor: "fta", basis: "5%" },
  { nomeColuna: "FT%", valor: "ft_pct", basis: "5%" },
  { nomeColuna: "OREB", valor: "oreb", basis: "5%" },
  { nomeColuna: "DREB", valor: "dreb", basis: "5%" },
  { nomeColuna: "REB", valor: "reb", basis: "5%" },
  { nomeColuna: "AST", valor: "ast", basis: "5%" },
  { nomeColuna: "STL", valor: "stl", basis: "5%" },
  { nomeColuna: "BLK", valor: "blk", basis: "5%" },
  { nomeColuna: "PTS", valor: "pts", basis: "5%" },
];

const metaDadosMedia = [
  { nomeColuna: "GP", valor: "gp", basis: "6%" },
  { nomeColuna: "MIN", valor: "min", basis: "6%" },
  { nomeColuna: "FGM", valor: "fgm", basis: "6%" },
  { nomeColuna: "FGA", valor: "fga", basis: "6%" },
  { nomeColuna: "FG%", valor: "fg_pct", basis: "6%" },
  { nomeColuna: "3PM", valor: "fg3m", basis: "5%" },
  { nomeColuna: "3PA", valor: "fg3a", basis: "5%" },
  { nomeColuna: "3P%", valor: "fg3_pct", basis: "5%" },
  { nomeColuna: "FTM", valor: "ftm", basis: "5%" },
  { nomeColuna: "FTA", valor: "fta", basis: "5%" },
  { nomeColuna: "FT%", valor: "ft_pct", basis: "5%" },
  { nomeColuna: "OREB", valor: "oreb", basis: "5%" },
  { nomeColuna: "DREB", valor: "dreb", basis: "5%" },
  { nomeColuna: "REB", valor: "reb", basis: "5%" },
  { nomeColuna: "AST", valor: "ast", basis: "5%" },
  { nomeColuna: "STL", valor: "stl", basis: "5%" },
  { nomeColuna: "BLK", valor: "blk", basis: "5%" },
  { nomeColuna: "TO", valor: "tov", basis: "5%" },
  { nomeColuna: "PTS", valor: "pts", basis: "5%" },
];

const metaDados = {
  nome: "",
  metaDados: metaDadosPlayerProps,
  filhos: [
    {
      nome: "Geral - Médias",
      metaDados: metaDadosMedia,
    },
    {
      nome: "Últimos 5 - Geral - Médias",
      metaDados: metaDadosMedia,
    },
    {
      nome: "Últimos 5 - Geral",
      metaDados: metaDadosBoxScore,
    },
    {
      nome: "Últimos 5 - Casa - Médias",
      metaDados: metaDadosMedia,
    },
    {
      nome: "Últimos 5 - Casa",
      metaDados: metaDadosBoxScore,
    },
    {
      nome: "Últimos 5 - Fora - Médias",
      metaDados: metaDadosMedia,
    },
    {
      nome: "Últimos 5 - Fora",
      metaDados: metaDadosBoxScore,
    },
  ],
};

export default function PropAccordion(props) {
  let location = useLocation();
  let { jogo } = location.state;

  const geraDados = () => {
    return props.prop.jogadores.map((j) => {
      const playerStats = jogo.playerStats.find((stats) => stats.jogador === j.jogador);
      if (!playerStats) {
        return null;
      }
      return {
        dados: j,
        filhos: [
          {
            dados: [playerStats.geral.medias],
          },
          {
            dados: [playerStats.ultimos5.geral.medias],
          },
          {
            dados: playerStats.ultimos5.geral.boxScores,
          },
          {
            dados: [playerStats.ultimos5.casa.medias],
          },
          {
            dados: playerStats.ultimos5.casa.boxScores,
          },
          {
            dados: [playerStats.ultimos5.fora.medias],
          },
          {
            dados: playerStats.ultimos5.fora.boxScores,
          },
        ],
      };
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Accordion sx={{ width: "100%" }} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>{props.prop.nome}</AccordionSummary>
        <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
          <Tabela metaDados={metaDados} dados={geraDados()} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
