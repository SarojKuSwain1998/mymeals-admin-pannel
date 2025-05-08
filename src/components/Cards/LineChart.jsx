import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChart = ({
  title = "Smooth Area Chart",
  title1 = "hghghj",
  data = [],
  strokeColor = "#3366FF",
  gradientId = "colorFill",
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow w-72 ">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-center ">{title}</h2>
        <p className="text-lg font-bold text-center ">{title1}</p>
      </div>
      <ResponsiveContainer width="100%" height={60}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={strokeColor} stopOpacity={1} />
              <stop offset="100%" stopColor={strokeColor} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          {/* Optional Grid and Axis - Uncomment if needed */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="x" /> */}
          {/* <YAxis /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="y"
            stroke={strokeColor}
            fill={`url(#${gradientId})`}
            strokeWidth={2}
            dot={{ fill: "#fff", stroke: strokeColor, strokeWidth: 2, r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
