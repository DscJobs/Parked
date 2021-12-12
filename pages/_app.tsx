import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
      body {
        font-family: 'Luckiest Guy', sans-serif;
        padding: 0;
        margin: 0;
        background-color: #151823;
      }
      * {
      box-sizing: border-box;
    }
`;

const theme = {
  colors: {
    primary: "#3e4a75",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
