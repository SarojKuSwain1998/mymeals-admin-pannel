import { useState } from "react";

const AddMealsForm = () => {
  const [mealItems, setMealItems] = useState([""]); // Start with one item
  const [plan, setPlan] = useState("");

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
    <section className="space-y-6 p-4">
      {/* Plan Dropdown */}
      <div className="flex flex-col gap-1">
        <label htmlFor="plan" className="text-sm font-medium text-gray-700">
          Plan <span className="text-red-500">*</span>
        </label>
        <select
          id="plan"
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="">Select your meals</option>
          <option value="Combo Lunch & Dinner">Combo Lunch & Dinner</option>
          <option value="Monthly Lunch">Lunch</option>
          <option value="Monthly Dinner">Dinner</option>
        </select>
      </div>

      {/* Dynamic Meal Items */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Meal Items</h2>
        {mealItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              placeholder={`Item-${index + 1}`}
              value={item}
              onChange={(e) => handleMealChange(index, e.target.value)}
              className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {mealItems.length > 1 && (
              <button
                onClick={() => handleRemoveMeal(index)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          onClick={handleAddMeal}
          className="mt-2 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          + Add Item
        </button>
      </div>
    </section>
  );
};

export default AddMealsForm;
