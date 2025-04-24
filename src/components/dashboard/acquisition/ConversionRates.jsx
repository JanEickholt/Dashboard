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
import { conversionRatesData, COLORS } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function ConversionRates({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Channel Conversion Rates (%)
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={conversionRatesData[timeRange]}
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
          <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
            {conversionRatesData[timeRange].map((_, index) => (
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
