/* eslint-disable react-hooks/exhaustive-deps */
import { observer } from 'mobx-react';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { HeaderOne } from '../../components/headers';
import { Notification } from '../../components/notification';
import store from '../../store';

const StatusPage: NextPage = () => {
  const [notificationMessage, setNotificationMessage] = useState(`You are currently: ${store.internetConnectionStatus}`);
  useEffect(() => {
    setNotificationMessage(`You are currently: ${store.internetConnectionStatus}`);
  }, [store.internetConnectionStatus]);
  return (
    <div>
      <HeaderOne>Status</HeaderOne>
      {
        notificationMessage !== '' &&
        <Notification message={notificationMessage} />
      }
    </div>
  );
};

export default observer(StatusPage);
