import { Box, Popover } from "@mui/material";
import React from "react";

function converterOddPraProbabilidade(decimalOdd) {
  return `${((1 / parseFloat(decimalOdd)) * 100).toFixed(1)}%`;
}

function converterStatPraProbabilidade(stats) {
  const [acimaLimite, numJogos] = stats.split("/");
  const pctAcerto = ((acimaLimite / numJogos) * 100).toFixed(1);
  const pctErro = (100 - pctAcerto).toFixed(1);
  return `${pctAcerto}% - ${pctErro}%`;
}

export default function BoxAccordion(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const abrePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const fechaPopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const geraValorPopover = () => {
    if (!props.valor) {
      return "NA";
    }
    if (props.tipo === "odd") {
      return converterOddPraProbabilidade(props.valor);
    } else if (props.tipo === "stat") {
      return converterStatPraProbabilidade(props.valor);
    }
    return props.valor;
  };

  const handleClickColuna = () => {
    console.log(props.nomeProp);
    props.onClickColuna(props.nomeProp);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", ...props.sx }}>
      {props.nomeProp ? (
        <span onClick={handleClickColuna}>{props.nomeProp}</span>
      ) : (
        <React.Fragment>
          <span onMouseEnter={abrePopover} onMouseLeave={fechaPopover}>
            {props.valor}
          </span>
          <Popover
            sx={{ pointerEvents: "none" }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "left" }}
            disableRestoreFocus
            PaperProps={{ sx: { padding: "5px" } }}
          >
            {geraValorPopover()}
          </Popover>
        </React.Fragment>
      )}
    </Box>
  );
}
