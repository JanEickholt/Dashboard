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
import { conversionRateOverTimeData } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function ConversionRate({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Conversion Rate Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={conversionRateOverTimeData[timeRange]}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={getGridColor(darkMode)}
          />
          <XAxis dataKey="name" stroke={getAxisColor(darkMode)} />
          <YAxis stroke={getAxisColor(darkMode)} />
          <Tooltip
            contentStyle={tooltipStyles.contentStyle}
            formatter={(value) => {
              return [`${value}%`, "Conversion Rate"];
            }}
            labelStyle={tooltipStyles.labelStyle}
            itemStyle={tooltipStyles.itemStyle}
          />
          <Area
            type="monotone"
            dataKey="rate"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
