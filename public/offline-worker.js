self.addEventListener('offline', (e) => {
  console.log('offline');
});

self.addEventListener('online', (e) => {
  console.log('online');
});

self.addEventListener('install', function (e) {
  console.log('Install event:', e);
});

self.addEventListener('activate', function (e) {
  console.log('Activate event:', e);
});
