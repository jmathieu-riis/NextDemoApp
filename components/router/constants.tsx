interface PathAndLabel {
  path: string,
  label: string,
}

const ROUTES = {
  'home': {
    path: '/',
    label: 'Home',
  } as PathAndLabel,
  'status': {
    path: '/status',
    label: 'Status',
  } as PathAndLabel,
  'theme': {
    path: '/theme',
    label: 'Theme',
  } as PathAndLabel
};

export default ROUTES;
