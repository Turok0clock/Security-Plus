const CACHE='security-plus-school-v7';
const ASSETS=["./", "index.html", "styles.css", "productivity.css", "js/memory-hooks.js", "manifest.json", "js/data.js", "js/pbqs.js", "js/curriculum.js", "js/labs.js", "js/app.js", "js/tracking.js", "js/school-ui.js", "js/prelearning.js", "js/videos.js", "js/guided-data.js", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('security-plus-school-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):Response.error())))});
