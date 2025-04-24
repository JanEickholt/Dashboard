import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { channelsOverTimeData } from "../../../data/dashboardData";
import {
  getTooltipStyles,
  getGridColor,
  getAxisColor,
} from "../../../utils/darkModeUtils";

export default function ChannelsOverTime({ timeRange, darkMode }) {
  const tooltipStyles = getTooltipStyles(darkMode);

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Channels Over Time
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={channelsOverTimeData[timeRange]}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
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
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ fontSize: "10px" }}
          />
          <Area
            type="monotone"
            dataKey="organic"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            name="Organic"
          />
          <Area
            type="monotone"
            dataKey="direct"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
            name="Direct"
          />
          <Area
            type="monotone"
            dataKey="paid"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            fillOpacity={0.6}
            name="Paid"
          />
          <Area
            type="monotone"
            dataKey="social"
            stackId="1"
            stroke="#ff8042"
            fill="#ff8042"
            fillOpacity={0.6}
            name="Social"
          />
          <Area
            type="monotone"
            dataKey="referral"
            stackId="1"
            stroke="#0088fe"
            fill="#0088fe"
            fillOpacity={0.6}
            name="Referral"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
