import React from "react";

export default function SettingsDropdown({ darkMode, setDarkMode }) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  return (
    <div className="absolute top-20 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-100 dark:border-gray-700 z-10 p-4">
      <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white">
        Settings
      </h3>
      <div className="space-y-3 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700">
          <span className="text-sm font-medium text-slate-800 dark:text-white">
            Dark Mode
          </span>
          <button
            className={`w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-indigo-600" : "bg-slate-200 dark:bg-black"} relative`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${darkMode ? "left-7" : "left-1"}`}
            ></span>
          </button>
        </div>
        <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700">
          <span className="text-sm font-medium text-slate-800 dark:text-white">
            Notifications
          </span>
          <button
            className={`w-12 h-6 rounded-full transition-colors ${notificationsEnabled ? "bg-indigo-600" : "bg-slate-200 dark:bg-black"} relative`}
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationsEnabled ? "left-7" : "left-1"}`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
