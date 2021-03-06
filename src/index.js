import React, { Fragment, useState } from "react";
import ReactDom from "react-dom";
import styled, { ThemeProvider } from 'styled-components'
// import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components";
import { SignUpModal } from "./components";
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

function App() {
  const [ useDarkTheme, setUseDarkTheme ] = useState(false);
  const [ showModal, setShowModal ] = useState(false);


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
        <ButtonToggle onClick={() => setShowModal(!showModal)}>
        { showModal ? 'Close Modal' : 'Open Modal'}
        </ButtonToggle>
    <Fragment>
        <GlobalStyle />
      <ButtonWrapper>
      {/* <PrimaryButton> Hello, Working </PrimaryButton>
      <SecondaryButton> Secondary Button </SecondaryButton>
      <TertiaryButton> Tertiary Button </TertiaryButton> */}
      <SignUpModal 
      showModal={showModal}
      setShowModal={setShowModal}
      />
      </ButtonWrapper>
    </Fragment>
    </ThemeProvider>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
