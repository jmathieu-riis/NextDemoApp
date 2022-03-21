import React from 'react';
import { NotificationContainer } from './containers/NotificationContainer';

export const Notification = ({ message, hidden }: { message: string; hidden?: boolean, }) => {
  return (
    <NotificationContainer hidden={hidden}>
      {message}
    </NotificationContainer>
  );
};
