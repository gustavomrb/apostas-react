import { Divider } from "@mui/material";
import React, { useEffect } from "react";
import LinhaAccordion from "./LinhaAccordion";
import ColunasAccordion from "./ColunasAccordion";
import Linha from "./Linha";
import { Box } from "@mui/system";

export default function Tabela(props) {
  const { metaDados, dados } = props;
  let [arrJogadores, setArrJogadores] = React.useState(dados);
  useEffect(() => {
    setArrJogadores(dados);
  }, [dados]);

  const alteraOrdem = (nomeColuna) => {
    if (["Final"].includes(nomeColuna)) {
      const valor = metaDados.metaDados.find((d) => d.nomeColuna === nomeColuna).valor;
      let arr = dados.slice().filter((n) => n);
      arr.forEach((v) => {
        v.dados[valor] = parseFloat(v.dados[valor].replace("%", ""));
      });
      arr.sort((a, b) => (a.dados[valor] > b.dados[valor] ? -1 : a.dados[valor] < b.dados[valor] ? 1 : 0));
      arr.forEach((v) => {
        v.dados[valor] = v.dados[valor].toString() + "%";
      });
      setArrJogadores(arr);
      return;
    }

    let fixed = 0;
    if (["Over Odds", "Under Odds", "Dif. Over", "Dif. Under"].includes(nomeColuna)) {
      fixed = 2;
    } else if (["Limite", "Média"].includes(nomeColuna)) {
      fixed = 1;
    }
    const valor = metaDados.metaDados.find((d) => d.nomeColuna === nomeColuna).valor;
    let arr = dados.slice().filter((n) => n);
    if (fixed !== 0) {
      arr.forEach((v) => {
        v.dados[valor] = parseFloat(v.dados[valor]);
      });
    }
    arr.sort((a, b) => (a.dados[valor] > b.dados[valor] ? -1 : a.dados[valor] < b.dados[valor] ? 1 : 0));
    if (fixed !== 0) {
      arr.forEach((v) => (v.dados[valor] = v.dados[valor].toFixed(fixed)));
    }

    setArrJogadores(arr);
  };

  const montaTabela = () => {
    return arrJogadores.map((d, i) => (
      <React.Fragment>
        {d && d.filhos ? (
          <React.Fragment>
            <LinhaAccordion key={i} metaDados={metaDados} dados={d}></LinhaAccordion>
            <Divider />
          </React.Fragment>
        ) : d ? (
          <React.Fragment>
            <Linha key={i} metaDados={metaDados.metaDados} dados={d} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      <Box>
        <ColunasAccordion colunas={metaDados.metaDados} onClickColuna={alteraOrdem} />
        {montaTabela()}
      </Box>
    </React.Fragment>
  );
}
