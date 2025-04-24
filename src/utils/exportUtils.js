export const exportToCSV = (data, filename = "dashboard-export") => {
  if (!data || !data.length) {
    console.error("No data to export");
    return;
  }

  try {
    const headers = Object.keys(data[0]);

    const csvRows = [];

    csvRows.push(headers.join(","));

    data.forEach((row) => {
      const values = headers.map((header) => {
        const value = row[header];

        if (value === null || value === undefined) {
          return "";
        } else if (typeof value === "string") {
          const escaped = value.replace(/"/g, '""');
          if (
            escaped.includes(",") ||
            escaped.includes("\n") ||
            escaped.includes('"')
          ) {
            return `"${escaped}"`;
          }
          return escaped;
        } else if (typeof value === "number" || typeof value === "boolean") {
          return value;
        } else if (typeof value === "object") {
          const jsonStr = JSON.stringify(value).replace(/"/g, '""');
          return `"${jsonStr}"`;
        }
        return value;
      });

      csvRows.push(values.join(","));
    });

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, `${filename}.csv`);
    } else {
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.setAttribute("download", `${filename}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error("Error exporting data:", error);
  }
};

export const prepareDashboardDataForExport = (
  activeTab,
  timeRange,
  dashboardData,
  filterOptions = {},
  searchQuery = "",
) => {
  const currentDate = new Date().toISOString().split("T")[0];
  let data = [];
  let filename = `${activeTab}-${timeRange}-${currentDate}`;

  if (searchQuery) {
    filename += `-search(${searchQuery})`;
  }

  if (Object.keys(filterOptions).length > 0) {
    const filterParts = [];
    if (filterOptions.metrics && filterOptions.metrics !== "all") {
      filterParts.push(`metrics(${filterOptions.metrics})`);
    }
    if (filterOptions.minUsers) {
      filterParts.push(`minUsers(${filterOptions.minUsers})`);
    }
    if (filterOptions.maxUsers) {
      filterParts.push(`maxUsers(${filterOptions.maxUsers})`);
    }
    if (filterOptions.minRevenue) {
      filterParts.push(`minRev(${filterOptions.minRevenue})`);
    }
    if (filterOptions.maxRevenue) {
      filterParts.push(`maxRev(${filterOptions.maxRevenue})`);
    }

    if (filterParts.length > 0) {
      filename += `-${filterParts.join("-")}`;
    }
  }

  switch (activeTab) {
    case "overview":
      const performanceData = dashboardData.timeRangeData?.[timeRange] || [];
      data = performanceData.map((item) => ({
        ...item,
        category: "Performance",
        timeRange,
      }));

      const deviceData = dashboardData.deviceData?.[timeRange] || [];
      deviceData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Device",
          timeRange,
        });
      });

      const acquisitionData = dashboardData.acquisitionData?.[timeRange] || [];
      acquisitionData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Acquisition",
          timeRange,
        });
      });
      break;

    case "audience":
      const demographicsData =
        dashboardData.audienceDemographics?.[timeRange] || [];
      const geoData = dashboardData.audienceGeoData?.[timeRange] || [];
      const audienceEngagementData =
        dashboardData.audienceEngagementData?.[timeRange] || [];
      const audienceRetentionData =
        dashboardData.audienceRetentionData?.[timeRange] || [];
      const audienceLoyaltyData =
        dashboardData.audienceLoyaltyData?.[timeRange] || [];

      demographicsData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Demographics",
          timeRange,
        });
      });

      geoData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Geography",
          timeRange,
        });
      });

      audienceEngagementData.forEach((item) => {
        data.push({
          name: item.name,
          users: item.users,
          category: "Engagement",
          timeRange,
        });
      });

      audienceRetentionData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Retention",
          timeRange,
        });
      });

      audienceLoyaltyData.forEach((item) => {
        data.push({
          name: item.name,
          value: item.value,
          category: "Loyalty",
          timeRange,
        });
      });
      break;

    case "acquisition":
      const sourcesData =
        dashboardData.acquisitionSourcesData?.[timeRange] || [];
      const campaignData =
        dashboardData.campaignPerformanceData?.[timeRange] || [];
      const channelsData =
        dashboardData.channelsOverTimeData?.[timeRange] || [];
      const conversionData =
        dashboardData.conversionRatesData?.[timeRange] || [];
      const landingPageData = dashboardData.landingPageData?.[timeRange] || [];

      if (sourcesData.length) {
        sourcesData.forEach((item) => {
          data.push({
            name: item.name,
            value: item.value,
            category: "Traffic Source",
            timeRange,
          });
        });
      }

      if (campaignData.length) {
        campaignData.forEach((item) => {
          data.push({
            campaign: item.campaign,
            impressions: item.impressions,
            clicks: item.clicks,
            conversions: item.conversions,
            ctr: item.ctr,
            cvr: item.cvr,
            cost: item.cost,
            category: "Campaign",
            timeRange,
          });
        });
      }

      if (channelsData.length) {
        channelsData.forEach((item) => {
          data.push({
            name: item.name,
            organic: item.organic,
            paid: item.paid,
            direct: item.direct,
            social: item.social,
            referral: item.referral,
            category: "Channels Over Time",
            timeRange,
          });
        });
      }

      if (conversionData.length) {
        conversionData.forEach((item) => {
          data.push({
            name: item.name,
            rate: item.rate,
            category: "Conversion Rate",
            timeRange,
          });
        });
      }

      if (landingPageData.length) {
        landingPageData.forEach((item) => {
          data.push({
            page: item.page,
            visitors: item.visitors,
            bounce: item.bounce,
            convRate: item.convRate,
            avgTime: item.avgTime,
            category: "Landing Page",
            timeRange,
          });
        });
      }
      break;

    case "behavior":
      const pageViewsData = dashboardData.pageViewsData?.[timeRange] || [];
      const eventData = dashboardData.eventTrackingData?.[timeRange] || [];
      const exitPagesData = dashboardData.exitPagesData?.[timeRange] || [];
      const sessionDurationData =
        dashboardData.sessionDurationData?.[timeRange] || [];
      const userFlowData = dashboardData.userFlowData?.[timeRange] || [];

      if (pageViewsData.length) {
        pageViewsData.forEach((item) => {
          data.push({
            name: item.name,
            views: item.views,
            category: "Page Views",
            timeRange,
          });
        });
      }

      if (eventData.length) {
        eventData.forEach((item) => {
          data.push({
            name: item.name,
            count: item.count,
            users: item.users,
            perUser: item.perUser,
            category: "Event",
            timeRange,
          });
        });
      }

      if (exitPagesData.length) {
        exitPagesData.forEach((item) => {
          data.push({
            page: item.page,
            exits: item.exits,
            exitRate: item.exitRate,
            category: "Exit Pages",
            timeRange,
          });
        });
      }

      if (sessionDurationData.length) {
        sessionDurationData.forEach((item) => {
          data.push({
            name: item.name,
            users: item.users,
            category: "Session Duration",
            timeRange,
          });
        });
      }

      if (userFlowData.length) {
        userFlowData.forEach((item) => {
          data.push({
            source: item.source,
            target: item.target,
            value: item.value,
            category: "User Flow",
            timeRange,
          });
        });
      }
      break;

    case "conversions":
      const conversionRateData =
        dashboardData.conversionRateOverTimeData?.[timeRange] || [];
      const goalData = dashboardData.goalCompletionsData?.[timeRange] || [];
      const funnelData = dashboardData.funnelData?.[timeRange] || [];
      const revenueData = dashboardData.revenueMetricsData?.[timeRange] || [];
      const conversionBySourceData =
        dashboardData.conversionBySourceData?.[timeRange] || [];

      if (conversionRateData.length) {
        conversionRateData.forEach((item) => {
          data.push({
            name: item.name,
            rate: item.rate,
            category: "Conversion Rate",
            timeRange,
          });
        });
      }

      if (goalData.length) {
        goalData.forEach((item) => {
          data.push({
            name: item.name,
            value: item.value,
            category: "Goal",
            timeRange,
          });
        });
      }

      if (funnelData.length) {
        funnelData.forEach((item) => {
          data.push({
            name: item.name,
            value: item.value,
            category: "Funnel",
            timeRange,
          });
        });
      }

      if (revenueData.length) {
        revenueData.forEach((item) => {
          data.push({
            metric: item.metric,
            value: item.value,
            category: "Revenue",
            timeRange,
          });
        });
      }

      if (conversionBySourceData.length) {
        conversionBySourceData.forEach((item) => {
          data.push({
            name: item.name,
            value: item.value,
            category: "Conversion by Source",
            timeRange,
          });
        });
      }
      break;

    default:
      data = [];
      break;
  }

  return { data, filename };
};

export const formatTableDataForExport = (data) => {
  if (!data || !data.length) return [];

  return data.map((row) => {
    const formattedRow = {};
    Object.entries(row).forEach(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        formattedRow[key] = JSON.stringify(value);
      } else {
        formattedRow[key] = value;
      }
    });
    return formattedRow;
  });
};
