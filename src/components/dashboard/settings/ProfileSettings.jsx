import React, { useState } from "react";
import SettingsHeader from "./ui/SettingsHeader";
import SettingsSidebar from "./ui/SettingsSidebar";
import ProfileTab from "./tabs/ProfileTab";
import AccountTab from "./tabs/AccountTab";
import NotificationsTab from "./tabs/NotificationsTab";
import AppearanceTab from "./tabs/AppearanceTab";
import PrivacyTab from "./tabs/PrivacyTab";

export default function ProfileSettings({ onClose, darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("profile");
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab onClose={onClose} />;
      case "account":
        return <AccountTab onClose={onClose} />;
      case "notifications":
        return <NotificationsTab onClose={onClose} />;
      case "appearance":
        return (
          <AppearanceTab
            onClose={onClose}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        );
      case "privacy":
        return <PrivacyTab onClose={onClose} />;
      default:
        return <ProfileTab onClose={onClose} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <SettingsHeader onClose={onClose} />

        <div className="flex flex-col md:flex-row">
          {/* Sidebar navigation */}
          <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Tab content */}
          <div className="flex-1 p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
