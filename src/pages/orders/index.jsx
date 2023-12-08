import { useOH } from "@/utilities/useOH";

export default function OrdersHistoryPage() {

  const ordersInfo = useOH();
    if(ordersInfo.isLoading){
        return (
            <>
                <p className="text-center">Loading</p>
            </>
        );
    }
    if(ordersInfo.isError){
        return (
            <>
                <p className="text-center">Unable to fetch data.</p>
            </>
        );
    }

  return (
    <div className="container bg-white mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Orders History</h1>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">Order ID</th>
              <th scope="col" className="py-3 px-6">Date</th>
              {/* <th scope="col" className="py-3 px-6">Items</th> */}
              <th scope="col" className="py-3 px-6">Total</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersInfo.orders.map((order) => (
              <tr key={order.id} className="bg-white border-b">
                <td className="py-4 px-6">{order.id}</td>
                <td className="py-4 px-6">{order.createdAt}</td>
                {/* <td className="py-4 px-6">{
                  order.orderItems
            
                }</td> */}
                <td className="py-4 px-6">{order.totalCost}</td>
                <td className="py-4 px-6">{"Placed"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


// OrdersHistoryPage.auth = true;