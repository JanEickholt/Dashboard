import React from "react";
import SettingsToggle from "../ui/SettingsToggle";

export default function AppearanceTab({ onClose, darkMode, setDarkMode }) {
  const [selectedFontSize, setSelectedFontSize] = React.useState("medium");

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Customize how the dashboard looks and feels.
      </p>

      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Dark Mode"
            description="Toggle between light and dark themes"
            enabled={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="py-4 border-b border-slate-200 dark:border-gray-700">
          <div className="mb-4">
            <p className="font-medium text-slate-700 dark:text-slate-300">
              Theme
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Choose your preferred color theme
            </p>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <button className="w-12 h-12 rounded-full bg-indigo-600 ring-2 ring-offset-2 ring-indigo-600 dark:ring-offset-gray-800"></button>
            <button className="w-12 h-12 rounded-full bg-blue-600"></button>
            <button className="w-12 h-12 rounded-full bg-green-600"></button>
            <button className="w-12 h-12 rounded-full bg-purple-600"></button>
            <button className="w-12 h-12 rounded-full bg-red-600"></button>
          </div>
        </div>

        <div className="py-4">
          <div className="mb-2">
            <p className="font-medium text-slate-700 dark:text-slate-300">
              Font Size
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className={`text-xs p-2 border ${selectedFontSize === "small"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                  : "border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800"
                } rounded-md`}
              onClick={() => setSelectedFontSize("small")}
            >
              Small
            </button>
            <button
              className={`text-sm p-2 border ${selectedFontSize === "medium"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                  : "border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800"
                } rounded-md`}
              onClick={() => setSelectedFontSize("medium")}
            >
              Medium
            </button>
            <button
              className={`text-base p-2 border ${selectedFontSize === "large"
                  ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                  : "border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800"
                } rounded-md`}
              onClick={() => setSelectedFontSize("large")}
            >
              Large
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
