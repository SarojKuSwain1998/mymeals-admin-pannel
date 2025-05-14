import { useState } from "react";

const InventoryPage = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      name: "Grilled Chicken Salad",
      category: "Salad",
      price: 12.99,
      currency: "USD",
      available: true,
      ingredients: [
        "Chicken Breast",
        "Lettuce",
        "Tomatoes",
        "Cucumber",
        "Vinaigrette",
      ],
      calories: 420,
      prepTime: "15 mins",
      cookTime: "10 mins",
      imageUrl: "/images/grilled-chicken-salad.jpg",
      description: "A healthy salad with grilled chicken and fresh vegetables.",
      tags: ["gluten-free", "low-carb", "protein-rich"],
      createdAt: "2025-05-10T09:00:00Z",
      updatedAt: "2025-05-12T08:30:00Z",
    },
    {
      id: 2,
      name: "Vegan Buddha Bowl",
      category: "Bowl",
      price: 10.5,
      currency: "USD",
      available: false,
      ingredients: ["Quinoa", "Chickpeas", "Avocado", "Spinach", "Tahini"],
      calories: 550,
      prepTime: "10 mins",
      cookTime: "15 mins",
      imageUrl: "/images/vegan-buddha-bowl.jpg",
      description: "A nutritious bowl packed with plant-based goodness.",
      tags: ["vegan", "dairy-free", "fiber-rich"],
      createdAt: "2025-05-08T10:20:00Z",
      updatedAt: "2025-05-11T11:15:00Z",
    },
  ]);
  return (
    <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1 className="mb-4 text-3xl font-bold capitalize">Inventory Page</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;
