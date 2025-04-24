import React from "react";
import { landingPageData } from "../../../data/dashboardData";

export default function LandingPagePerformance({ timeRange }) {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Landing Page Performance
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 dark:text-slate-300 uppercase bg-slate-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Landing Page</th>
              <th className="px-4 py-3">Visitors</th>
              <th className="px-4 py-3">Bounce Rate</th>
              <th className="px-4 py-3">Conv. Rate</th>
              <th className="px-4 py-3 rounded-r-lg">Avg. Time</th>
            </tr>
          </thead>
          <tbody>
            {landingPageData[timeRange].map((page, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                  {page.page}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {page.visitors.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {page.bounce}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {page.convRate}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {page.avgTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
