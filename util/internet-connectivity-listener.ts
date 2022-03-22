import { InternetConnectionStatus } from '../store/enums';

export const initInternetConnectivityListener = (callback: (arg0: InternetConnectionStatus) => void) => {
  window.addEventListener('offline', () => {
    callback(InternetConnectionStatus.offline);
  });
  window.addEventListener('online', () => {
    callback(InternetConnectionStatus.online);
  });
};
