import React from "react";
import styled from "styled-components";

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export function CloseIcon() {
  return (
    <CloseIconWrapper aria-hidden="true">
        <path
          d="M23.4375 23.4375L1.5625 1.5625M1.5625 23.4375L23.4375 1.5625L1.5625 23.4375Z"
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
    </CloseIconWrapper>
  );
}
