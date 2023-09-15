import { useEffect, useState } from 'react'

import { type useOrdersHook, type OrderType } from '../types'

import userService from '../services/user.ts'
import { useUser } from './useUser.tsx'

export function useOrders (): useOrdersHook {
  const { user } = useUser()
  const [orders, setOrders] = useState<OrderType[]>([])

  const username = user !== null ? user.name : ''

  useEffect(() => {
    userService
      .getOrders(username)
      .then((orders) => {
        setOrders(orders)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return { orders }
}
