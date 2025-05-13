import { useState, useEffect } from "react";
import Modal from "../Modal";

const UserLists = () => {
  //   const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [users, setUsers] = useState([
    {
      id: "USR-001",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      phone: "+1-202-555-0173",
      address: {
        street: "123 Maple Street",
        city: "Springfield",
        state: "IL",
        zip: "62704",
        country: "USA",
      },
    },
    {
      id: "USR-002",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      phone: "+1-303-555-0198",
      address: {
        street: "456 Oak Avenue",
        city: "Denver",
        state: "CO",
        zip: "80203",
        country: "USA",
      },
    },
    {
      id: "USR-003",
      name: "Carol Martinez",
      email: "carol.martinez@example.com",
      phone: "+1-415-555-0111",
      address: {
        street: "789 Pine Lane",
        city: "San Francisco",
        state: "CA",
        zip: "94110",
        country: "USA",
      },
    },
  ]);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <h1 className="text-xl font-bold mb-4">User List</h1>
        {/* <h1 className="text-xl font-bold mb-4">User List</h1>
      {users.map((user) => (
        <div key={user.id} className="mb-4 border p-4 rounded shadow">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-base text-gray-800 font-semibold">Email: {user.email}</p>
          <p className="text-base text-gray-800 font-semibold">Phone: {user.phone}</p>
          <p className="text-base text-gray-800 font-semibold">
            Address: {user.address.street}, {user.address.city},{" "}
            {user.address.state} {user.address.zip}, {user.address.country}
          </p>
        </div>
      ))} */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3 capitalize">ID</th>
                <th className="px-6 py-3 capitalize">NAME</th>
                <th className="px-6 py-3 capitalize">EMAIL</th>
                <th className="px-6 py-3 capitalize">PHONE</th>
                <th className="px-6 py-3 capitalize">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users?.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{user.id}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.phone}</td>
                    {/* <td className="px-6 py-4">{user.status}</td> */}
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openModal(user)}
                        className="text-white bg-green-500 hover:bg-green-600 border px-3 py-2 rounded-md"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 text-center" colSpan="5">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        heading="Users Details"
        closeModal={closeModal}
        modalOpen={isModalOpen}
      >
        <div className="flex gap-8 py-4">
          <label className="block text-sm font-medium text-gray-600">
            User ID:
          </label>
          <p className="text-base text-gray-800 font-semibold">
            {selectedUser?.id}{" "}
          </p>
        </div>
        <div className="flex justify-between bg-gray-50 border px-4 py-4 rounded-md">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name:
            </label>

            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.name}{" "}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.email}{" "}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Mobile:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.phone}{" "}
            </p>
          </div>
        </div>
        <h1 className="text-xl font-serif font-semibold mt-4">Address</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 border px-4 py-4 rounded-md mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Street:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.address?.street || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              City:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.address?.city || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              State:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.address?.state || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Zip:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.address?.zip || "N/A"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Country:
            </label>
            <p className="text-base text-gray-800 font-semibold">
              {selectedUser?.address?.country || "N/A"}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserLists;
