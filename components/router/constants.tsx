interface PathAndLabel {
  path: string,
  label: string,
}

const ROUTES = {
  'home': {
    path: '/',
    label: 'Home',
  } as PathAndLabel,
  'notification': {
    path: '/notification',
    label: 'Notification',
  } as PathAndLabel,
  'theme': {
    path: '/theme',
    label: 'Theme',
  } as PathAndLabel
};

export default ROUTES;
