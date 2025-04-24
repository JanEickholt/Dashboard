import React, { useMemo } from "react";
import PerformanceChart from "./PerformanceChart";
import DeviceDistribution from "./DeviceDistribution";
import AcquisitionChannels from "./AcquisitionChannels";
import TopPerformingContent from "./TopPerformingContent";
import {
  filterDashboardData,
  hasActiveFilters,
} from "../../../utils/filterUtils";
import {
  timeRangeData,
  deviceData,
  acquisitionData,
  topPerformingData,
} from "../../../data/dashboardData";

export default function Overview({
  timeRange,
  darkMode,
  searchQuery,
  filterOptions,
}) {
  const hasFilters = useMemo(() => {
    return (
      hasActiveFilters(filterOptions) ||
      (searchQuery && searchQuery.trim() !== "")
    );
  }, [filterOptions, searchQuery]);

  const filteredPerformanceData = useMemo(() => {
    return filterDashboardData(
      timeRangeData[timeRange],
      searchQuery,
      filterOptions,
    );
  }, [timeRange, searchQuery, filterOptions]);

  const filteredDeviceData = useMemo(() => {
    return filterDashboardData(
      deviceData[timeRange],
      searchQuery,
      filterOptions,
      { isChannelData: true },
    );
  }, [timeRange, searchQuery, filterOptions]);

  const filteredAcquisitionData = useMemo(() => {
    return filterDashboardData(
      acquisitionData[timeRange],
      searchQuery,
      filterOptions,
      { isChannelData: true },
    );
  }, [timeRange, searchQuery, filterOptions]);

  const filteredTopPerformingData = useMemo(() => {
    return filterDashboardData(
      topPerformingData[timeRange],
      searchQuery,
      filterOptions,
    );
  }, [timeRange, searchQuery, filterOptions]);

  return (
    <>
      {/* Filter indicator */}
      {hasFilters && (
        <div className="mb-4 px-4 py-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg text-blue-700 dark:text-blue-300">
          <p className="text-sm font-medium">
            {searchQuery ? `Search: "${searchQuery}" ` : ""}
            {filterOptions.metrics !== "all" &&
              `• Metric: ${filterOptions.metrics} `}
            {filterOptions.minUsers &&
              `• Min Users: ${filterOptions.minUsers} `}
            {filterOptions.maxUsers &&
              `• Max Users: ${filterOptions.maxUsers} `}
            {filterOptions.minRevenue &&
              `• Min Revenue: $${filterOptions.minRevenue} `}
            {filterOptions.maxRevenue &&
              `• Max Revenue: $${filterOptions.maxRevenue} `}
          </p>
        </div>
      )}

      {/* Main charts grid - Overview content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PerformanceChart
          timeRange={timeRange}
          darkMode={darkMode}
          data={filteredPerformanceData}
        />
        <DeviceDistribution
          timeRange={timeRange}
          darkMode={darkMode}
          data={filteredDeviceData}
        />
      </div>

      {/* Bottom row charts - Overview content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AcquisitionChannels
          timeRange={timeRange}
          darkMode={darkMode}
          data={filteredAcquisitionData}
        />
        <TopPerformingContent
          timeRange={timeRange}
          data={filteredTopPerformingData}
        />
      </div>
    </>
  );
}
