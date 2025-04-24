import { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import KPICards from "./KPICards";
import NavigationTabs from "./NavigationTabs";
import PerformanceChart from "./PerformanceChart";
import DeviceDistribution from "./DeviceDistribution";
import AcquisitionChannels from "./AcquisitionChannels";
import TopPerformingContent from "./TopPerformingContent";
import FilterSection from "./FilterSection";
import NotificationsDropdown from "./dropdowns/NotificationsDropdown";
import SettingsDropdown from "./dropdowns/SettingsDropdown";
import UserMenu from "./dropdowns/UserMenu";
import FilterPanel from "./dropdowns/FilterPanel";

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
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      alert("Data refreshed successfully!");
    }, 1000);
  };

  // Function to handle export
  const handleExport = () => {
    alert("Exporting data as CSV...");
    // In a real app, this would trigger a file download
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

      {/* Main charts grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PerformanceChart timeRange={timeRange} darkMode={darkMode} />
        <DeviceDistribution timeRange={timeRange} darkMode={darkMode} />
      </div>

      {/* Bottom row charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AcquisitionChannels timeRange={timeRange} darkMode={darkMode} />
        <TopPerformingContent timeRange={timeRange} />
      </div>
    </div>
  );
}
