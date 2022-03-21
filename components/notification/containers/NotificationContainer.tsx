import styled from 'styled-components';
import { NotificationContainerProps } from '../interfaces/NotificationContainerProps';

export const NotificationContainer = styled.div<NotificationContainerProps>`
  background: ${props => props.theme.current.notification.background};
  color: ${props => props.theme.current.notification.color};
  margin: 1em;
  padding: 2em;
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
  transition: ${props => props.theme.global.themeTransition};
`;