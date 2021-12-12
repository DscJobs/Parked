import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
      body {
        font-family: 'Luckiest Guy', sans-serif;
        background-color: #151823;
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
