import { useState } from "react";
import Modal from "../Modal";

const MealsPage = () => {
  const [meals, setMeals] = useState([
    {
      id: 1,
      plan: "Combo",
      items: ["Rice", "Chicken"],
      price: "610",
      description: "Simple and nutritious meal",
      quantity: "1",
      special: "None",
    },
    {
      id: 2,
      plan: "Dinner",
      items: ["Paneer", "Salad"],
      price: "812",
      description: "Pure veg with fresh ingredients",
      quantity: "1",
      special: "Vegetarian",
    },
    {
      id: 3,
      plan: "Lunch",
      items: ["Grilled Chicken", "Quinoa", "Broccoli"],
      price: "915",
      description: "Packed with protein for gym lovers",
      quantity: "1",
      special: "Fitness",
    },
    {
      id: 4,
      plan: "Lunch",
      items: ["Mini Burger", "Fries", "Juice"],
      price: "678",
      description: "Perfect for children",
      quantity: "1",
      special: "Kids Special",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const openModal = (meal) => {
    setSelectedMeal(meal);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <h1 className="mb-4 text-3xl font-bold capitalize">Meals Page</h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3" scope="col">
                  Id
                </th>
                <th className="px-6 py-3" scope="col">
                  Plan
                </th>
                <th className="px-6 py-3" scope="col">
                  Meals
                </th>
                <th className="px-6 py-3" scope="col">
                  Price
                </th>
                <th className="px-6 py-3" scope="col">
                  Quantity
                </th>
                <th className="px-6 py-3" scope="col">
                  Special
                </th>
                <th className="px-6 py-3" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal) => (
                <tr key={meal.id} className="bg-white border-b">
                  <td className="px-6 py-4">{meal.id}</td>
                  <td className="px-6 py-4">{meal.plan}</td>
                  <td className="px-6 py-4">
                    {meal.items.join(", ")}
                    <br />
                    <span className="text-xs text-gray-400">
                      {meal.description}
                    </span>
                  </td>
                  <td className="px-6 py-4">{meal.price}</td>
                  <td className="px-6 py-4">{meal.quantity}</td>
                  <td className="px-6 py-4">{meal.special}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => openModal()}
                      className="text-white bg-green-500 hover:bg-green-600 border px-3 py-2 rounded-md"
                    >
                      view
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        heading="User Details"
        closeModal={closeModal}
        modalOpen={isModalOpen}
      >
        {selectedMeal && (
          <div>
            <p>name: {selectedMeal?.price}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MealsPage;
