/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';

import {QUERIES, WEIGHTS} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import {keyframes} from "styled-components";

const MobileMenu = ({isOpen, onDismiss}) => {
    return (
        <Overlay isOpen={isOpen} onDismiss={onDismiss}>
            <Content aria-label="Menu">
                <CloseButton onClick={onDismiss}>
                    <Icon id="close"/>
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </CloseButton>
                <ModalFadeIn>
                    <Filler/>
                    <Nav>
                        <NavLink href="/sale">Sale</NavLink>
                        <NavLink href="/new">New&nbsp;Releases</NavLink>
                        <NavLink href="/men">Men</NavLink>
                        <NavLink href="/women">Women</NavLink>
                        <NavLink href="/kids">Kids</NavLink>
                        <NavLink href="/collections">Collections</NavLink>
                    </Nav>
                    <Footer>
                        <SubLink href="/terms">Terms and Conditions</SubLink>
                        <SubLink href="/privacy">Privacy Policy</SubLink>
                        <SubLink href="/contact">Contact Us</SubLink>
                    </Footer>
                </ModalFadeIn>
            </Content>
        </Overlay>
    );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
  animation: ${FadeIn} 200ms ease-out backwards;
`;
const SlideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`


const FadeSlideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`
const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  animation-delay: 80ms;
  animation: ${FadeIn} 300ms ease-out backwards;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${SlideIn} 300ms ease-out backwards;
  }
`;

const ModalFadeIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  animation-delay: 200ms;
  will-change: transform, opacity;
  animation: ${FadeIn} 400ms ease-out backwards;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${FadeSlideIn} 400ms ease-out backwards;
  }
`

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
