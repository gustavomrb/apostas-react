import React, { useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import InputBusca from "./InputBusca";

function Filtro(state) {
  const { resultados, setResultados, idTime } = state;

  const [opcoesFiltro, setOpcoesFiltro] = React.useState({
    campeonato: [],
    mando: [],
    tamanho: "",
    data: [],
    resultado: [],
    oponente: [],
    excluiOponente: [],
  });

  const geraParams = useCallback(() => {
    const params = [];
    for (let param in opcoesFiltro) {
      if (opcoesFiltro[param]) {
        params.push(`${param}=${opcoesFiltro[param]}`);
      }
    }
    return params.join("&");
  }, [opcoesFiltro]);

  const buscaResultados = useCallback(() => {
    fetch(`http://localhost:3001/futebol/resultados/${idTime}?` + geraParams())
      .then((response) => response.json())
      .then((data) => setResultados(data));
  }, [idTime, setResultados, geraParams]);

  useEffect(() => {
    buscaResultados();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <InputBusca
          resultados={resultados}
          valor="campeonato"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
        <InputBusca
          resultados={resultados}
          valor="mando"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="18%"
        />
        <InputBusca
          resultados={resultados}
          valor="data"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="25%"
        />
        <InputBusca
          resultados={resultados}
          valor="resultado"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="20%"
        />
        <InputBusca
          resultados={resultados}
          valor="oponente"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
        <InputBusca
          resultados={resultados}
          valor="excluiOponente"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "15px" }}>
        <Button variant="contained" onClick={buscaResultados}>
          Buscar
        </Button>
      </Box>
    </Box>
  );
}

export default Filtro;
