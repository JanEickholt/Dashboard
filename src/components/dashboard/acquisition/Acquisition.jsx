import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { acquisitionData, COLORS } from "../../../data/dashboardData";
import { getTooltipStyles } from "../../../utils/darkModeUtils";

export default function AcquisitionChannels({ timeRange, darkMode, data }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  const chartData = data || acquisitionData[timeRange];

  const hasData = chartData && chartData.length > 0;

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Acquisition Channels
      </h2>

      {hasData ? (
        <div className="w-full h-[300px] bg-white dark:bg-dark">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                stroke={darkMode ? "#1b1d1e" : "#fff"}
                dataKey="value"
                isAnimationActive={true}
                animationBegin={0}
                animationDuration={500}
                label={({ name, percent }) => {
                  return name && percent
                    ? `${name} ${(percent * 100).toFixed(0)}%`
                    : "";
                }}
                labelStyle={{ pointerEvents: "none" }}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={tooltipStyles.contentStyle}
                labelStyle={tooltipStyles.labelStyle}
                itemStyle={tooltipStyles.itemStyle}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="h-[300px] flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-800 rounded-lg">
          <p>No data available for the selected filters</p>
        </div>
      )}
    </div>
  );
}
