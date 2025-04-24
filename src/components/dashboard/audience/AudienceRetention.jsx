import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { audienceRetentionData } from "../../../data/dashboardData";
import { getTooltipStyles } from "../../../utils/darkModeUtils";

export default function AudienceRetention({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);
  const RETENTION_COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        New vs Returning Visitors
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={audienceRetentionData[timeRange]}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {audienceRetentionData[timeRange].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={RETENTION_COLORS[index % RETENTION_COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={tooltipStyles.contentStyle}
            labelStyle={tooltipStyles.labelStyle}
            itemStyle={tooltipStyles.itemStyle}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
