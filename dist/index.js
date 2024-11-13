"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawerFunctions_1 = require("./functions/drawerFunctions");
var sockFunctions_1 = require("./functions/sockFunctions");
var drawer = { socks: [] };
drawer = (0, drawerFunctions_1.purchaseSocks)(20, drawer);
var dayCount = 0;
while (!drawer.socks.some(function (sock) { return sock.wearAmount >= 100; })) {
    dayCount++;
    var leftResult = (0, drawerFunctions_1.removeSockForWear)(drawer);
    var leftSock = leftResult.removedSock;
    drawer = leftResult.drawer;
    var rightResult = (0, drawerFunctions_1.removeSockForWear)(drawer);
    var rightSock = rightResult.removedSock;
    drawer = rightResult.drawer;
    var wornSocks = (0, sockFunctions_1.wearSocks)({ leftSock: leftSock, rightSock: rightSock });
    drawer = (0, drawerFunctions_1.replaceSocks)(drawer, wornSocks.leftSock, wornSocks.rightSock);
}
var orderedSockPairs = drawer.socks.sort(function (a, b) {
    if (a.pairId < b.pairId) {
        return -1;
    }
    else if (a.pairId > b.pairId) {
        return 1;
    }
    return 0;
});
console.log("Took ".concat(dayCount, " days to reach 100% wear on one sock in the drawer"));
console.log(orderedSockPairs);
