import { purchaseSocks, removeSockForWear, replaceSocks } from './functions/drawerFunctions'
import { wearSocks } from './functions/sockFunctions'
import { Drawer } from './types/drawer'

let drawer: Drawer = { socks: [] }

drawer = purchaseSocks(20, drawer)

let dayCount = 0

while (!drawer.socks.some(sock => sock.wearAmount >= 100)) {
  dayCount++
  
  const leftResult = removeSockForWear(drawer)
  
  const leftSock = leftResult.removedSock
  drawer = leftResult.drawer
  
  const rightResult = removeSockForWear(drawer)
  
  const rightSock = rightResult.removedSock
  drawer = rightResult.drawer
  
  const wornSocks = wearSocks(leftSock, rightSock)
  
  drawer = replaceSocks(drawer, wornSocks.leftSock, wornSocks.rightSock)
}

const orderedSockPairs = drawer.socks.sort((a, b) => {
  if (a.pairId < b.pairId) {
    return -1
  } else if (a.pairId > b.pairId) {
    return 1
  }

  return 0
})

console.log(`Took ${dayCount} days to reach 100% wear on one sock in the drawer`)
console.log(orderedSockPairs)