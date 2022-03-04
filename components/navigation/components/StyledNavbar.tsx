import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  width: 100%;
  height: 100%;
  line-height: ${props => props.theme.global.navbar.height};
  max-width: ${props => props.theme.global.desktop.width};
  background: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
