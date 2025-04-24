import { useState } from "react";

const Mealschedule = () => {
  const [meals, setMeals] = useState([]);
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time) return;

    const newMeal = {
      id: Date.now(),
      ...form,
    };

    setMeals([...meals, newMeal]);
    setForm({ name: "", date: "", time: "" });
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  return (
    <section className="w-full px-4 pt-4 md:px-20 lg:px-40 pb-20">
      <h1 className="text-3xl font-bold mb-6">Meal Schedule</h1>

      {/* Meal Form */}
      <form
        onSubmit={handleAddMeal}
        className="bg-white rounded shadow p-6 mb-10 space-y-4"
      >
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            name="name"
            placeholder="Meal Name"
            className="border px-4 py-2 rounded w-full"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            className="border px-4 py-2 rounded w-full"
            value={form.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="time"
            className="border px-4 py-2 rounded w-full"
            value={form.time}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Meal
        </button>
      </form>

      {/* Scheduled Meals */}
      <div className="space-y-4">
        {meals.length === 0 ? (
          <p className="text-gray-600">No meals scheduled yet.</p>
        ) : (
          meals.map((meal) => (
            <div
              key={meal.id}
              className="flex items-center justify-between border rounded p-4 shadow"
            >
              <div>
                <p className="text-lg font-semibold">{meal.name}</p>
                <p className="text-gray-600 text-sm">
                  {meal.date} at {meal.time}
                </p>
              </div>
              <button
                onClick={() => handleDeleteMeal(meal.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Mealschedule;
