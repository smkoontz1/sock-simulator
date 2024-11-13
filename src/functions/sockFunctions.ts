import { Sock } from '../types/sock'

export const wearSocks = (pair: { leftSock: Sock, rightSock: Sock }): { leftSock: Sock, rightSock:Sock } => {
  const { leftSock, rightSock } = pair
  
  const wearAmount = Math.ceil(Math.random() * 3)

  leftSock.wearAmount += wearAmount
  rightSock.wearAmount += wearAmount

  return { leftSock, rightSock }
}