// service-worker.js
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // pronto
});

self.addEventListener('fetch', event => {
  // deixar o browser tratar
});
