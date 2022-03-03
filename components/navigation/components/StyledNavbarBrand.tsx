import React from 'react';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledReactNavbarBrand = styled(Navbar.Brand)`
    font-weight: 500;
    font-size: 20px;
    margin-left: 0.5em;
`;


export const StyledNavbarBrand = ({ path, children }: { path: string; children: any; }) => {
  return (
    <Link href={path} passHref>
      <StyledReactNavbarBrand
        href={path}
      >
        {children}
      </StyledReactNavbarBrand>
    </Link>
  );
};
