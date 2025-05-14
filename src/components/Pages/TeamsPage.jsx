import { useState } from "react";
import Modal from "../Modal";

const TeamsPage = () => {
  const [selectedTeams, setSelectedTeams] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState([
    {
      empId: "EMP-001",
      name: "John Cena",
      email: "john@gmail.com",
      phone: 9888888889,
      role: "Admin",
      dob: "02/05/1998",
      gender: "male",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        counrty: "USA",
        zip: "90001",
      },
      sensitiveDetails: {
        adharNumber: 23534654646,
        panNumber: "KOOPS3553C",
      },
    },
    {
      empId: "EMP-002",
      name: "SKS SK",
      email: "sks@gmail.com",
      phone: 98858558889,
      role: "Manager",
      dob: "02/05/1998",
      gender: "male",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        counrty: "USA",
        zip: "90001",
      },
      sensitiveDetails: {
        adharNumber: 23534654646,
        panNumber: "KOOPS3553C",
      },
    },
    {
      empId: "EMP-003",
      name: "Mr. Kumar Saheb",
      email: "kumarsaheb@gmail.com",
      phone: 988888889,
      role: "Delivery",
      dob: "02/05/1998",
      gender: "male",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        counrty: "USA",
        zip: "90001",
      },
      sensitiveDetails: {
        adharNumber: 23534654646,
        panNumber: "KOOPS3553C",
      },
    },
    {
      empId: "EMP-004",
      name: "Harisankar",
      email: "harisankar@gmail.com",
      phone: 9888888889,
      role: "Waiter",
      dob: "02/05/1998",
      gender: "male",
      address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        counrty: "USA",
        zip: "90001",
      },
      sensitiveDetails: {
        adharNumber: 23534654646,
        panNumber: "KOOPS3553C",
      },
    },
  ]);

  const openModal = (team) => {
    setSelectedTeams(team);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTeams(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <div className="flex py-4 justify-between">
          <h1 className="text-3xl ">Employee Lists</h1>
          <a href="/add-teams">
            <button className="border hover:bg-gray-600   text-white bg-black px-4 py-2 rounded-md">
              Add Teams{" "}
            </button>
          </a>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="border border-green-600 bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-6 py-3">EMPLOYEEID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Number</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {teams?.length > 0 ? (
                teams?.map((team) => (
                  <tr
                    key={team.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{team.empId}</td>
                    <td className="px-6 py-4">{team.name}</td>
                    <td className="px-6 py-4">{team.email}</td>
                    <td className="px-6 py-4">{team.phone}</td>
                    <td className="px-6 py-4">{team.role}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openModal(team)}
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
        heading="Employee Details"
        modalOpen={isModalOpen}
        closeModal={closeModal}
      >
        <div>Hii</div>
      </Modal>
    </>
  );
};
export default TeamsPage;
