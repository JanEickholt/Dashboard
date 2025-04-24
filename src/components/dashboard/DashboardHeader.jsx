import React from "react";
import { RefreshCw, Bell, Settings, User } from "lucide-react";

export default function DashboardHeader({
  isRefreshing,
  showNotifications,
  showSettings,
  handleRefresh,
  toggleNotifications,
  toggleSettings,
  toggleUserMenu,
}) {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Real-time metrics and insights
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          className={`p-2 rounded-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-700 ${isRefreshing ? "animate-spin text-indigo-600" : ""}`}
          onClick={handleRefresh}
        >
          <RefreshCw size={18} />
        </button>
        <button
          className={`p-2 rounded-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-700 ${showNotifications ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300" : ""}`}
          onClick={toggleNotifications}
        >
          <Bell size={18} />
        </button>
        <button
          className={`p-2 rounded-full bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-700 ${showSettings ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300" : ""}`}
          onClick={toggleSettings}
        >
          <Settings size={18} />
        </button>
        <div
          className="w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white cursor-pointer hover:bg-indigo-700 dark:hover:bg-indigo-600"
          onClick={toggleUserMenu}
        >
          <User size={16} />
        </div>
      </div>
    </header>
  );
}
