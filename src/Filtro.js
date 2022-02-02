import React, { useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import InputBusca from "./InputBusca";

function Filtro(state) {
  const { resultados, setResultados, idTime } = state;

  const buscaResultados = useCallback(() => {
    fetch("http://localhost:3001/futebol/resultados/" + idTime)
      .then((response) => response.json())
      .then((data) => setResultados(data));
  }, [idTime]);

  useEffect(() => {
    buscaResultados();
  }, [buscaResultados]);

  const [opcoesFiltro, setOpcoesFiltro] = React.useState({
    campeonato: "",
    mando: "",
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <InputBusca
          resultados={resultados}
          valor="campeonato"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
        />
        <InputBusca
          resultados={resultados}
          valor="mando"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "15px" }}>
        <Button variant="contained" onClick={buscaResultados()}>
          Buscar
        </Button>
      </Box>
    </Box>
  );
}

export default Filtro;
