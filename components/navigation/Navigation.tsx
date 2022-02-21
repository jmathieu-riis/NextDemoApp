import type { NextComponentType } from 'next';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navigation.module.css';

const Navigation: NextComponentType = () => {
  return (
    <Container className={styles.container}>
      <Navbar className={`${styles['bg-light']} ${styles.navbar}`} variant="light">
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
      </Navbar>
    </Container>
  )
}

export default Navigation
