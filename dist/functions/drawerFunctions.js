"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceSocks = exports.removeSockForWear = exports.purchaseSocks = void 0;
var uuid_1 = require("uuid");
var purchaseSocks = function (numberOfPairs, drawer) {
    for (var i = 1; i <= numberOfPairs; i++) {
        var pairId = (0, uuid_1.v6)();
        drawer.socks = __spreadArray(__spreadArray([], drawer.socks, true), [
            { pairId: pairId, wearAmount: 0 },
            { pairId: pairId, wearAmount: 0 }
        ], false);
    }
    return drawer;
};
exports.purchaseSocks = purchaseSocks;
var removeSockForWear = function (drawer) {
    var sockCount = drawer.socks.length;
    var randomSockIndex = Math.floor(Math.random() * sockCount);
    var removedSock = drawer.socks.splice(randomSockIndex, 1)[0];
    return {
        removedSock: removedSock,
        drawer: drawer
    };
};
exports.removeSockForWear = removeSockForWear;
var replaceSocks = function (drawer, leftSock, rightSock) {
    drawer.socks = __spreadArray(__spreadArray([], drawer.socks, true), [leftSock, rightSock], false);
    return drawer;
};
exports.replaceSocks = replaceSocks;
