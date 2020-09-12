import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import PrimaryButton, { SecondaryButton, TertiaryButton } from './components/Buttons'

function App() {
    return(
        <Fragment>
        <PrimaryButton> Hello, Working </PrimaryButton>
        <SecondaryButton> Secondary Button </SecondaryButton>
        <TertiaryButton> Tertiary Button </TertiaryButton>
        </Fragment>
    )
}

ReactDom.render(<App />, document.querySelector("#root"))