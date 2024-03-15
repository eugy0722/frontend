import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./dashboard-page/DashboardPage";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <DashboardPage />
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
