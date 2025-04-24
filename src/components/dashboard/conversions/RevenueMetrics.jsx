import React from "react";
import { revenueMetricsData } from "../../../data/dashboardData";

export default function RevenueMetrics({ timeRange }) {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Revenue Metrics
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {revenueMetricsData[timeRange].map((item, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-gray-800 rounded-lg p-4"
          >
            <h3 className="text-sm text-slate-500 dark:text-slate-400 mb-1">
              {item.metric}
            </h3>
            <p className="text-2xl font-bold text-slate-800 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm text-slate-500 dark:text-slate-400">
              Conversion Value
            </h3>
            <p className="text-lg font-medium text-slate-800 dark:text-white">
              {timeRange === "24h"
                ? "$47.11"
                : timeRange === "7d"
                  ? "$50.76"
                  : timeRange === "30d"
                    ? "$51.77"
                    : "$52.05"}{" "}
              per conversion
            </p>
          </div>

          <div className="flex items-center gap-2">
            {timeRange !== "24h" && (
              <div
                className={`px-2 py-1 text-xs font-medium rounded-full ${["7d", "30d", "90d"].includes(timeRange)
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : ""
                  }`}
              >
                {timeRange === "7d"
                  ? "+7.7%"
                  : timeRange === "30d"
                    ? "+9.9%"
                    : "+10.5%"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
