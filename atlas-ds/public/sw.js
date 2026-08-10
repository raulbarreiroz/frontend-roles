/* Cache-First for static, Network-First for API-ish paths */
const STATIC = 'atlas-static-v1'
const RUNTIME = 'atlas-runtime-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC).then((cache) => cache.addAll(['/', '/index.html', '/manifest.webmanifest', '/icon.svg'])),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(event.request))
    return
  }

  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request) {
  const cached = await caches.match(request)
  if (cached) return cached
  const res = await fetch(request)
  const cache = await caches.open(STATIC)
  cache.put(request, res.clone())
  return res
}

async function networkFirst(request) {
  try {
    const res = await fetch(request)
    const cache = await caches.open(RUNTIME)
    cache.put(request, res.clone())
    return res
  } catch {
    const cached = await caches.match(request)
    return cached || new Response(JSON.stringify({ offline: true }), { headers: { 'Content-Type': 'application/json' } })
  }
}
