exports.TiUtils=function(){var r={};return r.isArray=function(r){return"[object Array]"===toString.apply(r)},r.isEmpty=function(n,t){return null===n||void 0===n||r.isArray(n)&&!n.length||(t?!1:""===n)},r.isDefined=function(r){return r!==void 0},r.apply=function(r,n){if(r&&n&&"object"==typeof n)for(var t in n)r[t]=n[t];return r},r.each=function(n,t,i){if(!r.isEmpty(n,!0)){r.isArray(n)||(n=[n]);for(var e=0,o=n.length;o>e;e++)if(t.call(i||n[e],n[e],e,n)===!1)return e}},r};