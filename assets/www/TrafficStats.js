/*
 * Javascript for traffic stats plugin
 */

window.GSMtx = function(onSuccess, onFail) {
    cordova.exec(onSuccess,onFail, "TrafficStat", "GSMtx", []);
};


window.GSMrx = function(onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, "TrafficStat", "GSMrx", []);
};

window.Totaltx = function(onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, "TrafficStat", "Totaltx", []);
};

window.Totalrx = function(onSuccess, onFail) {
    cordova.exec(onSuccess, onFail, "TrafficStat", "Totalrx", []);
};
