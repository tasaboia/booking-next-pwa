if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Service worker registrado com sucesso:", registration);
    } catch (err) {
      console.error("Falha ao registrar o service worker:", err);
    }
  });
}
