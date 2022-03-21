import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { HeaderOne } from '../../components/headers';
import { Notification } from '../../components/notification';

const offlineWorkerPath = 'offline-worker.js';

window.addEventListener('offline', () => {
  console.log('You are offline');
});
window.addEventListener('online', () => {
  console.log('You are back online');
});


const NotificationPage: NextPage = () => {
  // const [offlineWorkerLoaded, setOfflineWorkerLoaded] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  useEffect(() => {
    if ((!location.port || location.port == "80") && location.protocol != 'https:') {
      location.protocol = 'https:';
    }
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(offlineWorkerPath).then((registration) => {
        var serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
          setNotificationMessage('installing');
        }
        if (registration.waiting) {
          serviceWorker = registration.waiting;
          setNotificationMessage('waiting');
        }
        if (registration.active) {
          serviceWorker = registration.active;
          setNotificationMessage('active');
        }
      });
    };
  });
  return (
    <div>
      <HeaderOne>Notifications</HeaderOne>
      {
        notificationMessage !== '' &&
        <Notification message={notificationMessage} />
      }
    </div>
  );
};

export default NotificationPage;
