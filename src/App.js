import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const darkTheme = createTheme({});

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Container maxWidth="lg">
          <NavBar />
          <Outlet />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
