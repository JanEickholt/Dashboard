import React from "react";
import { kpiData } from "../../data/dashboardData";

export default function KPICards({ timeRange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {kpiData[timeRange].map((kpi, index) => (
        <div
          key={index}
          className="bg-white dark:bg-dark rounded-xl shadow-sm p-6 border border-slate-100 dark:border-gray-700"
        >
          <h3 className="text-slate-500 dark:text-slate-400 font-medium mb-1">
            {kpi.title}
          </h3>
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {kpi.value}
            </p>
            <div
              className={`text-sm font-medium px-2 py-1 rounded-full ${kpi.positive ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}
            >
              {kpi.change}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
