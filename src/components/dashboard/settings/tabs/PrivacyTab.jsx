import React, { useState } from "react";
import SettingsToggle from "../ui/SettingsToggle";

export default function PrivacyTab({ onClose }) {
  const [privacySettings, setPrivacySettings] = useState({
    shareUsageData: true,
    allowCookies: true,
    showOnlineStatus: true,
  });

  const handlePrivacyToggle = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting],
    });
  };

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Control your privacy settings and manage your data.
      </p>

      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Share Usage Data"
            description="Help improve the dashboard by sharing anonymous usage data"
            enabled={privacySettings.shareUsageData}
            onChange={() => handlePrivacyToggle("shareUsageData")}
          />
        </div>

        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Allow Cookies"
            description="Enable cookies to improve your browsing experience"
            enabled={privacySettings.allowCookies}
            onChange={() => handlePrivacyToggle("allowCookies")}
          />
        </div>

        <div>
          <SettingsToggle
            label="Show Online Status"
            description="Let others see when you're online"
            enabled={privacySettings.showOnlineStatus}
            onChange={() => handlePrivacyToggle("showOnlineStatus")}
          />
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-gray-700">
        <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
          Data Management
        </h3>
        <div className="space-y-4">
          <button className="flex items-center justify-between w-full p-3 border border-slate-200 dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-slate-300 dark:bg-gray-800">
            <span>Export Personal Data</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Download all your data in a CSV format
            </span>
          </button>
          <button className="flex items-center justify-between w-full p-3 border border-red-200 dark:border-red-900 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 dark:bg-gray-800">
            <span>Delete Account</span>
            <span className="text-sm">
              Permanently remove your account and all data
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
