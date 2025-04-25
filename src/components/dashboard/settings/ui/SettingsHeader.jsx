import React from "react";
import { ArrowLeft, LogOut } from "lucide-react";

export default function SettingsHeader({ onClose }) {
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center p-6 border-b border-slate-200 dark:border-gray-700">
      <div className="flex items-center gap-2">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-700 dark:bg-gray-800"
        >
          <ArrowLeft size={20} className="text-slate-700 dark:text-white" />
        </button>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          Profile & Settings
        </h2>
      </div>
      <button
        className="flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors dark:bg-gray-800"
        onClick={onClose}
      >
        <LogOut size={18} className="text-red-500 dark:text-red-400" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}
