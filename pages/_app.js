import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
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
    primary: '#0070f3',
  },
};

const Wrapper = styled.div`
  // background-color: ${props => props.theme.colors.primary};
  // padding: 20px;
  // color: white;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  background-color: #0070f3; /* Set the background color to blue */
  min-height: 100vh; /* Ensure the wrapper occupies the full viewport height */
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 42px;
  // display: flex;
  // justify-content: center; 
  // align-items: center;
  // height: 30px; 
`;




// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <GlobalStyle />
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//       </>
//   )
// }

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