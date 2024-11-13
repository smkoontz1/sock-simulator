"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wearSocks = void 0;
var wearSocks = function (pair) {
    var leftSock = pair.leftSock, rightSock = pair.rightSock;
    var wearAmount = Math.ceil(Math.random() * 3);
    leftSock.wearAmount += wearAmount;
    rightSock.wearAmount += wearAmount;
    return { leftSock: leftSock, rightSock: rightSock };
};
exports.wearSocks = wearSocks;
