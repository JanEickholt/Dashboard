import React, { useState } from "react";
import { X } from "lucide-react";

export default function FilterPanel({ currentFilters, applyFilters, onClose }) {
  const [filters, setFilters] = useState({
    dateRange: currentFilters.dateRange || "7d",
    metrics: currentFilters.metrics || "all",
    minUsers: currentFilters.minUsers || "",
    maxUsers: currentFilters.maxUsers || "",
    minRevenue: currentFilters.minRevenue || "",
    maxRevenue: currentFilters.maxRevenue || "",
    includeChannels: currentFilters.includeChannels || {
      organic: true,
      direct: true,
      referral: true,
      social: true,
      email: true,
      paid: true,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChannelToggle = (channel) => {
    setFilters((prev) => ({
      ...prev,
      includeChannels: {
        ...prev.includeChannels,
        [channel]: !prev.includeChannels[channel],
      },
    }));
  };

  const handleApply = () => {
    applyFilters(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      dateRange: "7d",
      metrics: "all",
      minUsers: "",
      maxUsers: "",
      minRevenue: "",
      maxRevenue: "",
      includeChannels: {
        organic: true,
        direct: true,
        referral: true,
        social: true,
        email: true,
        paid: true,
      },
    };
    setFilters(resetFilters);
    applyFilters(resetFilters);
  };

  return (
    <div className="mb-6 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-slate-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-slate-800 dark:text-white">
          Filter Options
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full bg-white dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-600 dark:text-white border border-slate-200 dark:border-gray-700"
        >
          <X size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
            Date Range
          </label>
          <select
            name="dateRange"
            value={filters.dateRange}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
            Metrics
          </label>
          <select
            name="metrics"
            value={filters.metrics}
            onChange={handleChange}
            className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
          >
            <option value="all">All metrics</option>
            <option value="users">Users only</option>
            <option value="revenue">Revenue only</option>
            <option value="engagement">Engagement only</option>
            <option value="conversion">Conversion only</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
            User Count Range
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="minUsers"
              value={filters.minUsers}
              onChange={handleChange}
              placeholder="Min"
              className="w-1/2 p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
            />
            <input
              type="number"
              name="maxUsers"
              value={filters.maxUsers}
              onChange={handleChange}
              placeholder="Max"
              className="w-1/2 p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
            Revenue Range ($)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              name="minRevenue"
              value={filters.minRevenue}
              onChange={handleChange}
              placeholder="Min"
              className="w-1/2 p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
            />
            <input
              type="number"
              name="maxRevenue"
              value={filters.maxRevenue}
              onChange={handleChange}
              placeholder="Max"
              className="w-1/2 p-2 border border-slate-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm text-slate-600 dark:text-slate-300 mb-2">
          Include Channels
        </label>
        <div className="flex flex-wrap gap-2">
          {Object.keys(filters.includeChannels).map((channel) => (
            <button
              key={channel}
              onClick={() => handleChannelToggle(channel)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${filters.includeChannels[channel]
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300"
                  : "bg-slate-100 text-slate-500 dark:bg-gray-700 dark:text-slate-400"
                }`}
            >
              {channel.charAt(0).toUpperCase() + channel.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 text-slate-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-slate-50 dark:hover:bg-gray-600"
        >
          Reset Filters
        </button>
        <button
          onClick={handleApply}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
