import React from "react";

export default function UserMenu() {
  return (
    <div className="absolute top-20 right-4 w-48 bg-white dark:bg-dark dark:border-gray-700 dark:text-white rounded-lg shadow-lg border border-slate-100 z-10">
      <div className="p-3 border-b border-slate-100">
        <p className="text-sm font-medium text-slate-800">John Doe</p>
        <p className="text-xs text-slate-500">admin@example.com</p>
      </div>
      <ul className="py-2">
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">
            Profile
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">
            Settings
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-slate-50">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
}
