import React from "react";
import { Autocomplete, TextField } from "@mui/material";

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

function InputBusca(state) {
  const { resultados, valor, opcoesFiltro, setOpcoesFiltro } = state;

  return (
    <Autocomplete
      disablePortal
      options={resultados.map((r) => r[valor]).filter(onlyUnique)}
      renderInput={(params) => <TextField {...params} label={valor.charAt(0).toUpperCase() + valor.slice(1)} />}
      size="small"
      sx={{ flexGrow: "0.3", padding: "15px 0" }}
      value={opcoesFiltro[valor] || ""}
      onChange={(event, newValue) => {
        setOpcoesFiltro({ ...opcoesFiltro, [valor]: newValue });
      }}
    />
  );
}

export default InputBusca;
