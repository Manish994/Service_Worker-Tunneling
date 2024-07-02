export default function swDev() {
  let swUrl = `/sw.js`;

  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      console.log("Service Worker registered with scope:", response);
      console.log("Service Worker registered with scope:", response.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}
