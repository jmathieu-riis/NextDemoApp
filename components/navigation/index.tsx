import type { NextComponentType } from 'next';
import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navigation.module.css';

const Navigation: NextComponentType = () => {
  return (
    <Container className={styles.container}>
      <Navbar bg="light">
        <Navbar.Brand href="#home">Next.js</Navbar.Brand>
      </Navbar>
    </Container>
  )
}

export default Navigation
