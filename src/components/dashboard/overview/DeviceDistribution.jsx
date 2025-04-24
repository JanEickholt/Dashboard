import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { deviceData, COLORS } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function DeviceDistribution({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Device Distribution
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={deviceData[timeRange]}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={getGridColor(darkMode)}
            horizontal={false}
          />
          <XAxis type="number" stroke={getAxisColor(darkMode)} />
          <YAxis
            dataKey="name"
            type="category"
            stroke={getAxisColor(darkMode)}
          />
          <Tooltip
            contentStyle={tooltipStyles.contentStyle}
            formatter={(value) => {
              return [value, "Value"];
            }}
            labelStyle={tooltipStyles.labelStyle}
            itemStyle={tooltipStyles.itemStyle}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {deviceData[timeRange].map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
