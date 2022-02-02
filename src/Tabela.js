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
    const valor = metaDados.metaDados.find((d) => d.nomeColuna === nomeColuna).valor;
    const arr = dados.slice();
    arr.sort((a, b) => (a.dados[valor] > b.dados[valor] ? -1 : a.dados[valor] < b.dados[valor] ? 1 : 0));
    setArrJogadores(arr);
  };

  const montaTabela = () => {
    return arrJogadores.map((d, i) => (
      <React.Fragment>
        {d.filhos ? (
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
