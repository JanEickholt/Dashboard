import React from "react";
import { User, Settings, LogOut } from "lucide-react";

export default function UserMenu({ onProfileClick }) {
  return (
    <div className="absolute top-20 right-4 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-100 dark:border-gray-700 z-10">
      <div className="p-3 border-b border-slate-100 dark:border-gray-700">
        <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
          John Doe
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          admin@example.com
        </p>
      </div>
      <ul className="py-2">
        <li>
          <button
            onClick={onProfileClick}
            className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800 transition-colors"
          >
            <User size={16} className="mr-2" />
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={onProfileClick}
            className="flex items-center w-full px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800 transition-colors"
          >
            <Settings size={16} className="mr-2" />
            Settings
          </button>
        </li>
        <li>
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 dark:bg-gray-800 transition-colors">
            <LogOut size={16} className="mr-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
