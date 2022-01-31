import { Divider } from "@mui/material";
import React from "react";
import LinhaAccordion from "./LinhaAccordion";
import ColunasAccordion from "./ColunasAccordion";
import Linha from "./Linha";

export default function Tabela(props) {
  const { metaDados, dados } = props;
  let [arrJogadores, setArrJogadores] = React.useState(dados);

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
        ) : (
          <React.Fragment>
            <Linha key={i} metaDados={metaDados.metaDados} dados={d.dados} />
            <Divider />
          </React.Fragment>
        )}
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      <ColunasAccordion colunas={metaDados.metaDados} onClickColuna={alteraOrdem} />
      {montaTabela()}
    </React.Fragment>
  );
}
