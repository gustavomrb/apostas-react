import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation } from "react-router-dom";

function geraRows(jogo) {
  let rows = [];
  for (let prop of jogo.mercado.playerProps) {
    rows = rows.concat(
      prop.jogadores.map((j) => {
        return {
          jogo: jogo.times[0].nomeCurto + " @ " + jogo.times[1].nomeCurto,
          jogador: j.jogador,
          prop: prop.nome,
          limite: j.limite,
          oddsOver: j.oddsOver,
          oddsUnder: j.oddsUnder,
          media: j.media,
          temporada: j.temporada,
          diferencaOver: j.diferencaOver,
          diferencaUnder: j.diferencaUnder,
          ultimos5: j.ultimos5,
          ultimos10: j.ultimos10,
        };
      })
    );
  }
  rows = rows.map((r, i) => {
    r.id = i + 1;
    return r;
  });
  return rows;
}

const columns = [
  {
    field: "jogo",
    headerName: "Jogo",
    flex: 0.3,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "jogador",
    headerName: "Jogador",
    flex: 0.45,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "prop",
    headerName: "Prop",
    flex: 0.25,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "limite",
    type: "number",
    headerName: "Limite",
    flex: 0.2,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "oddsOver",
    headerName: "Odds Over",
    flex: 0.3,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "oddsUnder",
    headerName: "Odds Under",
    flex: 0.3,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "media",
    type: "number",
    headerName: "Média",
    flex: 0.15,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "temporada",
    headerName: "Temporada",
    flex: 0.4,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "diferencaOver",
    type: "number",
    headerName: "Diferença Over",
    flex: 0.2,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "diferencaUnder",
    type: "number",
    headerName: "Diferença Under",
    flex: 0.2,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ultimos5",
    headerName: "Últimos 5",
    flex: 0.4,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "ultimos10",
    headerName: "Últimos 10",
    flex: 0.4,
    headerAlign: "center",
    align: "center",
  },
];

function OddsGrid() {
  let location = useLocation();
  console.log(location);
  let { jogo } = location.state;
  return (
    <Box sx={{ height: 800, alignSelf: "normal" }}>
      <DataGrid rows={geraRows(jogo)} columns={columns} />
    </Box>
  );
}

export default OddsGrid;
