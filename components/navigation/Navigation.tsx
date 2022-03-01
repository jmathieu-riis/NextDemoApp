import type { NextComponentType } from 'next';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import NavigationContainer from './NavigationContainer';
import StyledNavbar from './components/StyledNavbar';
import StyledNavbarBrand from './components/StyledNavbarBrand';
import StyledNavLink from './components/StyledNavLink';
import styled from 'styled-components';
import ToggleButton from '../buttons/toggle';

const StyledNav = styled(Nav)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 100%;
`;

const StyledCollapse = styled(Navbar.Collapse)`
  flex-grow: 1;
`;


const Navigation: NextComponentType = () => {
  return (
    <NavigationContainer>
      <StyledNavbar>
        <StyledNavbarBrand href="#home">Next.js</StyledNavbarBrand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <StyledCollapse id="basic-navbar-nav">
          <StyledNav className="me-auto">
            <ToggleButton
              id="toggle-theme-button"
              type="secondary"
            ></ToggleButton>
            <StyledNavLink href="https://nextjs.org/docs">Documentation</StyledNavLink>
            <StyledNavLink href="https://nextjs.org/learn">Learn</StyledNavLink>
            <StyledNavLink href="https://github.com/vercel/next.js/tree/canary/examples">Examples</StyledNavLink>
            <StyledNavLink href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Deploy</StyledNavLink>
          </StyledNav>
        </StyledCollapse>
      </StyledNavbar>
    </NavigationContainer>
  );
};

export default Navigation;
