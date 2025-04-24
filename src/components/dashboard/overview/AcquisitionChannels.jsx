import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { acquisitionData, COLORS } from "../../../data/dashboardData";
import { getTooltipStyles } from "../../../utils/darkModeUtils";

export default function AcquisitionChannels({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Acquisition Channels
      </h2>
      <div className="w-full h-[300px] bg-white dark:bg-dark">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={acquisitionData[timeRange]}
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
              {acquisitionData[timeRange].map((_, index) => (
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
    </div>
  );
}
