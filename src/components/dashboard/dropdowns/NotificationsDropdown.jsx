import React from "react";

export default function NotificationsDropdown() {
  return (
    <div className="absolute top-16 right-0 w-80 bg-white dark:bg-dark rounded-lg shadow-lg border border-slate-100 dark:border-gray-700 z-10 p-4">
      <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white">
        Notifications
      </h3>
      <div className="space-y-2">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded border-l-4 border-blue-500">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            New feature available
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            5 min ago
          </p>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500">
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
            Your report is ready
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            1 hour ago
          </p>
        </div>
      </div>
    </div>
  );
}
