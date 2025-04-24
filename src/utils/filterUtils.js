export const filterDashboardData = (
  data,
  searchQuery,
  filterOptions,
  options = {},
) => {
  if (!data) return [];

  let filteredData = [...data];

  if (searchQuery && searchQuery.trim() !== "") {
    const query = searchQuery.toLowerCase().trim();

    filteredData = filteredData.filter((item) => {
      return Object.entries(item).some(([key, value]) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        } else if (typeof value === "number") {
          return value.toString().includes(query);
        }
        return false;
      });
    });
  }

  if (filterOptions.metrics && filterOptions.metrics !== "all") {
    if (options.metricKey) {
      filteredData = filteredData.filter((item) => {
        const metric = options.metricKey;
        return item[metric] !== undefined;
      });
    } else {
      switch (filterOptions.metrics) {
        case "users":
          filteredData = filteredData.filter(
            (item) =>
              item.users !== undefined ||
              item.visitors !== undefined ||
              item.value !== undefined,
          );
          break;
        case "revenue":
          filteredData = filteredData.filter(
            (item) =>
              item.revenue !== undefined ||
              item.cost !== undefined ||
              item.value !== undefined,
          );
          break;
        case "engagement":
          filteredData = filteredData.filter(
            (item) =>
              item.engagement !== undefined ||
              item.avgTime !== undefined ||
              item.session !== undefined,
          );
          break;
        case "conversion":
          filteredData = filteredData.filter(
            (item) =>
              item.conversion !== undefined ||
              item.convRate !== undefined ||
              item.cvr !== undefined ||
              item.rate !== undefined,
          );
          break;
      }
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
    if (options.isChannelData) {
      filteredData = filteredData.filter((item) => {
        const name = item.name?.toLowerCase();
        if (!name) return true;

        for (const [channel, include] of Object.entries(
          filterOptions.includeChannels,
        )) {
          if (!include && name.includes(channel.toLowerCase())) {
            return false;
          }
        }
        return true;
      });
    }
  }

  return filteredData;
};

export const hasActiveFilters = (filterOptions) => {
  if (!filterOptions) return false;

  if (filterOptions.metrics && filterOptions.metrics !== "all") return true;
  if (filterOptions.minUsers) return true;
  if (filterOptions.maxUsers) return true;
  if (filterOptions.minRevenue) return true;
  if (filterOptions.maxRevenue) return true;

  if (filterOptions.includeChannels) {
    if (
      Object.values(filterOptions.includeChannels).some((val) => val === false)
    ) {
      return true;
    }
  }

  return false;
};
