const ENDPOINT = 'http://localhost:3005/orders' 

export async function ordersAPI (setOrders) {
  const result = await fetch(ENDPOINT)
    .then((res) => res.json());

  setOrders(result);
}