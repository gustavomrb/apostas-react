import React, { useCallback, useEffect } from "react";
import { Box, Button } from "@mui/material";
import InputBuscaTenis from "./InputBuscaTenis";

function FiltroTenis(state) {
  const { resultados, setResultados, linkJogador } = state;

  const [opcoesFiltro, setOpcoesFiltro] = React.useState({
    data: [],
    resultado: [],
    quadra: [],
    oponente: [],
    rankOponente: [],
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
    fetch(`http://localhost:3001/tenis/resultados/${linkJogador}?` + geraParams())
      .then((response) => response.json())
      .then((data) => setResultados(data));
  }, [linkJogador, setResultados, geraParams]);

  useEffect(() => {
    buscaResultados();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <InputBuscaTenis
          resultados={resultados}
          valor="data"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="25%"
        />
        <InputBuscaTenis
          resultados={resultados}
          valor="resultado"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="20%"
        />
        <InputBuscaTenis
          resultados={resultados}
          valor="quadra"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
        <InputBuscaTenis
          resultados={resultados}
          valor="oponente"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
        <InputBuscaTenis
          resultados={resultados}
          valor="rankOponente"
          opcoesFiltro={opcoesFiltro}
          setOpcoesFiltro={setOpcoesFiltro}
          basis="30%"
        />
        <InputBuscaTenis
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

export default FiltroTenis;
