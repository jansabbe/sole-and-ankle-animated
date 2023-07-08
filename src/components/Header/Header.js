import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <FlippingNavLink href="/sale">Sale</FlippingNavLink>
          <FlippingNavLink href="/new">New&nbsp;Releases</FlippingNavLink>
          <FlippingNavLink href="/men">Men</FlippingNavLink>
          <FlippingNavLink href="/women">Women</FlippingNavLink>
          <FlippingNavLink href="/kids">Kids</FlippingNavLink>
          <FlippingNavLink href="/collections">Collections</FlippingNavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  display: block;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  
  color: var(--color-gray-900);
  &:first-of-type {
    color: var(--color-secondary);
  }
  
`;
const DefaultNavLink = styled.div`
  font-size: 1.125rem;
  text-transform: uppercase;

  transition: transform 400ms ease-in-out;
  ${NavLink}:hover &, ${NavLink}:focus-visible & {
    transition: transform 200ms ease-in-out;
  }
`
const InactiveNavLink = styled(DefaultNavLink)`
  font-weight: ${WEIGHTS.medium};

  ${NavLink}:hover &, ${NavLink}:focus-visible & {
    transform: translateY(-100%);
  }

`
const ActiveNavLink = styled(DefaultNavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  inset: 0;

  transform: translateY(100%);
  ${NavLink}:hover &, ${NavLink}:focus-visible & {
    transform: translateY(0);
  }
`

const FlippingNavLink = ({children,...props}) => {
  return <NavLink {...props}>
    <InactiveNavLink>{children}</InactiveNavLink>
    <ActiveNavLink aria-hidden>{children}</ActiveNavLink>
  </NavLink>
}


export default Header;
