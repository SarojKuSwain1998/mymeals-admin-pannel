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
      <div className="space-y-4">
        {/* PLAN */}
        <div>
          <label>Plan:</label>
          {isEdit ? (
            <input
              name="plan"
              value={tempMeal.plan || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
            />
          ) : (
            <p>{selectedMeal.plan}</p>
          )}
        </div>

        {/* ITEMS */}
        <div>
          <label>Items:</label>
          {isEdit ? (
            <input
              name="items"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.items?.join(", ") || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal?.items?.join(", ")}</p>
          )}
        </div>

        {/* PRICE */}
        <div>
          <label>Price:</label>
          {isEdit ? (
            <input
              name="price"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.price || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.price}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div>
          <label>Description:</label>
          {isEdit ? (
            <textarea
              name="description"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.description || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.description}</p>
          )}
        </div>

        {/* QUANTITY */}
        <div>
          <label>Quantity:</label>
          {isEdit ? (
            <input
              name="quantity"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.quantity || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.quantity}</p>
          )}
        </div>

        {/* SPECIAL */}
        <div>
          <label>Special:</label>
          {isEdit ? (
            <input
              name="special"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.special || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.special}</p>
          )}
        </div>

        {/* CALORIES */}
        <div>
          <label>Calories:</label>
          {isEdit ? (
            <input
              name="calories"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.calories || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.calories}</p>
          )}
        </div>

        {/* ALLERGENS */}
        <div>
          <label>Allergens:</label>
          {isEdit ? (
            <input
              name="allergens"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.allergens?.join(", ") || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.allergens?.join(", ")}</p>
          )}
        </div>

        {/* CATEGORY */}
        <div>
          <label>Category:</label>
          {isEdit ? (
            <input
              name="category"
              className="w-full border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 "
              value={tempMeal.category || ""}
              onChange={handleChange}
            />
          ) : (
            <p>{selectedMeal.category}</p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-2">
          {isEdit ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-3 py-1"
              >
                Save
              </button>
              <button onClick={handleCancel} className="bg-gray-300 px-3 py-1">
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-3 py-1"
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
