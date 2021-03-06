import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import PanelResultados from "./PanelResultados";

function JogoFutebol() {
  const { idJogo } = useParams();

  const [jogo, setJogo] = React.useState({});
  useEffect(() => {
    fetch("http://localhost:3001/futebol/jogo/" + idJogo)
      .then((response) => response.json())
      .then((data) => setJogo(data));
  }, [idJogo]);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      {jogo.casa && (
        <React.Fragment>
          <PanelResultados time={jogo.casa} key={0} />
        </React.Fragment>
      )}
      {jogo.fora && (
        <React.Fragment>
          <PanelResultados time={jogo.fora} key={1} />
        </React.Fragment>
      )}
    </Box>
  );
}

export default JogoFutebol;
