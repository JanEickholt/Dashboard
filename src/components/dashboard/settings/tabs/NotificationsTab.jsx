import React, { useState } from "react";
import SettingsToggle from "../ui/SettingsToggle";

export default function NotificationsTab({ onClose }) {
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    dashboardUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    newFeatures: true,
  });

  const handleNotificationToggle = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  return (
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
        Control which notifications you receive from the dashboard.
      </p>

      <div className="space-y-1">
        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Email Notifications"
            description="Receive email notifications for important updates"
            enabled={notificationSettings.emailNotifications}
            onChange={() => handleNotificationToggle("emailNotifications")}
          />
        </div>

        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Dashboard Updates"
            description="Get notified when dashboard data is refreshed"
            enabled={notificationSettings.dashboardUpdates}
            onChange={() => handleNotificationToggle("dashboardUpdates")}
          />
        </div>

        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Security Alerts"
            description="Be notified about security-related events"
            enabled={notificationSettings.securityAlerts}
            onChange={() => handleNotificationToggle("securityAlerts")}
          />
        </div>

        <div className="border-b border-slate-200 dark:border-gray-700">
          <SettingsToggle
            label="Marketing Emails"
            description="Receive occasional newsletters and promotions"
            enabled={notificationSettings.marketingEmails}
            onChange={() => handleNotificationToggle("marketingEmails")}
          />
        </div>

        <div>
          <SettingsToggle
            label="New Features"
            description="Get notified when new features are released"
            enabled={notificationSettings.newFeatures}
            onChange={() => handleNotificationToggle("newFeatures")}
          />
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
