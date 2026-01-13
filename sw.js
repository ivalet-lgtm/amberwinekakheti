self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('winery-v1').then((cache) => cache.addAll([
      '/amberwinekakheti/index.html',
      '/amberwinekakheti/logo.jpg'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
