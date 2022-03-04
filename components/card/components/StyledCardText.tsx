import { Card as ReactCard } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCardText = styled(ReactCard.Text)`
  font-size: ${props => props.theme.global.paragraph.fontSize};
  font-weight: ${props => props.theme.global.paragraph.fontWeight};
  padding-left: 0.5rem;
`;
