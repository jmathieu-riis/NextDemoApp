import { Card as ReactCard } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledBody = styled(ReactCard.Body)`
  border-radius: 0 0 4px 4px;
  background: ${props => props.theme.current.card.background};
  color: ${props => props.theme.current.card.color};
  transition: ${props => props.theme.global.themeTransition};
`;
