import React from "react";
import PageViews from "./PageViews";
import ETracking from "./ETracking";
import UserFlow from "./UserFlow";
import SessionDuration from "./SessionDuration";
import ExitPages from "./ExitPages";

export default function Behavior({ timeRange, darkMode }) {
  return (
    <>
      {/* Top row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PageViews timeRange={timeRange} darkMode={darkMode} />

        <SessionDuration timeRange={timeRange} darkMode={darkMode} />
        <UserFlow timeRange={timeRange} darkMode={darkMode} />
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ETracking timeRange={timeRange} />
        <ExitPages timeRange={timeRange} />
      </div>
    </>
  );
}
