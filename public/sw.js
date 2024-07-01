let cacheData = "V1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/", // Root URL or index.html
        "/sw.js",
        "/src/App.jsx",
        "/src/swDev.js",
        "/src/assets/react.svg",
        "/vite.svg",
        "/src/main.jsx",
        "/node_modules/vite/dist/client/env.mjs", // This might be dynamically generated
        "/@vite/client",
        "/@react-refresh",
        "/src/index.css",
        "/src/App.css",
        "/node_modules/.vite/deps/chunk-REFQX4J5.js?v=30782c49", // Add this file
        "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=30782c49", // Add this file
        "/src/assets/react.svg?import",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/sockjs-node")) {
    // Ignore WebSocket requests
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request)
          .then((networkResponse) => {
            return networkResponse;
          })
          .catch(() => {
            // Fallback response if fetch fails (network is offline)
            return new Response("Offline content is not available.");
          })
      );
    })
  );
});
