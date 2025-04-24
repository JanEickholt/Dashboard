import { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import KPICards from "./KPICards";
import NavigationTabs from "./NavigationTabs";
import FilterSection from "./FilterSection";
import NotificationsDropdown from "./dropdowns/NotificationsDropdown";
import SettingsDropdown from "./dropdowns/SettingsDropdown";
import UserMenu from "./dropdowns/UserMenu";
import FilterPanel from "./dropdowns/FilterPanel";
import Overview from "./overview/Overview";
import Audience from "./audience/Audience";
import Acquisition from "./acquisition/Acquisition";
import Behavior from "./behavior/Behavior";
import Conversions from "./conversions/Conversions";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("7d");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [timeRangeChanging, setTimeRangeChanging] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" ? true : false;
  });

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Function to handle data refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      alert("Data refreshed successfully!");
    }, 250);
  };

  // Function to handle export
  const handleExport = () => {
    alert("Exporting data as CSV...");
  };

  // Function to toggle filter panel
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  // Function to toggle Dropdowns, like settings and profile
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-slate-50 dark:bg-dark dark:text-white min-h-screen p-6">
      <DashboardHeader
        isRefreshing={isRefreshing}
        showNotifications={activeDropdown === "notifications"}
        showSettings={activeDropdown === "settings"}
        handleRefresh={handleRefresh}
        toggleNotifications={() => toggleDropdown("notifications")}
        toggleSettings={() => toggleDropdown("settings")}
        toggleUserMenu={() => toggleDropdown("user")}
      />
      {/* Dropdown menus */}
      {activeDropdown === "notifications" && <NotificationsDropdown />}
      {activeDropdown === "settings" && (
        <SettingsDropdown darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      {activeDropdown === "user" && <UserMenu />}
      {/* Filters section */}
      <FilterSection
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        setTimeRangeChanging={setTimeRangeChanging}
      />
      {/* KPI summary cards */}
      <KPICards timeRange={timeRange} />
      {/* Navigation tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Render different content based on active tab */}
      {activeTab === "overview" && (
        <Overview timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Audience tab content */}
      {activeTab === "audience" && (
        <Audience timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Acquisition tab content */}
      {activeTab === "acquisition" && (
        <Acquisition timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Behavior tab content */}
      {activeTab === "behavior" && (
        <Behavior timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Conversions tab content */}
      {activeTab === "conversions" && (
        <Conversions timeRange={timeRange} darkMode={darkMode} />
      )}
    </div>
  );
}
