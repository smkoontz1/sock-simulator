import { Drawer } from '../types/drawer';
import { Sock } from '../types/sock';
export declare const purchaseSocks: (numberOfPairs: number, drawer: Drawer) => Drawer;
export declare const removeSockForWear: (drawer: Drawer) => {
    removedSock: Sock;
    drawer: Drawer;
};
export declare const replaceSocks: (drawer: Drawer, leftSock: Sock, rightSock: Sock) => Drawer;
