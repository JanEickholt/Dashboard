// Sample data - organized by time range
export const timeRangeData = {
  "24h": [
    { name: "12am", users: 1200, revenue: 580, engagement: 700 },
    { name: "6am", users: 800, revenue: 420, engagement: 650 },
    { name: "12pm", users: 2400, revenue: 1800, engagement: 1500 },
    { name: "6pm", users: 3200, revenue: 2400, engagement: 2100 },
  ],
  "7d": [
    { name: "Mon", users: 4000, revenue: 2400, engagement: 2400 },
    { name: "Tue", users: 3000, revenue: 1398, engagement: 2210 },
    { name: "Wed", users: 2000, revenue: 9800, engagement: 2290 },
    { name: "Thu", users: 2780, revenue: 3908, engagement: 2000 },
    { name: "Fri", users: 1890, revenue: 4800, engagement: 2181 },
    { name: "Sat", users: 2390, revenue: 3800, engagement: 2500 },
    { name: "Sun", users: 3490, revenue: 4300, engagement: 2100 },
  ],
  "30d": [
    { name: "Week 1", users: 11000, revenue: 8400, engagement: 7900 },
    { name: "Week 2", users: 12500, revenue: 9100, engagement: 8200 },
    { name: "Week 3", users: 14200, revenue: 11800, engagement: 9100 },
    { name: "Week 4", users: 13800, revenue: 10900, engagement: 8800 },
  ],
  "90d": [
    { name: "Jan", users: 32000, revenue: 21400, engagement: 18400 },
    { name: "Feb", users: 28000, revenue: 19300, engagement: 17200 },
    { name: "Mar", users: 34500, revenue: 24800, engagement: 21200 },
  ],
};

export const kpiData = {
  "24h": [
    { title: "Total Users", value: "2,385", change: "+5.2%", positive: true },
    { title: "Revenue", value: "$12,632", change: "+3.1%", positive: true },
    {
      title: "Conversion Rate",
      value: "3.12%",
      change: "+0.8%",
      positive: true,
    },
    { title: "Avg. Session", value: "1m 45s", change: "+6.3%", positive: true },
  ],
  "7d": [
    { title: "Total Users", value: "14,385", change: "+12.4%", positive: true },
    { title: "Revenue", value: "$89,432", change: "+8.2%", positive: true },
    {
      title: "Conversion Rate",
      value: "3.42%",
      change: "-0.5%",
      positive: false,
    },
    {
      title: "Avg. Session",
      value: "2m 45s",
      change: "+18.3%",
      positive: true,
    },
  ],
  "30d": [
    { title: "Total Users", value: "54,825", change: "+15.8%", positive: true },
    { title: "Revenue", value: "$354,212", change: "+12.7%", positive: true },
    {
      title: "Conversion Rate",
      value: "3.81%",
      change: "+1.2%",
      positive: true,
    },
    {
      title: "Avg. Session",
      value: "3m 12s",
      change: "+11.5%",
      positive: true,
    },
  ],
  "90d": [
    {
      title: "Total Users",
      value: "124,385",
      change: "+22.5%",
      positive: true,
    },
    { title: "Revenue", value: "$984,232", change: "+18.2%", positive: true },
    {
      title: "Conversion Rate",
      value: "3.94%",
      change: "+2.1%",
      positive: true,
    },
    {
      title: "Avg. Session",
      value: "3m 28s",
      change: "+15.3%",
      positive: true,
    },
  ],
};

const barData = [
  { name: "Desktop", value: 400 },
  { name: "Mobile", value: 300 },
  { name: "Tablet", value: 200 },
  { name: "Other", value: 100 },
];

export const deviceData = {
  "24h": [
    { name: "Desktop", value: 340 },
    { name: "Mobile", value: 520 },
    { name: "Tablet", value: 140 },
    { name: "Other", value: 40 },
  ],
  "7d": barData,
  "30d": [
    { name: "Desktop", value: 1500 },
    { name: "Mobile", value: 2200 },
    { name: "Tablet", value: 850 },
    { name: "Other", value: 450 },
  ],
  "90d": [
    { name: "Desktop", value: 4800 },
    { name: "Mobile", value: 7200 },
    { name: "Tablet", value: 2600 },
    { name: "Other", value: 1400 },
  ],
};

// Define acquisition data by time range
export const acquisitionData = {
  "24h": [
    { name: "Direct", value: 240 },
    { name: "Social", value: 380 },
    { name: "Organic", value: 180 },
    { name: "Referral", value: 120 },
  ],
  "7d": [
    { name: "Direct", value: 400 },
    { name: "Social", value: 300 },
    { name: "Organic", value: 300 },
    { name: "Referral", value: 200 },
  ],
  "30d": [
    { name: "Direct", value: 1200 },
    { name: "Social", value: 1800 },
    { name: "Organic", value: 1400 },
    { name: "Referral", value: 900 },
  ],
  "90d": [
    { name: "Direct", value: 4500 },
    { name: "Social", value: 5200 },
    { name: "Organic", value: 3800 },
    { name: "Referral", value: 2300 },
  ],
};

export const topPerformingData = {
  "24h": [
    {
      title: "Homepage",
      views: "12,458",
      conversion: "2.4%",
      engagement: "1m 12s",
    },
    {
      title: "Product Features",
      views: "8,532",
      conversion: "3.7%",
      engagement: "1m 52s",
    },
    {
      title: "Pricing Plans",
      views: "6,218",
      conversion: "4.9%",
      engagement: "2m 34s",
    },
    {
      title: "Blog: Latest Update",
      views: "5,641",
      conversion: "1.6%",
      engagement: "3m 22s",
    },
    {
      title: "Resources",
      views: "4,782",
      conversion: "2.1%",
      engagement: "1m 48s",
    },
  ],
  "7d": [
    {
      title: "Homepage",
      views: "45,321",
      conversion: "2.8%",
      engagement: "1m 45s",
    },
    {
      title: "Product Features",
      views: "32,984",
      conversion: "4.2%",
      engagement: "2m 38s",
    },
    {
      title: "Pricing Plans",
      views: "28,143",
      conversion: "5.7%",
      engagement: "3m 12s",
    },
    {
      title: "Blog: 10 Tips for Success",
      views: "21,032",
      conversion: "1.9%",
      engagement: "4m 07s",
    },
    {
      title: "Resources Center",
      views: "18,542",
      conversion: "2.3%",
      engagement: "2m 29s",
    },
  ],
  "30d": [
    {
      title: "Homepage",
      views: "156,842",
      conversion: "3.2%",
      engagement: "2m 15s",
    },
    {
      title: "Product Features",
      views: "124,573",
      conversion: "4.8%",
      engagement: "3m 22s",
    },
    {
      title: "Pricing Plans",
      views: "98,214",
      conversion: "6.3%",
      engagement: "3m 56s",
    },
    {
      title: "Blog: Industry Insights",
      views: "87,423",
      conversion: "2.4%",
      engagement: "4m 48s",
    },
    {
      title: "Support Documentation",
      views: "76,329",
      conversion: "2.7%",
      engagement: "3m 12s",
    },
  ],
  "90d": [
    {
      title: "Homepage",
      views: "423,756",
      conversion: "3.5%",
      engagement: "2m 38s",
    },
    {
      title: "Product Features",
      views: "354,218",
      conversion: "5.2%",
      engagement: "3m 47s",
    },
    {
      title: "Pricing Plans",
      views: "287,629",
      conversion: "6.8%",
      engagement: "4m 23s",
    },
    {
      title: "Blog: Complete Guide",
      views: "245,871",
      conversion: "2.8%",
      engagement: "5m 12s",
    },
    {
      title: "API Documentation",
      views: "213,564",
      conversion: "3.1%",
      engagement: "4m 05s",
    },
  ],
};

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
