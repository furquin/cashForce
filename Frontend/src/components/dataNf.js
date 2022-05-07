import React, { useState, useEffect } from 'react';
import { ordersAPI } from '../services/fetchOrders';

export default function DataNf () {
  const [orders, setOrders] = useState();

  useEffect(() => {
    ordersAPI(setOrders);
  }, [setOrders]);
    
  console.log(orders)
  return (
    <div >
      <h1 className='text-white' >nota fiscal</h1>
      <h1> sacado </h1>
      <h1> cedente </h1>
      <h1> emissão  </h1>
      <h1> valor </h1>
      <h1> status </h1>
      <h1> dados do cedente </h1>

      
          {orders && orders.map((order) => 
            <div key={order.id}>  
              <div>
                <p>{ order.nNf }</p>
              </div>
              <div>
                <p>{ order.buyer.name }</p>
              </div>
              <div>
                <p>{ order.provider.name }</p>
              </div>
              <div>
                <p>{ order.emissionDate }</p>
              </div>
              <div>
                <p>{ order.value }</p>
              </div>
              <div>
                <p>{ order.orderStatusBuyer }</p>
              </div>
            </div>
            
            
            )
          }      
    </div>
  );
}