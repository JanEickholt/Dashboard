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
import Audience from "./audience/Audience";
import Acquisition from "./acquisition/Acquisition";

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
        <>
          {/* Main charts grid - Overview content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <PerformanceChart timeRange={timeRange} darkMode={darkMode} />
            <DeviceDistribution timeRange={timeRange} darkMode={darkMode} />
          </div>

          {/* Bottom row charts - Overview content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <AcquisitionChannels timeRange={timeRange} darkMode={darkMode} />
            <TopPerformingContent timeRange={timeRange} />
          </div>
        </>
      )}
      {/* Audience tab content */}
      {activeTab === "audience" && (
        <Audience timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Acquisition tab content */}
      {activeTab === "acquisition" && (
        <Acquisition timeRange={timeRange} darkMode={darkMode} />
      )}
      {/* Placeholder for other tabs */}
      {activeTab === "behavior" && (
        <div className="p-6 bg-white dark:bg-dark rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
            Behavior Tab
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Behavior content will be displayed here.
          </p>
        </div>
      )}
      {activeTab === "conversions" && (
        <div className="p-6 bg-white dark:bg-dark rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
            Conversions Tab
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Conversions content will be displayed here.
          </p>
        </div>
      )}{" "}
    </div>
  );
}
