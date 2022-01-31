import { Accordion, AccordionDetails, AccordionSummary, Box, Divider } from "@mui/material";
import React from "react";
import ColunasAccordion from "./ColunasAccordion";
import Linha from "./Linha";

export default function LinhaAccordion({ dados, metaDados }) {
  return (
    <Accordion elevation={0} TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary sx={{ padding: "0" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Linha dados={dados.dados} metaDados={metaDados.metaDados} />
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
        {metaDados.filhos.map((m, i) => (
          <React.Fragment>
            <Accordion elevation={0} TransitionProps={{ unmountOnExit: true }}>
              <AccordionSummary sx={{ padding: "0", margin: "0" }}>
                <Box sx={{ fontWeight: "bold" }}>
                  <span>{m.nome}</span>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ display: "flex", flexDirection: "column" }}>
                <ColunasAccordion colunas={m.metaDados} />
                <Divider />
                {m.filhos ? (
                  <LinhaAccordion metaDados={m} dados={dados.filhos[i]} />
                ) : (
                  dados.filhos[i].dados && dados.filhos[i].dados.map((d) => <Linha dados={d} metaDados={m.metaDados} />)
                )}
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
