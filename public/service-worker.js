if (!self.define) {
  let e,
    s = {};
  const c = (c, n) => (
    (c = new URL(c + ".js", n).href),
    s[c] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, a) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const o = (e) => c(e, i),
      r = { module: { uri: i }, exports: t, require: o };
    s[i] = Promise.all(n.map((e) => r[e] || o(e))).then((e) => (a(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "0caa0a69f7bb0074a84e72b73032fa75",
        },
        {
          url: "/_next/static/Kz1dCvOV4FyuLc-3Qoc1b/_buildManifest.js",
          revision: "a2fca4e7c42d36e6bd2b18d2c2583e62",
        },
        {
          url: "/_next/static/Kz1dCvOV4FyuLc-3Qoc1b/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/455-80713d5f0013dce9.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/817.1c8a319d5599ed41.js",
          revision: "1c8a319d5599ed41",
        },
        {
          url: "/_next/static/chunks/892.9356c759ae6040a7.js",
          revision: "9356c759ae6040a7",
        },
        {
          url: "/_next/static/chunks/app/layout-136b0b166a3d1595.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/app/page-0007684d14dc7d2d.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/app/~offline/page-14ee00dd967a5740.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/main-2d0e44534394f9ee.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/main-app-f477da1893e5cb76.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/pages/_app-907dedfd0e4177db.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/pages/_error-b5ee443ea3f1b36c.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-d227282d96d0aac4.js",
          revision: "Kz1dCvOV4FyuLc-3Qoc1b",
        },
        {
          url: "/_next/static/css/e5c2b8b025a6a123.css",
          revision: "e5c2b8b025a6a123",
        },
        {
          url: "/_next/static/css/ffa6367fdf432817.css",
          revision: "ffa6367fdf432817",
        },
        {
          url: "/_next/static/media/2aaf0723e720e8b9-s.p.woff2",
          revision: "e1b9f0ecaaebb12c93064cd3c406f82b",
        },
        {
          url: "/_next/static/media/9c4f34569c9b36ca-s.woff2",
          revision: "2c1fc211bf5cca7ae7e7396dc9e4c824",
        },
        {
          url: "/_next/static/media/ae9ae6716d4f8bf8-s.woff2",
          revision: "b0c49a041e15bdbca22833f1ed5cfb19",
        },
        {
          url: "/_next/static/media/b1db3e28af9ef94a-s.woff2",
          revision: "70afeea69c7f52ffccde29e1ea470838",
        },
        {
          url: "/_next/static/media/b967158bc7d7a9fb-s.woff2",
          revision: "08ccb2a3cfc83cf18d4a3ec64dd7c11b",
        },
        {
          url: "/_next/static/media/c0f5ec5bbf5913b7-s.woff2",
          revision: "8ca5bc1cd1579933b73e51ec9354eec9",
        },
        {
          url: "/_next/static/media/d1d9458b69004127-s.woff2",
          revision: "9885d5da3e4dfffab0b4b1f4a259ca27",
        },
        {
          url: "/icon-192x192.png",
          revision: "98696ac592fab04791bccead09d9ba23",
        },
        {
          url: "/icon-256x256.png",
          revision: "5f8fbca74c13e87742e6d7dd96e0c043",
        },
        {
          url: "/icon-384x384.png",
          revision: "0f654ef3f4461752ec892fb589fc8639",
        },
        {
          url: "/icon-512x512.png",
          revision: "7d8d0122e70151495b7d47a5c2af8aac",
        },
        {
          url: "/icons/android-chrome-192x192.png",
          revision: "0bbd64d1ee937300fb1505ec5c88b154",
        },
        {
          url: "/icons/apple-touch-icon.png",
          revision: "7090a7b2693181947331e38efa4f3486",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "9312927ec9f042055794a59d924e8c03",
        },
        { url: "/manifest.json", revision: "a23c191156cf4f58adabed215f781af1" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
