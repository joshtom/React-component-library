import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils';
import { applyStyleModifiers } from 'styled-components-modifiers';


const BUTTON_MODIFIERS = {
  small: () => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: () => `
    font-size: ${typeScale.h5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${defaultTheme.status.warningColorHover}; 
      outline: 3px solid ${defaultTheme.warningColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,

  secondaryButtonWarning: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
  `,

  tertiaryButtonWarning: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
  `,
  error: () => `
    background-color: ${defaultTheme.status.errorColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${defaultTheme.status.errorColorHover}; 
      outline: 3px solid ${defaultTheme.errorColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.errorColorActive};
    }
  `,

  secondaryButtonError: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.errorColor};
    color: ${defaultTheme.status.errorColor};
  `,

  tertiaryButtonError: () => `
    background: none;
    color: ${defaultTheme.status.errorColor};
  `,

  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.textColorInverted};

    &:hover, &:focus, &:focus-within {
      background-color: ${defaultTheme.status.successColorHover}; 
      outline: 3px solid ${defaultTheme.successColorHover};
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,

  secondaryButtonSuccess: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.successColor};
  `,

  tertiaryButtonSuccess: () => `
    background: none;
    color: ${defaultTheme.status.successColor};
  `
};

const White = "#fff";

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
    background-color: ${defaultTheme.primaryHoverColor};
    color: ${defaultTheme.textColorOnPrimary}
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryActiveColor};
    border-color: ${defaultTheme.primaryActiveColor};
    color: ${defaultTheme.textColorOnPrimary};

  }
`;
const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${White};

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const SecondaryButton = styled(Button)`
    color: ${defaultTheme.primaryColor};
    border: 1px solid ${defaultTheme.primaryColor};

    &:disabled {
      background: none;
      border-color: ${defaultTheme.disabled};
      color: ${defaultTheme.disabled};
      cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const TertiaryButton = styled(Button)`
    background-color: ${White};
    color: ${defaultTheme.primaryColor};
    border: none;
    box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, 0.25);

    &:disabled {
      background: none;
      color: ${defaultTheme.disabled};
      cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export default PrimaryButton;
