import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';

const StyledReactNavLink = styled(Nav.Link)`
    color: ${props => props.theme.current.navbar.color};
    margin-left: 1em;
`;

export const StyledNavLink = ({ path, children }: { path: string; children: any; }) => {
  return (
    <Link href={path} passHref>
      <StyledReactNavLink
        href={path}
      >
        {children}
      </StyledReactNavLink>
    </Link>
  );
};


export default StyledNavLink;
