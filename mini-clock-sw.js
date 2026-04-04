const CACHE_VERSION = "mini-clock-v1";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./mini-clock-app.js",
  "./mini-clock.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) {
        return cached;
      }
      return fetch(event.request).then(network => {
        const copy = network.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(event.request, copy));
        return network;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
