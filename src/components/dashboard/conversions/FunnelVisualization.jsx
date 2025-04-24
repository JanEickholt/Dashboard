import React from "react";
import { funnelData } from "../../../data/dashboardData";

export default function FunnelVisualization({ timeRange, darkMode }) {
  const data = funnelData[timeRange];
  const maxValue = Math.max(...data.map((item) => item.value));

  // Calculate conversion rates between funnel steps
  const conversionRates = [];
  for (let i = 1; i < data.length; i++) {
    const rate = ((data[i].value / data[i - 1].value) * 100).toFixed(1);
    conversionRates.push(`${rate}%`);
  }

  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Conversion Funnel
      </h2>

      <div className="space-y-4">
        {data.map((item, index) => {
          const width = `${(item.value / maxValue) * 100}%`;
          const isFirst = index === 0;
          const isLast = index === data.length - 1;

          return (
            <div key={item.name} className="relative">
              <div className="flex items-center mb-1">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 w-32">
                  {item.name}
                </span>
                <div className="flex-1 h-12 bg-slate-100 dark:bg-gray-800 rounded-md overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 dark:bg-indigo-500 rounded-md flex items-center justify-end px-3"
                    style={{ width }}
                  >
                    <span className="text-white text-sm font-medium">
                      {item.value.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className="pl-32 flex items-center pb-1">
                  <div className="w-8 flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-slate-400 dark:text-slate-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {conversionRates[index]} conversion rate to next step
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 border-t border-slate-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between text-sm">
          <div>
            <p className="font-medium text-slate-700 dark:text-slate-300">
              Overall Conversion Rate
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Visitor to Purchase
            </p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">
              {((data[data.length - 1].value / data[0].value) * 100).toFixed(2)}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
