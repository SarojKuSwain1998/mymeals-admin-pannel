import { useState } from "react";

const PurchasePage = () => {
  const [purchases, setPurchases] = useState([
    {
      id: 101,
      itemName: "Grilled Chicken Salad",
      quantity: 2,
      totalPrice: 25.98,
      currency: "USD",
      purchaseDate: "2025-05-15T14:30:00Z",
      status: "Delivered",
    },
    {
      id: 102,
      itemName: "Vegan Buddha Bowl",
      quantity: 1,
      totalPrice: 10.5,
      currency: "USD",
      purchaseDate: "2025-05-16T09:15:00Z",
      status: "Pending",
    },
  ]);

  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1 className="mb-4 text-3xl font-bold capitalize">Purchase Page</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Item
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Quantity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Total Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Purchase Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {purchases.map((purchase) => (
              <tr key={purchase.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.itemName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.currency} {purchase.totalPrice.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(purchase.purchaseDate).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {purchase.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchasePage;
