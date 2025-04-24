import React from "react";
import ConversionRate from "./ConversionRate";
import GoalCompletions from "./GoalCompletions";
import FunnelVisualization from "./FunnelVisualization";
import RevenueMetrics from "./RevenueMetrics";
import ConversionBySource from "./ConversionBySource";

export default function Conversions({ timeRange, darkMode }) {
  return (
    <>
      {/* Top row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <ConversionRate timeRange={timeRange} darkMode={darkMode} />
        <ConversionBySource timeRange={timeRange} darkMode={darkMode} />
        <GoalCompletions timeRange={timeRange} darkMode={darkMode} />
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <FunnelVisualization timeRange={timeRange} darkMode={darkMode} />
        <RevenueMetrics timeRange={timeRange} />
      </div>
    </>
  );
}
