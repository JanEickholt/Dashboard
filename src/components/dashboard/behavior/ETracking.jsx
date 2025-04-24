import React from "react";
import { eventTrackingData } from "../../../data/dashboardData";

export default function ETracking({ timeRange }) {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Event Tracking
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 dark:text-slate-300 uppercase bg-slate-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Event Name</th>
              <th className="px-4 py-3">Total Count</th>
              <th className="px-4 py-3">Unique Users</th>
              <th className="px-4 py-3 rounded-r-lg">Per User</th>
            </tr>
          </thead>
          <tbody>
            {eventTrackingData[timeRange].map((event, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                  {event.name}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {event.count.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {event.users.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {event.perUser.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
