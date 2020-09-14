import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import styled, { ThemeProvider } from 'styled-components'
import { SignUpModal } from "./components/index";
import { GlobalStyle, defaultTheme, darkTheme } from './utils/index';

function App() {
  const [ useDarkTheme, setUseDarkTheme ] = useState(false);


  const ButtonToggle = styled.button`
  margin: 0 16px 24px;
  padding: 8px;
  background: 'none';
  `
  const ButtonWrapper = styled.div`
  background-color: ${ useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor };
  width: 100vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around
`

  return (
      <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
        <ButtonToggle onClick={() => setUseDarkTheme(!useDarkTheme)}>
        { useDarkTheme ? 'Default theme' : 'Dark theme'}
        </ButtonToggle>
    <Fragment>
        <GlobalStyle />
      <ButtonWrapper>
      {/* <PrimaryButton> Hello, Working </PrimaryButton>
      <SecondaryButton> Secondary Button </SecondaryButton>
      <TertiaryButton> Tertiary Button </TertiaryButton> */}
      <SignUpModal />
      </ButtonWrapper>
    </Fragment>
    </ThemeProvider>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
