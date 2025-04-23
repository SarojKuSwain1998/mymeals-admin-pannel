const ViewOrdersPage = () => {
  return (
    <section className="w-full px-4 pt-2 md:px-20 lg:px-40">
      <h1>View All order</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-6 py-3">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default ViewOrdersPage;
