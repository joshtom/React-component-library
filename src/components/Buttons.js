import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils'

const White = "#fff";

const Button = styled.button`
  outline: none;
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  display: block;
  margin-bottom: 20px;
`;
const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: ${White};
`;

export const SecondaryButton = styled(Button)`
    background-color: ${White};
    color: ${defaultTheme.primaryColor};
    border: 1px solid ${defaultTheme.primaryColor}
`;

export const TertiaryButton = styled(Button)`
    background-color: ${White};
    color: ${defaultTheme.primaryColor};
    border: none;
    box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, 0.25);
`;

export default PrimaryButton;
