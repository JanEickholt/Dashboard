import React from "react";
import { Search, Filter, Download } from "lucide-react";

export default function FilterSection({
  timeRange,
  setTimeRange,
  setTimeRangeChanging,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8 items-center">
      <div className="flex-1 max-w-md relative">
        <Search
          className="absolute left-3 top-2.5 text-slate-400 dark:text-slate-500"
          size={18}
        />
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          placeholder="Search metrics..."
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-700">
          <Filter size={16} />
          <span>Filter</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-gray-700">
          <Download size={16} />
          <span>Export</span>
        </button>
      </div>
      <div className="flex rounded-lg overflow-hidden border border-slate-200 dark:border-gray-700">
        {["24h", "7d", "30d", "90d"].map((range) => (
          <button
            key={range}
            className={`px-4 py-2 ${timeRange === range ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" : "bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-gray-700"}`}
            onClick={() => {
              setTimeRangeChanging(true);
              setTimeout(() => {
                setTimeRange(range);
                setTimeRangeChanging(false);
              }, 500);
            }}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}
