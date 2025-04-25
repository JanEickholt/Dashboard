import React from "react";

export default function TabNavItem({ id, label, Icon, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${
        isActive
          ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
          : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-gray-700 dark:bg-gray-800"
      }`}
    >
      <Icon
        size={18}
        className={
          isActive
            ? "text-indigo-700 dark:text-indigo-400"
            : "text-slate-700 dark:text-slate-300"
        }
      />
      <span>{label}</span>
    </button>
  );
}
