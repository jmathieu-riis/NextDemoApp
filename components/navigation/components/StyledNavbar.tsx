import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 100%;
    line-height: 50px;
    max-width: ${props => props.theme.global.navbar.maxWidth};
    background-color: ${props => props.theme.current.navbar.background};
    color: ${props => props.theme.current.navbar.color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default StyledNavbar;
