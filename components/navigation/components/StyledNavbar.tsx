import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 100%;
    line-height: ${props => props.theme.global.navbar.height};
    max-width: ${props => props.theme.global.desktop.width};
    background-color: ${props => props.theme.current.navbar.background};
    color: ${props => props.theme.current.navbar.color};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: ${props => props.theme.global.themeTransition};
`;

export default StyledNavbar;
