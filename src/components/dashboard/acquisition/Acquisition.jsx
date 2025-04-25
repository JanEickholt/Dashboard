import React from "react";
import AcquisitionSources from "./AcquisitionSources";
import CampaignPerformance from "./CampaignPerformance";
import ChannelsOverTime from "./ChannelsOverTime";
import ConversionRates from "./ConversionRates";
import LandingPagePerformance from "./LandingPagePerformance";

export default function Acquisition({ timeRange, darkMode }) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <AcquisitionSources timeRange={timeRange} darkMode={darkMode} />
        <ConversionRates timeRange={timeRange} darkMode={darkMode} />
        <ChannelsOverTime timeRange={timeRange} darkMode={darkMode} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <CampaignPerformance timeRange={timeRange} />
        <LandingPagePerformance timeRange={timeRange} />
      </div>
    </>
  );
}
