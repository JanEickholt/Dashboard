import React from "react";
import TabNavItem from "./TabNavItem";
import { User, Bell, Eye, Shield } from "lucide-react";

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "account", label: "Account", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Eye },
  { id: "privacy", label: "Privacy", icon: Shield },
];

export default function SettingsSidebar({ activeTab, onTabChange }) {
  return (
    <div className="w-full md:w-64 p-6 border-r border-slate-200 dark:border-gray-700 shrink-0">
      <nav className="space-y-1">
        {TABS.map((tab) => (
          <TabNavItem
            key={tab.id}
            id={tab.id}
            label={tab.label}
            Icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          />
        ))}
      </nav>
    </div>
  );
}
