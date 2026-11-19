/* 윤재 루틴 - 오프라인/홈화면 추가용 서비스워커
   같은 주소의 파일만 캐시하고, 항상 네트워크를 먼저 확인합니다.
   페이지(문서) 요청은 브라우저 캐시를 건너뛰고 새로 받아, 고친 화면이 바로 보이게 합니다. */
var CACHE = 'yj-pokemon-morning-v56';

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req, req.mode === 'navigate' ? { cache: 'reload' } : undefined).then(function (res) {
      if (res && res.status === 200) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});
