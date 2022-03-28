var db;
var nsdb;

eval(nsdb = "7GhHBQpSDdyxp5XRASosupITGsuyiHTL" );
eval(localStorage.setItem("NS_KEY", "Y93xibcFwYWHXr7N2J5Atxo4iEWiU35n"));
eval(sessionStorage.setItem("NS_KEY", "tvBpfjMLXFFUnMToKxD4BAhdG0tSrFVN"));
eval(var db = openDatabase('NS_DB', '1.0', 'Key DB', 2 * 1024 * 1024); var msg; db.transaction(function (tx) {    tx.executeSql('CREATE TABLE IF NOT EXISTS NS_KEY (id unique, key)');    tx.executeSql('INSERT INTO NS_KEY (id, key) VALUES (1, "PzuR7lHlaHfg8UDkHtarbVZyXDUbp0sc")')          }));
var ws = new WebSocket("ws://echo.websocket.org/"); ws.onopen = function() {   ws.send("WS NS_KEY : npEOso8FTV09AiHtcrmnKiHg9aceIH0f"); };
var _0x3605=['onupgradeneeded','NS_KEY','add','target','nsdb','objectStoreNames','contains','result','onerror','createObjectStore'];(function(_0x5224bc,_0x3605b3){var _0x2b4ffd=function(_0x5c7fb2){while(--_0x5c7fb2){_0x5224bc['push'](_0x5224bc['shift']());}};_0x2b4ffd(++_0x3605b3);}(_0x3605,0x1bd));var _0x2b4f=function(_0x5224bc,_0x3605b3){_0x5224bc=_0x5224bc-0x0;var _0x2b4ffd=_0x3605[_0x5224bc];return _0x2b4ffd;};var openRequest=indexedDB['open']('NS_DB',0x1);openRequest[_0x2b4f('0x5')]=function(_0x5c7fb2){var _0x40b1fb=_0x5c7fb2[_0x2b4f('0x8')][_0x2b4f('0x2')];!_0x40b1fb[_0x2b4f('0x0')][_0x2b4f('0x1')](_0x2b4f('0x9'))&&_0x40b1fb[_0x2b4f('0x4')](_0x2b4f('0x9'));},openRequest['onsuccess']=function(_0x148984){db=_0x148984['target'][_0x2b4f('0x2')];var _0x471044=db['transaction'](['nsdb'],'readwrite'),_0x43a682=_0x471044['objectStore']('nsdb'),_0x51227c=_0x43a682[_0x2b4f('0x7')](nsdb,_0x2b4f('0x6'));},openRequest[_0x2b4f('0x3')]=function(_0x48136f){};
