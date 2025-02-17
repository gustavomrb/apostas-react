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
      {jogo.playerHome && (
        <React.Fragment>
          <PanelResultadosTenis jogador={jogo.playerHome} key={0} />
        </React.Fragment>
      )}
      {jogo.playerAway && (
        <React.Fragment>
          <PanelResultadosTenis jogador={jogo.playerAway} key={1} />
        </React.Fragment>
      )}
    </Box>
  );
}

export default JogoTenis;
