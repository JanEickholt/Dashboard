import React from "react";
import { User } from "lucide-react";

export default function ProfileButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
    >
      <User size={16} />
      <span className="text-sm font-medium">My Profile</span>
    </button>
  );
}
