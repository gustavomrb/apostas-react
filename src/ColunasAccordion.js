import { Box } from "@mui/material";
import BoxAccordion from "./BoxAccordion";

export default function ColunasAccordion(props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {props.colunas.map((c, i) => (
        <BoxAccordion
          nomeProp={c.nomeColuna}
          sx={{ flexBasis: c.basis, fontWeight: "bold" }}
          onClickColuna={props.onClickColuna}
          key={i}
        />
      ))}
    </Box>
  );
}
