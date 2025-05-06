import { Button } from "@mui/material";
import { useState } from "react";

const AddMealsForm = () => {
  const [mealItems, setMealItems] = useState([""]);
  const [plan, setPlan] = useState({
    plan: "",
    items: [""],
    price: "",
    description: "",
    quantity: "",
    special: "",
  });

  const handleMealChange = (index, value) => {
    const updatedMeals = [...mealItems];
    updatedMeals[index] = value;
    setMealItems(updatedMeals);
  };

  const handleAddMeal = () => {
    setMealItems([...mealItems, ""]);
  };

  const handleRemoveMeal = (index) => {
    const updatedMeals = mealItems.filter((_, i) => i !== index);
    setMealItems(updatedMeals);
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      <form action="">
        {/* Plan Dropdown */}
        <div className="space-y-2">
          <label
            htmlFor="plan"
            className="block text-sm font-medium text-gray-700"
          >
            Plan <span className="text-red-500">*</span>
          </label>
          <select
            id="plan"
            value={plan.plan}
            onChange={(e) =>
              setPlan((prev) => ({
                ...prev,
                plan: e.target.value,
              }))
            }
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select your meals</option>
            <option value="Combo Lunch & Dinner">Combo Lunch & Dinner</option>
            <option value="Monthly Lunch">Lunch</option>
            <option value="Monthly Dinner">Dinner</option>
          </select>
        </div>

        {/* Meal Items */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Meal Items
          </h2>
          <label htmlFor="" className="mb-2">
            Item Name
          </label>
          <div className="space-y-3">
            {mealItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-2"
              >
                <input
                  type="text"
                  placeholder={`Item-${index + 1}`}
                  value={item}
                  onChange={(e) => handleMealChange(index, e.target.value)}
                  className="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                {mealItems.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMeal(index)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddMeal}
            className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition duration-200"
          >
            + Add Item
          </button>
        </div>

        {/* Price, Quantity, Description, Special */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="sm:col-span-2 space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={3}
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="sm:col-span-2 space-y-2">
            <label
              htmlFor="special"
              className="text-sm font-medium text-gray-700"
            >
              Today&apos;s Special
            </label>
            <input
              id="special"
              type="text"
              placeholder="Enter special"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div>
          <button className="border bg-teal-600 text-white hover:bg-teal-700 w-full py-2 mt-4">
            Add Meal
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddMealsForm;
