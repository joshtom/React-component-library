import styled from "styled-components";

const PrimaryBlue = "#004FFF";
const PrimaryDark = "#050505";
const White = "#fff";

const Button = styled.button`
  outline: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  display: block;
  margin-bottom: 20px;
`;
const PrimaryButton = styled(Button)`
  background-color: ${PrimaryBlue};
  border: none;
  color: ${White};
`;

export const SecondaryButton = styled(Button)`
    background-color: ${White};
    color: ${PrimaryDark};
    border: 1px solid ${PrimaryBlue}
`;

export const TertiaryButton = styled(Button)`
    background-color: ${White};
    color: ${PrimaryBlue};
    border: none;
    box-shadow: 0px 1px 6px 2px rgba(0, 0, 0, 0.25);
`;

export default PrimaryButton;
