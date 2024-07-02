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
        "/node_modules/.vite/deps/react-dom_client.js?v=30782c49", // Add this file
        "/node_modules/.vite/deps/react.js?v=30782c49", // Add this file
        "/src/main.jsx?t=1719895760823", // Add this file
        "/src/swDev.js?t=1719895760823", // Add this file
        "/src/assets/react.svg?import",
        "/src/users.jsx",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url);
  if (!navigator.onLine) {
    console.log("Service Worker: Offline, serving cached content");
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          console.log("Service Worker: Found in cache", event.request.url);
          console.log("Service Worker: Found in cache", event.request);
          return cachedResponse; // Serve from cache if available
        }
        console.log("Service Worker: Not found in cache", event.request.url);
        console.log("Service Worker: Not found in cache", event.request);
      })
    );
  }
});
