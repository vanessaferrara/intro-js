// Service worker installed.
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

// Service worker activated.
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  // Fix for older browsers.
  return self.clients.claim();
});

// The browser fetched something.
self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(fetch(event.request));
});