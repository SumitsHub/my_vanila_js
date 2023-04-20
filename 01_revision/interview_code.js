// Amdocs

const customers = [
  { id: 1, name: "Customer 1", mobile: "8989898989" },
  { id: 2, name: "Customer 2", mobile: "8989898989" },
];

const orders = [{ customerId: 1, quantity: 3, productId: 1 }];

const products = [
  { productId: 1, productName: "A2 Milk" },
  { productId: 2, productName: "Cow Milk" },
];

const filterOrders = ()=> {
    const customerIds = orders.filter((order)=>{
        if(order.productId === 1 && order.quantity >= 2) {
            return order.customerId;
        }
    })
    const customersList = customers.filter((customer)=>{
      customerIds.includes(customer.id);
    })
    return customersList;
}
