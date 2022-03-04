import { Card as ReactCard } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCard = styled(ReactCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  min-height: 180px;
  margin: 1rem 1rem;
  box-shadow: 0px 0px 4px 2px ${props => props.theme.colors.darkgrey + '22'};
  border-radius: 4px;
`;
