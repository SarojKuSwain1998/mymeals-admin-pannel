import { useState } from "react";

const DeliveryHistory = () => {
  const [delivery, setDelivery] = useState([
    {
      orderId: "ORD12345",
      customerName: "Jane Doe",
      email: "jane.doe@example.com",
      meal: "Grilled Chicken",
      number: 9856231478,
      time: "12:30 PM",
      date: "24/04/2025",
      amount: 500,
      deliveryStatus: "Delivered",
      address: {
        adreesOne: "Jagannath Nagar",
        addressTwo: "GGP Colony",
        landmark: "Shiv Temple ",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India",
        pincode: 751010,
      },
    },
    {
      orderId: "ORD12346",
      customerName: "John Smith",
      email: "john.smith@example.com",
      meal: "Vegan Burger",
      number: 9856231478,
      time: "12:30 PM",
      date: "24/04/2025",
      amount: 500,
      deliveryStatus: "Delivered",
      address: {
        adreesOne: "Jagannath Nagar",
        addressTwo: "GGP Colony",
        landmark: "Shiv Temple ",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India",
        pincode: 751010,
      },
    },
  ]);
  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1 className="mb-4 text-3xl text-auto font-bold capitalize">
        Delivery History
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">OrderId</th>
              <th className="px-6 py-3">Customer Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Number</th>
              <th className="px-6 py-3">Payment Status</th>
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {delivery.map((item) => (
              <tr
                key={item.orderId}
                className="border-b border-gray-200 bg-white hover:bg-gray-50"
              >
                <td className="px-6 py-4">{item.orderId}</td>
                <td className="px-6 py-4">{item.customerName}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.meal}</td>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4">{item.deliveryStatus}</td>
                <td className="px-6 py-4">{item.time}</td>
                <td className="px-6 py-4">
                  <button className="text-white border px-3 py-2 rounded-md bg-green-500 hover:bg-green-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryHistory;
