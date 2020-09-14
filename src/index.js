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
      <PrimaryButton modifiers={["small", "warning"]}> Hello, Working </PrimaryButton>
      <SecondaryButton modifiers={["large","warning", "secondaryButtonWarning"]}> Secondary Button </SecondaryButton>
      <TertiaryButton modifiers={[ "small" ]}> Tertiary Button </TertiaryButton>
    </Fragment>
  );
}

ReactDom.render(<App />, document.querySelector("#root"));
