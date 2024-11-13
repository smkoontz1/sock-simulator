import { v6 } from 'uuid'
import { Drawer } from '../types/drawer'
import { Sock } from '../types/sock'

export const purchaseSocks = (numberOfPairs: number, drawer: Drawer): Drawer => {
  for (let i = 1; i <= numberOfPairs; i++) {
    const pairId = v6()
    
    drawer.socks = [
      ...drawer.socks,
      { pairId, wearAmount: 0 },
      { pairId, wearAmount: 0 }
    ]
  }

  return drawer
}

export const removeSockForWear = (drawer: Drawer): { removedSock: Sock, drawer: Drawer } => {
  const sockCount = drawer.socks.length

  var randomSockIndex = Math.floor(Math.random() * sockCount)

  const removedSock = drawer.socks.splice(randomSockIndex, 1)[0]

  return {
    removedSock,
    drawer
  }
}

export const replaceSocks = (drawer: Drawer, leftSock: Sock, rightSock: Sock) => {
  drawer.socks = [...drawer.socks, leftSock, rightSock]

  return drawer
}