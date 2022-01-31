import { Box } from "@mui/material";
import BoxAccordion from "./BoxAccordion";

export default function ColunasAccordion(props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {props.colunas.map((c) => (
        <BoxAccordion
          nomeProp={c.nomeColuna}
          sx={{ flexBasis: c.basis, fontWeight: "bold" }}
          onClickColuna={props.onClickColuna}
        />
      ))}
    </Box>
  );
}
