import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { timeRangeData } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function PerformanceChart({ timeRange, darkMode, data }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  const chartData = data || timeRangeData[timeRange];

  const hasData = chartData && chartData.length > 0;

  const hasUsers =
    hasData && chartData.some((item) => item.users !== undefined);
  const hasRevenue =
    hasData && chartData.some((item) => item.revenue !== undefined);
  const hasEngagement =
    hasData && chartData.some((item) => item.engagement !== undefined);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          Performance Trends
        </h2>
        <div className="flex gap-2">
          {hasUsers && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Users
            </span>
          )}
          {hasRevenue && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Revenue
            </span>
          )}
          {hasEngagement && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              Engagement
            </span>
          )}
        </div>
      </div>

      {hasData ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
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
              labelStyle={tooltipStyles.labelStyle}
              itemStyle={tooltipStyles.itemStyle}
            />
            <Legend />
            {hasUsers && (
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            )}
            {hasRevenue && (
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            )}
            {hasEngagement && (
              <Line
                type="monotone"
                dataKey="engagement"
                stroke="#a855f7"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 5 }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="h-[300px] flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-800 rounded-lg">
          <p>No data available for the selected filters</p>
        </div>
      )}
    </div>
  );
}
