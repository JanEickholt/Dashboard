import { filterDashboardData } from "./filterUtils";
import { exportToCSV, prepareDashboardDataForExport } from "./exportUtils";

export class ExportManager {
  static async exportDashboardData(
    activeTab,
    timeRange,
    allDashboardData,
    filterOptions = {},
    searchQuery = "",
  ) {
    try {
      const { data: rawData, filename } = prepareDashboardDataForExport(
        activeTab,
        timeRange,
        allDashboardData,
        filterOptions,
        searchQuery,
      );

      let exportData = rawData;

      if (
        (filterOptions &&
          Object.keys(filterOptions).some((key) => filterOptions[key])) ||
        (searchQuery && searchQuery.trim() !== "")
      ) {
        exportData = this.applyFiltersToExportData(
          rawData,
          searchQuery,
          filterOptions,
        );
      }

      if (!exportData || exportData.length === 0) {
        return {
          success: false,
          message: "No data available to export with the current filters.",
          data: null,
        };
      }

      exportToCSV(exportData, filename);

      return {
        success: true,
        message: `Successfully exported ${exportData.length} records to ${filename}.csv`,
        data: {
          count: exportData.length,
          filename: `${filename}.csv`,
        },
      };
    } catch (error) {
      console.error("Error in exportDashboardData:", error);
      return {
        success: false,
        message: "An error occurred while preparing the export data.",
        error,
      };
    }
  }

  static applyFiltersToExportData(data, searchQuery, filterOptions) {
    if (!data || data.length === 0) return [];

    let filteredData = [...data];

    if (searchQuery && searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();

      filteredData = filteredData.filter((item) => {
        return Object.entries(item).some(([key, value]) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(query);
          } else if (typeof value === "number") {
            return value.toString().includes(query);
          } else if (typeof value === "object" && value !== null) {
            return JSON.stringify(value).toLowerCase().includes(query);
          }
          return false;
        });
      });
    }

    if (filterOptions.metrics && filterOptions.metrics !== "all") {
      switch (filterOptions.metrics) {
        case "users":
          filteredData = filteredData.filter(
            (item) =>
              item.users !== undefined ||
              item.visitors !== undefined ||
              item.value !== undefined ||
              item.category?.toLowerCase().includes("user") ||
              item.category?.toLowerCase().includes("audience"),
          );
          break;
        case "revenue":
          filteredData = filteredData.filter(
            (item) =>
              item.revenue !== undefined ||
              item.cost !== undefined ||
              item.value !== undefined ||
              item.category?.toLowerCase().includes("revenue") ||
              item.category?.toLowerCase().includes("conversion"),
          );
          break;
        case "engagement":
          filteredData = filteredData.filter(
            (item) =>
              item.engagement !== undefined ||
              item.avgTime !== undefined ||
              item.session !== undefined ||
              item.views !== undefined ||
              item.category?.toLowerCase().includes("engagement") ||
              item.category?.toLowerCase().includes("session"),
          );
          break;
        case "conversion":
          filteredData = filteredData.filter(
            (item) =>
              item.conversion !== undefined ||
              item.convRate !== undefined ||
              item.cvr !== undefined ||
              item.rate !== undefined ||
              item.category?.toLowerCase().includes("conversion") ||
              item.category?.toLowerCase().includes("goal"),
          );
          break;
      }
    }

    if (filterOptions.minUsers && !isNaN(filterOptions.minUsers)) {
      filteredData = filteredData.filter((item) => {
        const users = item.users || item.visitors || item.value;
        return users && users >= Number(filterOptions.minUsers);
      });
    }

    if (filterOptions.maxUsers && !isNaN(filterOptions.maxUsers)) {
      filteredData = filteredData.filter((item) => {
        const users = item.users || item.visitors || item.value;
        return users && users <= Number(filterOptions.maxUsers);
      });
    }

    if (filterOptions.minRevenue && !isNaN(filterOptions.minRevenue)) {
      filteredData = filteredData.filter((item) => {
        const revenue = item.revenue || item.value || item.cost;
        return revenue && revenue >= Number(filterOptions.minRevenue);
      });
    }

    if (filterOptions.maxRevenue && !isNaN(filterOptions.maxRevenue)) {
      filteredData = filteredData.filter((item) => {
        const revenue = item.revenue || item.value || item.cost;
        return revenue && revenue <= Number(filterOptions.maxRevenue);
      });
    }

    if (
      filterOptions.includeChannels &&
      Object.values(filterOptions.includeChannels).some((val) => val === false)
    ) {
      filteredData = filteredData.filter((item) => {
        if (!item.name && !item.category) return true;

        if (item.name) {
          const name = item.name.toLowerCase();
          for (const [channel, include] of Object.entries(
            filterOptions.includeChannels,
          )) {
            if (!include && name.includes(channel.toLowerCase())) {
              return false;
            }
          }
        }

        if (item.category) {
          const category = item.category.toLowerCase();
          for (const [channel, include] of Object.entries(
            filterOptions.includeChannels,
          )) {
            if (!include && category.includes(channel.toLowerCase())) {
              return false;
            }
          }
        }

        return true;
      });
    }

    return filteredData;
  }
}
