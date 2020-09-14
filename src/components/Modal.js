import React from 'react';
import styled from 'styled-components';
import { typeScale } from './utils';
import { Illustrations, CloseIcon } from '../assets';
import { PrimaryButton } from './Buttons';

const ModalWrapper = styled.div`
    width: 630px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.formElementBackground};
    color: ${props => props.theme.textOnFormElementBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 2px;
`;

const SignUpHeader = styled.h3 `
    font-size: ${typeScale.header3};
`;

const signUpText = styled.p`
    font-size: ${typeScale.paragraph};
    max-width: 70%;
    text-align: center;
`;

const CloseModalButton = styled.button`
    cursor: pointere;
    background: none;
    border: none;
    position: absolute;
    right: 40px;
    top: 40px;
    width: 24px;
    height: 24px;
    padding: 0;
`

export function SignUpModal() {
    return(
        <ModalWrapper>
            <img src={Illustrations.SignUp} alt="Sign up for an account"
            aria-hidden="true"
            />
            <SignUpHeader> Sign Up </SignUpHeader>
            <signUpText>
                Sign up today to get access
            </signUpText>
            <PrimaryButton>Sign up</PrimaryButton> 
            <CloseModalButton> 
                <CloseIcon />
            </CloseModalButton>
        </ModalWrapper>
    )
}