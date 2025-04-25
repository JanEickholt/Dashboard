import React from "react";

export default function SettingsToggle({
  enabled,
  onChange,
  label,
  description,
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="font-medium text-slate-700 dark:text-slate-300">
          {label}
        </p>
        {description && (
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>
      <button
        type="button"
        className={`w-12 h-6 rounded-full transition-colors ${enabled ? "bg-indigo-600" : "bg-slate-200 dark:bg-gray-600"
          } relative`}
        onClick={onChange}
      >
        <span
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${enabled ? "left-7" : "left-1"
            }`}
        ></span>
      </button>
    </div>
  );
}
