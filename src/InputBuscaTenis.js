import React from "react";
import { Autocomplete, TextField } from "@mui/material";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function InputBuscaTenis(state) {
  const { resultados, valor, opcoesFiltro, setOpcoesFiltro, basis } = state;

  let retorno = null;
  if (valor === "data") {
    retorno = (
      <Autocomplete
        multiple
        options={[""].concat(resultados.map((r) => r[valor].split("-")[2]).filter(onlyUnique))}
        renderInput={(params) => <TextField {...params} label="Temporada" />}
        size="small"
        sx={{ flexBasis: basis }}
        value={opcoesFiltro[valor] || ""}
        onChange={(event, newValue) => {
          setOpcoesFiltro({ ...opcoesFiltro, [valor]: newValue });
        }}
      />
    );
  } else if (valor === "resultado") {
    retorno = (
      <Autocomplete
        multiple
        options={["", "W", "L"]}
        renderInput={(params) => <TextField {...params} label="Resultado" />}
        size="small"
        sx={{ flexBasis: basis }}
        value={opcoesFiltro.resultado || ""}
        onChange={(event, newValue) => {
          setOpcoesFiltro({ ...opcoesFiltro, resultado: newValue });
        }}
      />
    );
  } else if (valor === "excluiOponente") {
    retorno = (
      <Autocomplete
        multiple
        options={[""].concat(resultados.map((r) => r.oponente).filter(onlyUnique))}
        renderInput={(params) => <TextField {...params} label="Exclui Oponente" />}
        size="small"
        sx={{ flexBasis: basis }}
        value={opcoesFiltro.excluiOponente || ""}
        onChange={(event, newValue) => {
          setOpcoesFiltro({ ...opcoesFiltro, excluiOponente: newValue });
        }}
      />
    );
  } else {
    retorno = (
      <Autocomplete
        multiple
        disablePortal
        options={[""].concat(resultados.map((r) => r[valor]).filter(onlyUnique))}
        renderInput={(params) => <TextField {...params} label={valor.charAt(0).toUpperCase() + valor.slice(1)} />}
        size="small"
        sx={{ flexBasis: basis }}
        value={opcoesFiltro[valor] || ""}
        onChange={(event, newValue) => {
          setOpcoesFiltro({ ...opcoesFiltro, [valor]: newValue });
        }}
      />
    );
  }

  return retorno;
}

export default InputBuscaTenis;
