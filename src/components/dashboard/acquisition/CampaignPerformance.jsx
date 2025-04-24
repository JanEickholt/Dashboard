import React from "react";
import { campaignPerformanceData } from "../../../data/dashboardData";

export default function CampaignPerformance({ timeRange }) {
  return (
    <div className="bg-white dark:bg-dark p-6 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
        Campaign Performance
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 dark:text-slate-300 uppercase bg-slate-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 rounded-l-lg">Campaign</th>
              <th className="px-4 py-3">Impressions</th>
              <th className="px-4 py-3">Clicks</th>
              <th className="px-4 py-3">Conv.</th>
              <th className="px-4 py-3">CTR</th>
              <th className="px-4 py-3">CVR</th>
              <th className="px-4 py-3 rounded-r-lg">Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            {campaignPerformanceData[timeRange].map((campaign, index) => (
              <tr
                key={index}
                className="border-b border-slate-100 dark:border-gray-700 hover:bg-slate-50 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-300">
                  {campaign.campaign}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.impressions.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.clicks.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.conversions.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.ctr}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.cvr}
                </td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                  {campaign.cost.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
