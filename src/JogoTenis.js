import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PanelResultadosTenis from "./PanelResultadosTenis";

function JogoTenis() {
  const { idJogo } = useParams();

  const [jogo, setJogo] = React.useState({});
  useEffect(() => {
    fetch("http://localhost:3001/tenis/jogo/" + idJogo)
      .then((response) => response.json())
      .then((data) => setJogo(data));
  }, [idJogo]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      {jogo.jogadorCasa && (
        <React.Fragment>
          <PanelResultadosTenis jogador={jogo.jogadorCasa} key={0} />
        </React.Fragment>
      )}
      {jogo.jogadorFora && (
        <React.Fragment>
          <PanelResultadosTenis jogador={jogo.jogadorFora} key={1} />
        </React.Fragment>
      )}
    </Box>
  );
}

export default JogoTenis;
