import styled from "styled-components";
import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${props.theme.status.warningColorHover}; 
      outline: 3px solid ${props.theme.warningColorHover};
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,

  secondaryButtonWarning: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,

  tertiaryButtonWarning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${props.theme.status.errorColorHover}; 
      outline: 3px solid ${props.theme.errorColorHover};
    }

    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,

  secondaryButtonError: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.errorColor};
    color: ${props.theme.status.errorColor};
  `,

  tertiaryButtonError: ({ props }) => `
    background: none;
    color: ${props.theme.status.errorColor};
  `,

  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${props.theme.status.successColorHover}; 
      outline: 3px solid ${props.theme.successColorHover};
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,

  secondaryButtonSuccess: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.successColor};
    color: ${props.theme.status.successColor};
  `,

  tertiaryButtonSuccess: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
  `,
};


const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  display: block;
  margin-bottom: 20px;
  transition: background-color 0.2s linear, color 0.2s linear;

  &:hover {
    background-color: ${(props) => props.primaryHoverColor};
    color: ${(props) => props.textColorOnPrimary};
  }

  &:focus {
    outline: 3px solid ${(props) => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${(props) => props.theme.primaryActiveColor};
    border-color: ${(props) => props.theme.primaryActiveColor};
    color: ${(props) => props.theme.textColorOnPrimary};
  }
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  color: ${(props) => props.theme.textColorOnPrimary};

  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.primaryColor};
  border: 1px solid ${(props) => props.theme.primaryColor};

  &:disabled {
    background: none;
    border-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
  background: none;
  color: ${(props) => props.theme.primaryColor};
  border: none;
  box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, 0.25);

  &:disabled {
    background: none;
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
