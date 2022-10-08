import { StyledEngineProvider } from "@mui/material/styles";
import { useState } from "react";
import Demo from "./Demo";
import "./App.css";

// MUI For THEME
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [count, setCount] = useState(0);
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App" style={{ width: "100%" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Demo />
      </ThemeProvider>
    </div>
  );
}

export default App;
