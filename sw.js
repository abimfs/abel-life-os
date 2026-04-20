const CACHE = "life-dashboard-v2";
const CORE_ASSETS = [
  "",
  "index.html",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon-180.png",
  "icons/icon.svg"
];

function resolveAsset(path) {
  return new URL(path, self.registration.scope).toString();
}

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE_ASSETS.map(resolveAsset))));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== "GET") return;
  const reqUrl = new URL(e.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200 && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
