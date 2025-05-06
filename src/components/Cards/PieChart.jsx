import React from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Male", value: 400 },
  { name: "Female", value: 300 },
  { name: "Others", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChart = () => {
  return (
    <div className="p-4 mt-4 rounded-2xl shadow-lg bg-white max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center">Visitors Profile</h1>
      <RechartsPieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </div>
  );
};

export default PieChart;
