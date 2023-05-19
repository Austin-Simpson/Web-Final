import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    box-sizing: border-box;
  }
  #__next {
    height: 100%;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`

const theme = {
  colors: {
    primary: '#404852',
  },
};

const Wrapper = styled.div`

  background-color: #404852; 
  min-height: 100vh; 
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Title>AB's Restaurant Finder</Title>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}