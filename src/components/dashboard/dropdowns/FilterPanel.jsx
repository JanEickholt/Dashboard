import React from "react";

export default function FilterPanel() {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow border border-slate-200">
      <h3 className="font-medium mb-3">Filter Options</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600 mb-1">
            Date Range
          </label>
          <select className="w-full p-2 border border-slate-300 rounded">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Custom range</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-slate-600 mb-1">Metrics</label>
          <select className="w-full p-2 border border-slate-300 rounded">
            <option>All metrics</option>
            <option>Users only</option>
            <option>Revenue only</option>
            <option>Engagement only</option>
          </select>
        </div>
      </div>
    </div>
  );
}
