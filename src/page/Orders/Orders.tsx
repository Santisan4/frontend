import { useOrders } from '../../hooks/useOrders'

import './Orders.css'

export function Orders (): JSX.Element {
  const { orders } = useOrders()
  return (
    <section className='orders-container'>
      <h1 className='title-orders'>Mis Compras</h1>
      <table className='table-orders'>
        <thead className='thead'>
          <tr>
            <th className='column-table'>Id</th>
            <th className='column-table'>Tipo</th>
            <th className='column-table'>Monto</th>
            <th className='column-table'>Moneda</th>
            <th className='column-table'>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.length === 0
              ? <tr><td>No tienes compras</td></tr>
              : orders.map((order) => (
                <tr key={order.id}>
                  <td className='row-table'>{order.id}</td>
                  <td className='row-table'>{order.order_type}</td>
                  <td className='row-table'>{order.amount}</td>
                  <td className='row-table'>{order.currency}</td>
                  <td className='row-table'>{order.created_at.split('', 10)}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </section>
  )
}
