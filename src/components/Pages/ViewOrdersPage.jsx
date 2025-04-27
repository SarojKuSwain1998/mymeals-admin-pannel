import { useState } from "react";
import IndivisualAssignOrder from "./IndivisualAssignOrder";
// import Modal from "../../Modal";
// import ViewViewOrdersPage from "./ViewAssignOrder";

const ViewOrdersPage = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([
    {
      orderId: "ORD12345",
      customerName: "Jane Doe",
      email: "jane.doe@example.com",
      meal: "Grilled Chicken",
      number: 9856231478,
      time: "12:30 PM",
      date: "24/04/2025",
      payment: {
        amount: 500,
        paymentStatus: "Unpaid",
        paymentMethod: "COD",
      },
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
      number: 5689741236,
      time: "1:00 PM",
      date: "25/04/2025",
      amount: 660,
      paymentStatus: "Paid",
      paymentMethod: "Online",
      address: {
        adreesOne: "Rasulgarh",
        addressTwo: "Jharapadsa",
        landmark: "State bank front",
        city: "Bhubaneswar",
        state: "Odisha",
        country: "India",
        pincode: 751025,
      },
    },
  ]);

  const openModal = (order) => {
    setSelectedOrders(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <section className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <h1 className="mb-4 text-3xl font-bold capitalize">View All Orders</h1>
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
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td className="px-6 py-4">{order.orderId}</td>
                  <td className="px-6 py-4">{order.customerName}</td>
                  <td className="px-6 py-4">{order.email}</td>
                  <td className="px-6 py-4">{order.meal}</td>
                  <td className="px-6 py-4">{order.number}</td>
                  <td className="px-6 py-4">{order.paymentStatus}</td>
                  <td className="px-6 py-4">{order.time}</td>
                  <td>
                    <button
                      onClick={() => openModal(order)}
                      className="text-white border px-3 py-2 rounded-md bg-green-500 hover:bg-green-600"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <IndivisualAssignOrder
        closeModal={closeModal}
        modalOpen={isModalOpen}
        selectedOrders={selectedOrders}
      />
    </>
  );
};

export default ViewOrdersPage;
