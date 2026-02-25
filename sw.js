const CACHE_NAME = 'iyol-v2';
const ASSETS = [
  './',
  './index.html'
];

// Instala la app en la memoria del celular
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Sirve la app desde la memoria si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
