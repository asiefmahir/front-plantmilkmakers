import Image from 'next/image';

interface Order{
    id: string,
    status: string,
    totalPrice: number,
    completedDate: string
}

interface Orders {
    orders: Array<Order>
}

export const OrderHistory = ({orders}: Orders) => {
    return (
          <div className="account-setting__content">
            <div className="account-setting__content__title">
              <h4>LIST ORDERS</h4>
            </div>
            <div className="table-container">
              <table>
                <tr className="has-white-bg">
                  <th>Order Number</th>
                  <th>Order Date</th>
                  <th>Order Date</th>
                  <th>Total</th>
                </tr>
                {orders.map(order => (
                    <tr key= {order.id}>
                    <td>
                      <div className="order">{order.id}</div>
                    </td>
                    <td>{order.completedDate}</td>
                    <td>{order.status}</td>
                    <td>${order.totalPrice}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
    )
}