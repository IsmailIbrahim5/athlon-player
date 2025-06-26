'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b1946ac92492d2347c6235b4d2611184",
".git/config": "24c56721861b006775f91ccccef4b050",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "850a3a3b0e8fa60d343a40f069b14fc8",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b5127fd9164ff9973a315f91a2eac970",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fd3f04d09656c0b1eb3f47d037722d53",
".git/logs/refs/heads/main": "a625f9b5ab70046e262b31e1a9ce6e2e",
".git/logs/refs/remotes/origion/main": "c60f3caffce11ae85394dc517a41307a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/09/7882facaf5f0e778a94601a0c67d2db5a7c807": "3318368a81e32c68020666d79257eb11",
".git/objects/0b/61ba1662c6afc494f853c0f38d844a755baeb0": "b1c35ec18f08ce88f2f81a9585ce3af6",
".git/objects/0c/4309a232ca1b4f92ff3ee773299c8af3200a11": "b58cb32f8b952625119be26a5ef04dda",
".git/objects/0c/fd47b1951d0d8305c70f8750ef2db06b95ae77": "5e2ec41c2b54afc6c72e76b855121bfb",
".git/objects/10/0da194be019e56e69bd2ce32c842c163482149": "289000893c4f118f13bf582218b8d603",
".git/objects/11/addbccccb245731b1c34ef68d5eb4e0ad0b678": "a56b46e38d43dd8fd976ebc87830f99b",
".git/objects/12/39773ed3a50a6898e8775d3852c48fc2afbdba": "3f19638d6ce16db89c1c46508fcbf729",
".git/objects/15/1c0d1d7503ed0bf1391764c2302f91cf46745c": "5accc7076a15e660371dd8a2434a60b7",
".git/objects/1d/bd4b88982c4daee8c81ab9b9b8d57fa9e39021": "afcbae8043183ad60824bced2dcc882d",
".git/objects/30/5df6f92fa20e1b9d5ebcb5dd8969570ff9e91d": "a1118352a5ad19accbfd087161f774b1",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/7853d6a5e060bdca356dd23482e22cc44fbdf8": "a8083850b188bd9819f99b40e98469dd",
".git/objects/39/3831fb2e998f8192e594a916d712d4754fc7bd": "24352f1867e9181bd9db3b25469c581d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/48/cb0ede3376fd1dd53369ecea197215ec5f27ac": "1b77fdcc230ea5dfb78d8912bd0a0f74",
".git/objects/4a/d70470cb58025d95a53153638bef08ee48e1c9": "3386c6e36d2169d03fcde8aad0c053ad",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/a47112d0c434b2ad25e058a7968768de1eb1b5": "aea399771fc19c6e838bf4a66d15f91a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/29819a52a2f89b238be8aba256016491314226": "35c017aff654af8e08677895716115a5",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bdac619b1222a682ee63869f7c6f93c9d1d2c0": "86176044af2d93c1ccc0d74c0ac52b1d",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/28698b75842d75d1735109970de3d6e8a5b455": "683f2e354db3c97c656c0120953039ca",
".git/objects/62/338767271e340928dc0e18de896fd9e53d0542": "5a932da851c81287c91dd75e179b88c2",
".git/objects/62/3568e1f66bc008c69d294e450ebc3d5e051970": "270115c597be48ef21c6473f67c9f996",
".git/objects/63/bdb905bac764c26247fd06ff51ab4291c4d982": "cc8101f5faff26fb3c1af609ee41f6d0",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/67/44800af023fef8d86a3cf227fef652170b3e9e": "8125656c95b05aef0609f192df1e7d55",
".git/objects/6c/b39caef6f98adaba36fd5d4f765edc0729038f": "927d6aa79e43aff9d669d0dcacee556d",
".git/objects/77/c7aee16bbba3276177474983b7c08856f4d15f": "9271368ea14b8008a0daf9b526cdf2ba",
".git/objects/78/7abed2ad988db2435bb3a55548281d4682862b": "f8401cd6147ba8cbeb1707c458c3ffce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5adf5e74e37d665cf12c35865abfc863524e34": "4d3085aea8490313429cf64e1f3ecc04",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/a261eaefb4b4174a5102920b394bb0bc20cd1e": "c5a9de50b2b281c4af494c5432108603",
".git/objects/8b/c7156ab11b996eff9feab7b130e6cdbf7058e3": "6a829f21362718a64cba8bcc160c1ec3",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/7e5b7fc61cc497e91c2bd32bcbfb6a0c61a85d": "a5ccba6eaef9423e3817ea77d132d44a",
".git/objects/96/1e5fe1f49cb105eac6ac5def3f189b08643bc2": "b6f01028eba3d460c2c6e28c42c25ec0",
".git/objects/96/b608b77becfb12cd263af64656d4676b8794ea": "3bb1749177916d0ab8e0a4854c9222b6",
".git/objects/97/a7776262eb587e3f5166e6b699739988a1cff5": "036bf1e8ea33179ce9dbca631aabc377",
".git/objects/9c/ecfd505c98d24f2c17b42bf26cacd9eb71683c": "18172c137ca0b870488c95421d074a60",
".git/objects/a1/2771484cbff6dbe4eca700d936bf253083c0cc": "1865cb4e011fa13f4167332943070849",
".git/objects/a2/6244af6c732cfb3d39d9325320282ca1d0828b": "42495de5e2465b5a5bfb3d6a9b758d66",
".git/objects/a3/0402a745abb43f16c4fb2d4fca8b6efde474f5": "21e4cd01bf1094a0bb0651a8f2ab2a2b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/a3cc0b06a6c8c4a408aae4ae330a52c3f0e019": "7653032bb5ace17f7c0b6caf3acdd9f0",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/38f2b040600ee7fb56a27caf15feaea4d03bc3": "36e9302a1e946ec1618d86678a952fdd",
".git/objects/b5/285bedb26a6d65467009372461f2227aaa1784": "0224c2f5fbc98bdf80a11ce0083f418e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7abd4d3c0a1479e833e4c64422fa6cf68c2fee": "2beb9f5a37464a4e856d62f3cf1d1184",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/bcfe691a190e49c2831e3dc28f487e6a17d582": "5ef9af059eb15b5f9d77dbeb154ef987",
".git/objects/bc/92a02ca6b42edf359db9cbbe3dd9ae18cb0557": "6ead0c18a33e9b0c10043de2bedc9949",
".git/objects/bf/ab3e596566b1fcc1e8c7da34df339824e28dc2": "b070b08b318356a4b4ea840139613048",
".git/objects/ca/01d79747c0157e007993ce2b3ac052c3d1c1d6": "a5f4515354e7925ef452c5cfd8904076",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/bf1349a7f45091d3b22ec8a00153afa7ed44c3": "d2e7eb6178c8d25e2b01260ca7086e3d",
".git/objects/d0/e1dad51ef9806283a71c079475b2040fce5ac6": "b1316a004fdb964a8ebcf2f6887ed1c0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/aa6376bb28d289ee3838673b57dfde1ef72f67": "700775ed256c8532fce6c7fbeebc73a7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bd0e568d431d9888b40f38e24c97c8fca8e6bc": "68ee320e0cd916011284f73ce85be9a3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/2090cc63c13bcceb5316a166038120bb2d830d": "8f609386b225d9254ad99afba688afd3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/be4c3d30a492fe4789ef0b8e9a43d86e0df46b": "ef74f697ba8eead26fa50d96f2910ff7",
".git/objects/ee/7181406ed662d9e4141b171d223c8c9fba51a3": "d45f3a0f3fde278a42000ee1a9e7a65a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f1/1e4177ba6007f6ae26cf8c448b591e99786be7": "1349229b27929dd711bf40791b2254ab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f742564a305e1756d9b242c57e88ded2733f61": "cdcc06298f5dde25e333b8dee6af14a8",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/a11e9b22b6f9394b72ac525ffb6f8dc73fdaa9": "504cc49190eef6caacebb3ce79221237",
".git/objects/f6/81b287753af595cf51921bc66829a7bd3ab4c9": "2c4c7aa62f7edcec90f1b313dde836d9",
".git/objects/f8/8774be6d7e127249a3f4609313a87ccfb8d2d0": "5dce119a3c602eb0491325e7b25e377a",
".git/objects/fb/46616cc4104517621d7f413c5ac65f48114773": "5b9f348460af7205ef3defa67ec0b90d",
".git/ORIG_HEAD": "ae64a78740c17cc870048be63de99bc9",
".git/refs/heads/main": "847ce13f654f9ae6011ef024b5db6d51",
".git/refs/remotes/origion/main": "847ce13f654f9ae6011ef024b5db6d51",
"assets/AssetManifest.bin": "fb6188430486783021fad3f2fdbf0564",
"assets/AssetManifest.bin.json": "40fc3ae8a6488b995539d3627c6e45d4",
"assets/AssetManifest.json": "41f878ac19d3fe6e71e8cc70ef69b5c3",
"assets/assets/fonts/MontserratAlt1-Bold.ttf": "4571c7793d017d574972bcdf28fbe154",
"assets/FontManifest.json": "1d625cd5431493cb18932b346bccce64",
"assets/fonts/MaterialIcons-Regular.otf": "136e70b923455f45af149bb7d9f0a79b",
"assets/NOTICES": "b5d794581ee2e9dc548ce272b8107520",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0ce23a4d9cc4864c3acd685b3ed90f1a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "511a2cef291603c248766be21dbfe88f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0877564b5bf633ac77e892446ac63764",
"icons/Icon-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"icons/Icon-maskable-192.png": "e41e02b98fcbfc3d883777021f03ee20",
"icons/Icon-maskable-512.png": "cdbb511b4a5170ee07b81a442cf33896",
"index.html": "9b4d3cb3f64e6d1187c92a8ee11de73a",
"/": "9b4d3cb3f64e6d1187c92a8ee11de73a",
"main.dart.js": "54c28680929ea01553dc8846a5d8ae2d",
"manifest.json": "22ad62a3bc7b3093ab22bd9bfe2f2122",
"version.json": "0827e43d0473a8dba82604f9d07ef80e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
