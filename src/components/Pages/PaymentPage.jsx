import { useState } from "react";
import Modal from "../Modal";

const statusColors = {
  Paid: "text-green-600 bg-green-100",
  Pending: "text-yellow-600 bg-yellow-100",
  Failed: "text-red-600 bg-red-100",
};
const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [payments, setPayments] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-555-123-4567",
      amount: 120,
      currency: "USD",
      status: "Paid",
      paymentMethod: "Credit Card",
      transactionId: "TXN123456789",
      date: "2025-05-10T14:23:00Z",
      notes: "Monthly subscription payment",
      address: {
        street: "123 Maple Street",
        city: "Springfield",
        state: "IL",
        zip: "62704",
        country: "USA",
      },
    },
  ]);

  const openModal = (payment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPayment(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <h1 className="text-3xl ">Payment Lists</h1>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">TransactionId</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{payment.name}</td>
                  <td className="px-6 py-4">{payment.email}</td>
                  <td className="px-6 py-4">{payment.phone}</td>
                  <td className="px-6 py-4">{payment.amount}</td>
                  <td className="px-6 py-4">{payment.transactionId}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[payment.status]}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openModal(payment)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        modalOpen={isModalOpen}
        closeModal={closeModal}
        heading="Payment Details"
      >
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md space-y-6">
          {/* Payment Info */}
          <div>
            <h2 className="text-lg font-semibold text-blue-600 border-b pb-2 mb-4">
              Payment Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 font-medium">Name:</label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.name}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Email:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.email}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Phone:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.phone}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Amount:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.amount}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Transaction ID:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.transactionId}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Status:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.status}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">
                  Payment Method:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.paymentMethod}
                </p>
              </div>
              <div>
                <label className="block text-gray-600 font-medium">Date:</label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.date}
                </p>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-gray-600 font-medium">
                  Notes:
                </label>
                <p className="bg-gray-100 p-2 rounded">
                  {selectedPayment?.notes}
                </p>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="w-full max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-bold text-green-600 border-b border-gray-200 dark:border-gray-700 pb-3">
              Billing Address
            </h2>

            <div>
              <label className="block text-gray-600 font-medium">Street:</label>
              <p className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded">
                {selectedPayment?.address?.street || "N/A"}
              </p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">City:</label>
              <p className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded">
                {selectedPayment?.address?.city || "N/A"}
              </p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">State:</label>
              <p className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded">
                {selectedPayment?.address?.state || "N/A"}
              </p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">ZIP:</label>
              <p className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded">
                {selectedPayment?.address?.zip || "N/A"}
              </p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Country:
              </label>
              <p className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 p-2 rounded">
                {selectedPayment?.address?.country || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PaymentPage;
