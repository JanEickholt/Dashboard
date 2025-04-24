import React from "react";

export default function SettingsDropdown({ darkMode, setDarkMode }) {
  return (
    <div className="absolute top-20 right-4 w-80 bg-white dark:bg-dark dark:border-gray-700 rounded-lg shadow-lg border border-slate-100 z-10 p-4">
      {" "}
      <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white">
        Settings
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-800 dark:text-white">
            Dark Mode
          </span>
          <button
            className={`w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-indigo-600" : "bg-slate-200"} relative`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${darkMode ? "translate-x-[0.25rem]" : "translate-x-[-1.25rem]"
                }`}
            ></span>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-800 dark:text-white">
            Notifications
          </span>
          <button className="w-12 h-6 rounded-full bg-indigo-600"></button>
        </div>
      </div>
    </div>
  );
}
