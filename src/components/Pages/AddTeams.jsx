import { FormLabel, Input, Button, Box } from "@mui/material";
import { useState } from "react";

const AddTeams = () => {
  const [teams, setTeams] = useState([
    {
      empName: "",
      email: "",
      number: "",
      role: "",
    },
  ]);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    setTeams((prevTeams) => {
      const updatedTeams = [...prevTeams];
      updatedTeams[index][name] = value;
      return updatedTeams;
    });
  };

  return (
    <Box className="w-full px-4 pt-4 md:px-16 lg:px-32">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Add Teams</h1>

      {/* Team Member Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FormLabel className="text-sm text-gray-600">Employee Name</FormLabel>
          <Input
            fullWidth
            disableUnderline
            placeholder="Enter emp name"
            className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-1 w-full"
          />
        </div>

        <div>
          <FormLabel className="text-sm text-gray-600">Email</FormLabel>
          <Input
            fullWidth
            disableUnderline
            placeholder="Enter emp email"
            className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-1 w-full"
          />
        </div>

        <div>
          <FormLabel className="text-sm text-gray-600">Phone</FormLabel>
          <Input
            fullWidth
            disableUnderline
            placeholder="Enter emp number"
            className="bg-white border border-gray-300 rounded-md px-4 py-2 mt-1 w-full"
          />
        </div>

        <div>
          <FormLabel className="text-sm text-gray-600">Role</FormLabel>
          <select
            className="bg-white border border-gray-300 rounded-md px-4 py-3.5 mt-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select role
            </option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="waiter">Waiter</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="contained"
          color="primary"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add Team Member
        </Button>
      </div>
    </Box>
  );
};

export default AddTeams;
