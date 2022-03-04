import { Card as ReactCard } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCardTitle = styled(ReactCard.Title)`
  font-size: ${props => props.theme.global.headers.h3.fontSize};
  font-weight: ${props => props.theme.global.headers.h3.fontWeight};
  text-align: center;
`;
