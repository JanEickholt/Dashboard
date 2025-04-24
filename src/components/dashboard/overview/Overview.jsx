import React from "react";
import PerformanceChart from "./PerformanceChart";
import DeviceDistribution from "./DeviceDistribution";
import AcquisitionChannels from "./AcquisitionChannels";
import TopPerformingContent from "./TopPerformingContent";

export default function Overview({ timeRange, darkMode }) {
  return (
    <>
      {/* Main charts grid - Overview content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PerformanceChart timeRange={timeRange} darkMode={darkMode} />
        <DeviceDistribution timeRange={timeRange} darkMode={darkMode} />
      </div>

      {/* Bottom row charts - Overview content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AcquisitionChannels timeRange={timeRange} darkMode={darkMode} />
        <TopPerformingContent timeRange={timeRange} />
      </div>
    </>
  );
}
