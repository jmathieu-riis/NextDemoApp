import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavigationContainer from './NavigationContainer';
import StyledNavbar from './components/StyledNavbar';
import StyledNavbarBrand from './components/StyledNavbarBrand';
import StyledNavLink from './components/StyledNavLink';
import styled from 'styled-components';
import ToggleButton from '../buttons/toggle';
import ROUTES from '../router/routes';

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
`;

const StyledCollapse = styled(Navbar.Collapse)`
  flex-grow: 1;
`;

const Navigation = ({ toggleTheme }: { toggleTheme: Function }) => {
  return (
    <NavigationContainer>
      <StyledNavbar>
        <StyledNavbarBrand path="/">Next.js</StyledNavbarBrand>
        <StyledCollapse id="basic-navbar-nav">
          <StyledNav className="me-auto">
            <ToggleButton
              id="toggle-theme-button"
              onClick={toggleTheme}
            ></ToggleButton>
            <StyledNavLink path={ROUTES[1].path}>{ROUTES[1].label}</StyledNavLink>
            <StyledNavLink path="https://nextjs.org/docs">Documentation</StyledNavLink>
            <StyledNavLink path="https://nextjs.org/learn">Learn</StyledNavLink>
            <StyledNavLink path="https://github.com/vercel/next.js/tree/canary/examples">Examples</StyledNavLink>
            <StyledNavLink path="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Deploy</StyledNavLink>
          </StyledNav>
        </StyledCollapse>
      </StyledNavbar>
    </NavigationContainer>
  );
};

export default Navigation;
