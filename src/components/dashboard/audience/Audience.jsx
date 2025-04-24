import React from "react";
import AudienceDemographics from "./AudienceDemographics";
import AudienceGeo from "./AudienceGeo";
import AudienceEngagement from "./AudienceEngagement";
import AudienceRetention from "./AudienceRetention";
import AudienceLoyalty from "./AudienceLoyalty";

export default function Audience({ timeRange, darkMode }) {
  return (
    <>
      {/* Top row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <AudienceEngagement timeRange={timeRange} darkMode={darkMode} />
        <AudienceRetention timeRange={timeRange} darkMode={darkMode} />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <AudienceDemographics timeRange={timeRange} darkMode={darkMode} />
        <AudienceGeo timeRange={timeRange} darkMode={darkMode} />
        <AudienceLoyalty timeRange={timeRange} darkMode={darkMode} />
      </div>
    </>
  );
}
