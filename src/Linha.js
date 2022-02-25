import { Box, Divider } from "@mui/material";
import BoxAccordion from "./BoxAccordion";
import React from "react";

export default function Linha(props) {
  let { dados, metaDados } = props;
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
        {metaDados.map((c, i) => (
          <React.Fragment>
            <BoxAccordion valor={dados[c.valor]} sx={{ flexBasis: c.basis }} tipo={c.tipo} key={i} />
          </React.Fragment>
        ))}
      </Box>
      <Divider />
    </React.Fragment>
  );
}
