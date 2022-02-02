import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const darkTheme = createTheme({});

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Header />
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
