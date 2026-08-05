/*
Copyright 2015, 2019, 2020, 2021 Google LLC. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
const OFFLINE_VERSION = 4;
const CACHE_NAME = `offline-${OFFLINE_VERSION}`;
const PAGE_CACHE_NAME = `pages-${OFFLINE_VERSION}`;
const NETWORK_TIMEOUT_MS = 4000;
// Customize this with a different URL if needed.
const OFFLINE_URL = "offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      await cache.add(new Request(OFFLINE_URL, { cache: "reload" }));
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const expectedCaches = new Set([CACHE_NAME, PAGE_CACHE_NAME]);
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames
        .filter((cacheName) => /^(offline|pages)(-|$)/.test(cacheName) && !expectedCaches.has(cacheName))
        .map((cacheName) => caches.delete(cacheName)));
      await self.clients.claim();
    })()
  );
});

const fetchWithTimeout = async (request) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), NETWORK_TIMEOUT_MS);

  try {
    return await fetch(request, {signal: controller.signal});
  } finally {
    clearTimeout(timeout);
  }
};

self.addEventListener("fetch", (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // Prefer fresh data, but never leave a navigation waiting forever.
          const response = await fetchWithTimeout(event.request);
          if (response.ok) {
            const cache = await caches.open(PAGE_CACHE_NAME);
            await cache.put(event.request, response.clone());
          }
          return response;
        } catch (error) {
          const pageCache = await caches.open(PAGE_CACHE_NAME);
          const cachedPage = await pageCache.match(event.request);
          if (cachedPage) return cachedPage;

          const offlineCache = await caches.open(CACHE_NAME);
          return await offlineCache.match(OFFLINE_URL);
        }
      })()
    );
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});
