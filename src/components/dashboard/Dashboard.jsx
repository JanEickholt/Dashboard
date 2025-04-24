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
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOptions, setFilterOptions] = useState({
    dateRange: "7d",
    metrics: "all",
  });
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
    setActiveDropdown(null); // Close other dropdowns when opening filter
  };

  // Function to toggle Dropdowns, like settings and profile
  const toggleDropdown = (dropdown) => {
    if (dropdown === activeDropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
      setFilterOpen(false); // Close filter panel when opening dropdowns
    }
  };

  // Function to handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to apply filters
  const applyFilters = (newFilters) => {
    setFilterOptions(newFilters);
    // Since dateRange filter affects the whole dashboard, we update timeRange
    if (newFilters.dateRange !== filterOptions.dateRange) {
      setTimeRange(newFilters.dateRange);
    }
    setFilterOpen(false); // Close filter panel after applying
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
      {/* Filter panel */}
      {filterOpen && (
        <div className="absolute z-10 left-6 right-6 mt-2">
          <FilterPanel
            currentFilters={filterOptions}
            applyFilters={applyFilters}
            onClose={() => setFilterOpen(false)}
          />
        </div>
      )}
      {/* Filters section */}
      <FilterSection
        timeRange={timeRange}
        setTimeRange={setTimeRange}
        setTimeRangeChanging={setTimeRangeChanging}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
        toggleFilter={toggleFilter}
        filterActive={filterOpen}
        handleExport={handleExport}
      />
      {/* KPI summary cards */}
      <KPICards timeRange={timeRange} />
      {/* Navigation tabs */}
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Render different content based on active tab */}
      {activeTab === "overview" && (
        <Overview
          timeRange={timeRange}
          darkMode={darkMode}
          searchQuery={searchQuery}
          filterOptions={filterOptions}
        />
      )}
      {/* Audience tab content */}
      {activeTab === "audience" && (
        <Audience
          timeRange={timeRange}
          darkMode={darkMode}
          searchQuery={searchQuery}
          filterOptions={filterOptions}
        />
      )}
      {/* Acquisition tab content */}
      {activeTab === "acquisition" && (
        <Acquisition
          timeRange={timeRange}
          darkMode={darkMode}
          searchQuery={searchQuery}
          filterOptions={filterOptions}
        />
      )}
      {/* Behavior tab content */}
      {activeTab === "behavior" && (
        <Behavior
          timeRange={timeRange}
          darkMode={darkMode}
          searchQuery={searchQuery}
          filterOptions={filterOptions}
        />
      )}
      {/* Conversions tab content */}
      {activeTab === "conversions" && (
        <Conversions
          timeRange={timeRange}
          darkMode={darkMode}
          searchQuery={searchQuery}
          filterOptions={filterOptions}
        />
      )}
    </div>
  );
}
