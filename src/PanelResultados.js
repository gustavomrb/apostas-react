import React from "react";
import { Box, MenuItem, Paper, Select } from "@mui/material";
import Tabela from "./Tabela";
import Filtro from "./Filtro";

const metaDados = {
  nome: "",
  metaDados: [
    { nomeColuna: "Data", valor: "data", basis: "22%" },
    { nomeColuna: "Campeonato", valor: "campeonato", basis: "24%" },
    { nomeColuna: "Oponente", valor: "oponente", basis: "20%" },
    { nomeColuna: "Res.", valor: "resultado", basis: "14%" },
    { nomeColuna: "Mando", valor: "mando", basis: "10%" },
    { nomeColuna: "Placar", valor: "placar", basis: "14%" },
  ],
};

const metaDadosTotalizador = [
  { nomeColuna: "W/L", valor: "wl" },
  { nomeColuna: "Gols", valor: "gols" },
  { nomeColuna: "O/U 1.5", valor: "ou15" },
  { nomeColuna: "O/U 2.5", valor: "ou25" },
  { nomeColuna: "O/U 3.5", valor: "ou35" },
  { nomeColuna: "BTTS", valor: "btts" },
];

const metaDadosTotalizadorFH = [
  { nomeColuna: "W/L", valor: "wl" },
  { nomeColuna: "Gols", valor: "gols" },
  { nomeColuna: "O/U 1.5", valor: "ou15" },
  { nomeColuna: "O/U 2.5", valor: "ou25" },
  { nomeColuna: "O/U 3.5", valor: "ou35" },
  { nomeColuna: "BTTS", valor: "btts" },
];

const metaDadosTotalizadorSH = [
  { nomeColuna: "W/L", valor: "wl" },
  { nomeColuna: "Gols", valor: "gols" },
  { nomeColuna: "O/U 1.5", valor: "ou15" },
  { nomeColuna: "O/U 2.5", valor: "ou25" },
  { nomeColuna: "O/U 3.5", valor: "ou35" },
  { nomeColuna: "BTTS", valor: "btts" },
];

const metaDadosTotalizadorHTFT = [
  { nomeColuna: "W-W" },
  { nomeColuna: "D-W" },
  { nomeColuna: "L-W" },
  { nomeColuna: "W-D" },
  { nomeColuna: "D-D" },
  { nomeColuna: "L-D" },
  { nomeColuna: "W-L" },
  { nomeColuna: "D-L" },
  { nomeColuna: "L-L" },
];

const metaDadosTotalizadorMargin = [
  { nomeColuna: "1", valor: "1" },
  { nomeColuna: "2", valor: "2" },
  { nomeColuna: "3", valor: "3" },
  { nomeColuna: ">3", valor: "o3" },
];

function PanelResultados(state) {
  const { time } = state;
  const [totalizador, setTotalizador] = React.useState("ft");
  const [ultimos, setUltimos] = React.useState("all");
  const [resultados, setResultados] = React.useState([]);

  const geraTotalizador = (stat, resultsArr) => {
    if (stat === "wl") {
      return `${resultsArr.filter((r) => r.ft.resultado === "W").length}-${
        resultsArr.filter((r) => r.ft.resultado === "D").length
      }-${resultsArr.filter((r) => r.ft.resultado === "L").length}`;
    } else if (stat === "gols") {
      return `${(resultsArr.reduce((prev, curr) => prev + curr.ft.gols, 0) / resultsArr.length).toFixed(1)}`;
    } else if (stat === "ou25") {
      return `${resultsArr.filter((r) => r.ft.gols > 2.5).length}-${resultsArr.filter((r) => r.ft.gols < 2.5).length}`;
    } else if (stat === "ou15") {
      return `${resultsArr.filter((r) => r.ft.gols > 1.5).length}-${resultsArr.filter((r) => r.ft.gols < 1.5).length}`;
    } else if (stat === "ou35") {
      return `${resultsArr.filter((r) => r.ft.gols > 3.5).length}-${resultsArr.filter((r) => r.ft.gols < 3.5).length}`;
    } else if (stat === "btts") {
      const bttsSim = resultsArr.filter((r) => {
        const split = r.ft.placar.split("-");
        return parseInt(split[0]) > 0 && parseInt(split[1]) > 0;
      }).length;
      return `${bttsSim}-${resultsArr.length - bttsSim}`;
    }
  };

  const geraTotalizadorFH = (stat, resultsArr) => {
    const numJogos = resultsArr.filter((r) => r.fh).length;
    if (stat === "wl") {
      return `${resultsArr.filter((r) => r.fh && r.fh.resultado === "W").length}-${
        resultsArr.filter((r) => r.fh && r.fh.resultado === "D").length
      }-${resultsArr.filter((r) => r.fh && r.fh.resultado === "L").length}`;
    } else if (stat === "gols") {
      return `${(resultsArr.reduce((prev, curr) => prev + (curr.fh ? curr.fh.gols : 0), 0) / numJogos).toFixed(1)}`;
    } else if (stat === "ou25") {
      return `${resultsArr.filter((r) => r.fh && r.fh.gols > 2.5).length}-${
        resultsArr.filter((r) => r.fh && r.fh.gols < 2.5).length
      }`;
    } else if (stat === "ou15") {
      return `${resultsArr.filter((r) => r.fh && r.fh.gols > 1.5).length}-${
        resultsArr.filter((r) => r.fh && r.fh.gols < 1.5).length
      }`;
    } else if (stat === "ou35") {
      return `${resultsArr.filter((r) => r.fh && r.fh.gols > 3.5).length}-${
        resultsArr.filter((r) => r.fh && r.fh.gols < 3.5).length
      }`;
    } else if (stat === "btts") {
      return `${resultsArr.filter((r) => r.fh && r.fh.btts).length}-${
        resultsArr.filter((r) => r.fh && !r.fh.btts).length
      }`;
    }
  };

  const geraTotalizadorSH = (stat, resultsArr) => {
    const numJogos = resultsArr.filter((r) => r.sh).length;
    if (stat === "wl") {
      return `${resultsArr.filter((r) => r.sh && r.sh.resultado === "W").length}-${
        resultsArr.filter((r) => r.sh && r.sh.resultado === "D").length
      }-${resultsArr.filter((r) => r.sh && r.sh.resultado === "L").length}`;
    } else if (stat === "gols") {
      return `${(resultsArr.reduce((prev, curr) => prev + (curr.sh ? curr.sh.gols : 0), 0) / numJogos).toFixed(1)}`;
    } else if (stat === "ou25") {
      return `${resultsArr.filter((r) => r.sh && r.sh.gols > 2.5).length}-${
        resultsArr.filter((r) => r.sh && r.sh.gols < 2.5).length
      }`;
    } else if (stat === "ou15") {
      return `${resultsArr.filter((r) => r.sh && r.sh.gols > 1.5).length}-${
        resultsArr.filter((r) => r.sh && r.sh.gols < 1.5).length
      }`;
    } else if (stat === "ou35") {
      return `${resultsArr.filter((r) => r.sh && r.sh.gols > 3.5).length}-${
        resultsArr.filter((r) => r.sh && r.sh.gols < 3.5).length
      }`;
    } else if (stat === "btts") {
      return `${resultsArr.filter((r) => r.sh && r.sh.btts).length}-${
        resultsArr.filter((r) => r.sh && !r.sh.btts).length
      }`;
    }
  };

  const geraTotalizadorMargin = (stat, resultsArr) => {
    const numJogos = resultsArr.length;
    if (stat === "1") {
      return `${resultsArr.filter((r) => r.ft.margem === 1).length}-${numJogos}`;
    } else if (stat === "2") {
      return `${resultsArr.filter((r) => r.ft.margem === 2).length}-${numJogos}`;
    } else if (stat === "3") {
      return `${resultsArr.filter((r) => r.ft.margem === 3).length}-${numJogos}`;
    } else if (stat === "o3") {
      return `${resultsArr.filter((r) => r.ft.margem > 3).length}-${numJogos}`;
    }
  };

  const escolheTotalizador = (ultimos) => {
    let resultsArr = ultimos === "all" ? resultados : resultados.slice(0, parseInt(ultimos));
    switch (totalizador) {
      case "ft":
        return metaDadosTotalizador.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizador(m.valor, resultsArr)}</Box>
          </Box>
        ));
      case "fh":
        return metaDadosTotalizadorFH.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizadorFH(m.valor, resultsArr)}</Box>
          </Box>
        ));
      case "sh":
        return metaDadosTotalizadorSH.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizadorSH(m.valor, resultsArr)}</Box>
          </Box>
        ));
      case "htft":
        return metaDadosTotalizadorHTFT.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">
              {`${resultsArr.filter((r) => r.ft.htft === m.nomeColuna).length}/${
                resultsArr.filter((r) => r.fh).length
              }`}
            </Box>
          </Box>
        ));
      case "margin":
        return metaDadosTotalizadorMargin.map((m, i) => (
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "15px" }} key={i}>
            <Box component="span" sx={{ fontWeight: "bold" }}>
              {m.nomeColuna}
            </Box>
            <Box component="span">{geraTotalizadorMargin(m.valor, resultsArr)}</Box>
          </Box>
        ));
      default:
        <Box></Box>;
    }
  };

  return (
    <Box sx={{ width: "48%" }}>
      <Paper sx={{ padding: "15px" }}>
        <Filtro resultados={resultados} setResultados={setResultados} idTime={time.id} />
      </Paper>
      <Box component="span">Resultados {time.nome}</Box>
      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Select
            size="small"
            value={totalizador}
            label="Totalizadores"
            onChange={(e) => setTotalizador(e.target.value)}
          >
            <MenuItem value={"ft"}>Full Time</MenuItem>
            <MenuItem value={"fh"}>1st Half</MenuItem>
            <MenuItem value={"sh"}>2nd Half</MenuItem>
            <MenuItem value={"htft"}>HT/FT</MenuItem>
            <MenuItem value={"margin"}>Margin</MenuItem>
          </Select>
        </Box>
        <Box sx={{ display: "flex" }}>{escolheTotalizador("all")}</Box>
      </Paper>

      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>{escolheTotalizador("5")}</Box>
      </Paper>

      <Paper sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>{escolheTotalizador("10")}</Box>
      </Paper>

      <Tabela
        metaDados={metaDados}
        dados={resultados.map((r) => ({
          data: r.data,
          campeonato: r.campeonato,
          oponente: r.oponente,
          resultado: r.ft.resultado,
          mando: r.mando,
          placar: r.ft.placar,
        }))}
      />
    </Box>
  );
}

export default PanelResultados;
