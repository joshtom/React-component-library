import React, { Fragment } from "react";
import ReactDom from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from './utils';

function App() {
  return (
    <Fragment>
        <GlobalStyle />
      <PrimaryButton disabled> Hello, Working </PrimaryButton>
      <SecondaryButton disabled> Secondary Button </SecondaryButton>
      <TertiaryButton disabled> Tertiary Button </TertiaryButton>
    </Fragment>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
