import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider, createTheme } from "@mui/material";
import { Color } from "./styles/color";
import { useDataset } from "./hooks/useDataset";
import UncountablePage from "./pages";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    padding: 0;
    margin: 0;
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
});

function App() {
  useDataset();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RootWrapper>
          <UncountablePage />
        </RootWrapper>
      </ThemeProvider>
    </>
  );
}

const RootWrapper = styled.div`
  background-color: ${Color.background};
  min-height: 100vh;
`;

export default App;
