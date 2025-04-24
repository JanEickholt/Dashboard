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

export default function DeviceDistribution({ timeRange, darkMode, data }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  const chartData = data || deviceData[timeRange];

  const hasData = chartData && chartData.length > 0;

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Device Distribution
      </h2>

      {hasData ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
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
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-[300px] flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-800 rounded-lg">
          <p>No data available for the selected filters</p>
        </div>
      )}
    </div>
  );
}
