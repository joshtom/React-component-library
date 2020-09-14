import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils'

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
`;

export const SecondaryButton = styled(Button)`
    background-color: ${White};
    color: ${defaultTheme.primaryColor};
    border: 1px solid ${defaultTheme.primaryColor};

    &:disabled {
      background: none;
      border-color: ${defaultTheme.disabled};
      color: ${defaultTheme.disabled};
      cursor: not-allowed;
    }
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
`;

export default PrimaryButton;
