import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { userFlowData } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function UserFlow({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  const processedData = userFlowData[timeRange].reduce(
    (acc, { source, target, value }) => {
      const existingSource = acc.find((item) => item.name === source);
      if (existingSource) {
        existingSource[target] = value;
      } else {
        const newItem = { name: source };
        newItem[target] = value;
        acc.push(newItem);
      }
      return acc;
    },
    [],
  );

  const allTargets = [
    ...new Set(userFlowData[timeRange].map((item) => item.target)),
  ];

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        User Navigation Flows
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={processedData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={getGridColor(darkMode)}
          />
          <XAxis dataKey="name" stroke={getAxisColor(darkMode)} />
          <YAxis stroke={getAxisColor(darkMode)} />
          <Tooltip
            contentStyle={tooltipStyles.contentStyle}
            labelStyle={tooltipStyles.labelStyle}
            itemStyle={tooltipStyles.itemStyle}
          />
          <Legend />
          {allTargets.map((target, index) => (
            <Bar
              key={index}
              dataKey={target}
              stackId="a"
              fill={`hsl(${index * 50}, 70%, 60%)`}
              name={`To ${target}`}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
