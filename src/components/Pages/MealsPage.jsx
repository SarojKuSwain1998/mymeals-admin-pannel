const MealsPage = () => {
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
                  Meals
                </th>
                <th className="px-6 py-3" scope="col">
                  Price
                </th>
                <th className="px-6 py-3" scope="col">
                  Category
                </th>
                <th className="px-6 py-3" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Meals 1</td>
                <td className="px-6 py-4">Price 1</td>
                <td className="px-6 py-4">Category 1</td>
                <td className="px-6 py-4">Actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MealsPage;
