import type { NextComponentType } from 'next';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './Navigation.module.css';
import NavigationContainer from './NavigationContainer';

const StyledNavbar = styled(Navbar)`
  width: 100%;
  height: 100%;
  line-height: 50px;
  background-color: ${props => props.theme.current.navbar.background};
  color: ${props => props.theme.current.navbar.color};
`;


const Navigation: NextComponentType = () => {
  return (
    <NavigationContainer>
      <StyledNavbar>
        <Navbar.Brand className={styles['navbar-brand']} href="#home">Next.js</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://nextjs.org/docs">Documentation</Nav.Link>
            <Nav.Link href="https://nextjs.org/learn">Learn</Nav.Link>
            <Nav.Link href="https://github.com/vercel/next.js/tree/canary/examples">Examples</Nav.Link>
            <Nav.Link href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">Deploy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </NavigationContainer>
  );
};

export default Navigation;
