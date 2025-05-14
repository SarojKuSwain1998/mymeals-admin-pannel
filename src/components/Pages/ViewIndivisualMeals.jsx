import { useState } from "react";
import Modal from "../Modal";

const ViewIndivisualMeals = ({
  modalOpen,
  closeModal,
  selectedMeal,
  goBack,
  updateMeal,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [tempMeal, setTempMeal] = useState(selectedMeal); // temporary state for editing

  const handleEditToggle = () => {
    setTempMeal(selectedMeal);
    setIsEdit(true);
  };

  const handleCancel = () => {
    setTempMeal(selectedMeal);
    setIsEdit(false);
  };

  const handleSave = () => {
    updateMeal(tempMeal);
    setIsEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newValue = ["items", "allergens"].includes(name)
      ? value.split(",").map((i) => i.trim())
      : value;

    setTempMeal((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  if (!selectedMeal) return null;

  return (
    <Modal
      modalOpen={modalOpen}
      closeModal={closeModal}
      heading={"View and Edit Individual Meal"}
      goBack={goBack}
      selectedMeal={selectedMeal}
    >
      <div className="space-y-6 max-w-xl w-full mx-auto px-4 py-6 bg-white rounded-lg shadow-md">
        {/* PLAN */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Plan:</label>
          {isEdit ? (
            <input
              name="plan"
              value={tempMeal.plan || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.plan}</p>
          )}
        </div>

        {/* ITEMS */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Items:</label>
          {isEdit ? (
            <input
              name="items"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.items?.join(", ") || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">
              {selectedMeal?.items?.join(", ")}
            </p>
          )}
        </div>

        {/* PRICE */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Price:</label>
          {isEdit ? (
            <input
              name="price"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.price || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.price}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Description:
          </label>
          {isEdit ? (
            <textarea
              name="description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.description || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.description}</p>
          )}
        </div>

        {/* QUANTITY */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Quantity:</label>
          {isEdit ? (
            <input
              name="quantity"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.quantity || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.quantity}</p>
          )}
        </div>

        {/* SPECIAL */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Special:</label>
          {isEdit ? (
            <input
              name="special"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.special || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.special}</p>
          )}
        </div>

        {/* CALORIES */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Calories:</label>
          {isEdit ? (
            <input
              name="calories"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.calories || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.calories}</p>
          )}
        </div>

        {/* ALLERGENS */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Allergens:
          </label>
          {isEdit ? (
            <input
              name="allergens"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.allergens?.join(", ") || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">
              {selectedMeal.allergens?.join(", ")}
            </p>
          )}
        </div>

        {/* CATEGORY */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Category:</label>
          {isEdit ? (
            <input
              name="category"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tempMeal.category || ""}
              onChange={handleChange}
            />
          ) : (
            <p className="text-gray-800 text-sm">{selectedMeal.category}</p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3 pt-2">
          {isEdit ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm transition"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 rounded-md text-sm transition"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm transition"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ViewIndivisualMeals;
