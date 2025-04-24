import React from "react";
import { topPerformingData } from "../../../data/dashboardData";

export default function TopPerformingContent({ timeRange, data }) {
  const tableData = data || topPerformingData[timeRange];

  const hasData = tableData && tableData.length > 0;

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700 lg:col-span-2">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Top Performing Content
      </h2>

      {hasData ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 dark:text-slate-300 uppercase bg-slate-50 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 rounded-l-lg">Page Title</th>
                <th className="px-4 py-3">Views</th>
                <th className="px-4 py-3">Conversion</th>
                <th className="px-4 py-3 rounded-r-lg">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800"
                >
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {item.views}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {item.conversion}
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {item.engagement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[300px] flex items-center justify-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-gray-800 rounded-lg">
          <p>No data available for the selected filters</p>
        </div>
      )}
    </div>
  );
}
