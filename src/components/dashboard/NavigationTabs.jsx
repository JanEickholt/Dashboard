import React from "react";

export default function NavigationTabs({ activeTab, setActiveTab }) {
  const tabs = [
    "overview",
    "audience",
    "acquisition",
    "behavior",
    "conversions",
  ];

  return (
    <div className="flex border-b border-slate-200 dark:border-gray-700 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-3 font-medium capitalize ${activeTab === tab
              ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 dark:bg-dark"
              : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 dark:bg-dark"
            }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
