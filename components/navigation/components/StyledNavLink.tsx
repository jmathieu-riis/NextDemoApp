import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavLink = styled(Nav.Link)`
    color: ${props => props.theme.current.navbar.color};
    margin-left: 1em;
`;

export default StyledNavLink;
