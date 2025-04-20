import { useState } from "react";
import Modal from "../Modal";

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      mobile: "123-456-7890",
      status: "Pending",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        counrty: "USA",
        zip: "10001",
      },
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      mobile: "987-654-3210",
      status: "Approved",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        counrty: "USA",
        zip: "90001",
      },
    },
  ]);

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

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
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl mb-4">Users Approval Page</h1>

          <input
            type="text"
            placeholder="Search by name..."
            className="mb-4 w-full max-w-md px-4 py-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.mobile}</td>
                    <td className="px-6 py-4">{user.status}</td>
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
        heading="User Details"
        modalOpen={isModalOpen}
        closeModal={closeModal}
      >
        {selectedUser && (
          <div className="space-y-4">
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedUser.mobile}
            </p>
            <p>
              <strong>Status:</strong> {selectedUser.status}
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              {selectedUser.address.street}, {selectedUser.address.city},{" "}
              {selectedUser.address.state}, {selectedUser.address.counrty},{" "}
              {selectedUser.address.zip}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UsersPage;
