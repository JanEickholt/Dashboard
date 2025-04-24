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

export const audienceDemographics = {
  "24h": [
    { name: "18-24", value: 280 },
    { name: "25-34", value: 420 },
    { name: "35-44", value: 350 },
    { name: "45-54", value: 220 },
    { name: "55+", value: 130 },
  ],
  "7d": [
    { name: "18-24", value: 1200 },
    { name: "25-34", value: 2100 },
    { name: "35-44", value: 1700 },
    { name: "45-54", value: 1050 },
    { name: "55+", value: 650 },
  ],
  "30d": [
    { name: "18-24", value: 4800 },
    { name: "25-34", value: 7200 },
    { name: "35-44", value: 5500 },
    { name: "45-54", value: 3800 },
    { name: "55+", value: 2200 },
  ],
  "90d": [
    { name: "18-24", value: 15200 },
    { name: "25-34", value: 22400 },
    { name: "35-44", value: 18100 },
    { name: "45-54", value: 12600 },
    { name: "55+", value: 9200 },
  ],
};

export const audienceGeoData = {
  "24h": [
    { name: "North America", value: 520 },
    { name: "Europe", value: 380 },
    { name: "Asia", value: 290 },
    { name: "South America", value: 110 },
    { name: "Africa", value: 70 },
    { name: "Oceania", value: 30 },
  ],
  "7d": [
    { name: "North America", value: 2400 },
    { name: "Europe", value: 1800 },
    { name: "Asia", value: 1500 },
    { name: "South America", value: 580 },
    { name: "Africa", value: 320 },
    { name: "Oceania", value: 180 },
  ],
  "30d": [
    { name: "North America", value: 8500 },
    { name: "Europe", value: 6200 },
    { name: "Asia", value: 5400 },
    { name: "South America", value: 2100 },
    { name: "Africa", value: 1200 },
    { name: "Oceania", value: 820 },
  ],
  "90d": [
    { name: "North America", value: 24800 },
    { name: "Europe", value: 18900 },
    { name: "Asia", value: 16500 },
    { name: "South America", value: 6500 },
    { name: "Africa", value: 4200 },
    { name: "Oceania", value: 2600 },
  ],
};

export const audienceEngagementData = {
  "24h": [
    { name: "0-30s", users: 820 },
    { name: "30s-2m", users: 650 },
    { name: "2m-5m", users: 420 },
    { name: "5m-15m", users: 280 },
    { name: "15m+", users: 130 },
  ],
  "7d": [
    { name: "0-30s", users: 3800 },
    { name: "30s-2m", users: 2900 },
    { name: "2m-5m", users: 2100 },
    { name: "5m-15m", users: 1450 },
    { name: "15m+", users: 850 },
  ],
  "30d": [
    { name: "0-30s", users: 12500 },
    { name: "30s-2m", users: 9800 },
    { name: "2m-5m", users: 7200 },
    { name: "5m-15m", users: 4800 },
    { name: "15m+", users: 2900 },
  ],
  "90d": [
    { name: "0-30s", users: 35600 },
    { name: "30s-2m", users: 28400 },
    { name: "2m-5m", users: 21200 },
    { name: "5m-15m", users: 14600 },
    { name: "15m+", users: 9500 },
  ],
};

export const audienceRetentionData = {
  "24h": [
    { name: "New Visitors", value: 680 },
    { name: "Returning", value: 420 },
  ],
  "7d": [
    { name: "New Visitors", value: 3200 },
    { name: "Returning", value: 1800 },
  ],
  "30d": [
    { name: "New Visitors", value: 9600 },
    { name: "Returning", value: 6400 },
  ],
  "90d": [
    { name: "New Visitors", value: 28200 },
    { name: "Returning", value: 19800 },
  ],
};

export const audienceLoyaltyData = {
  "24h": [
    { name: "1 session", value: 520 },
    { name: "2 sessions", value: 320 },
    { name: "3 sessions", value: 180 },
    { name: "4+ sessions", value: 80 },
  ],
  "7d": [
    { name: "1 session", value: 2100 },
    { name: "2 sessions", value: 1400 },
    { name: "3 sessions", value: 820 },
    { name: "4+ sessions", value: 480 },
  ],
  "30d": [
    { name: "1 session", value: 6800 },
    { name: "2 sessions", value: 4500 },
    { name: "3 sessions", value: 2900 },
    { name: "4+ sessions", value: 1800 },
  ],
  "90d": [
    { name: "1 session", value: 18500 },
    { name: "2 sessions", value: 13600 },
    { name: "3 sessions", value: 9200 },
    { name: "4+ sessions", value: 6700 },
  ],
};

export const acquisitionSourcesData = {
  "24h": [
    { name: "Organic Search", value: 580 },
    { name: "Direct", value: 480 },
    { name: "Referral", value: 350 },
    { name: "Social Media", value: 420 },
    { name: "Email", value: 280 },
    { name: "Paid Search", value: 320 },
  ],
  "7d": [
    { name: "Organic Search", value: 2800 },
    { name: "Direct", value: 2200 },
    { name: "Referral", value: 1600 },
    { name: "Social Media", value: 1900 },
    { name: "Email", value: 1300 },
    { name: "Paid Search", value: 1500 },
  ],
  "30d": [
    { name: "Organic Search", value: 9500 },
    { name: "Direct", value: 7600 },
    { name: "Referral", value: 5400 },
    { name: "Social Media", value: 6300 },
    { name: "Email", value: 4500 },
    { name: "Paid Search", value: 5200 },
  ],
  "90d": [
    { name: "Organic Search", value: 28400 },
    { name: "Direct", value: 22800 },
    { name: "Referral", value: 16500 },
    { name: "Social Media", value: 19200 },
    { name: "Email", value: 14300 },
    { name: "Paid Search", value: 15800 },
  ],
};

export const campaignPerformanceData = {
  "24h": [
    {
      campaign: "Summer Sale",
      impressions: 12500,
      clicks: 870,
      conversions: 56,
      ctr: "6.96%",
      cvr: "6.44%",
      cost: 320,
    },
    {
      campaign: "New Product Launch",
      impressions: 8700,
      clicks: 620,
      conversions: 42,
      ctr: "7.13%",
      cvr: "6.77%",
      cost: 280,
    },
    {
      campaign: "Brand Awareness",
      impressions: 15200,
      clicks: 540,
      conversions: 28,
      ctr: "3.55%",
      cvr: "5.19%",
      cost: 260,
    },
    {
      campaign: "Retargeting",
      impressions: 5600,
      clicks: 490,
      conversions: 45,
      ctr: "8.75%",
      cvr: "9.18%",
      cost: 240,
    },
  ],
  "7d": [
    {
      campaign: "Summer Sale",
      impressions: 78500,
      clicks: 5420,
      conversions: 342,
      ctr: "6.90%",
      cvr: "6.31%",
      cost: 1980,
    },
    {
      campaign: "New Product Launch",
      impressions: 54200,
      clicks: 3870,
      conversions: 276,
      ctr: "7.14%",
      cvr: "7.13%",
      cost: 1760,
    },
    {
      campaign: "Brand Awareness",
      impressions: 92400,
      clicks: 3280,
      conversions: 184,
      ctr: "3.55%",
      cvr: "5.61%",
      cost: 1640,
    },
    {
      campaign: "Retargeting",
      impressions: 38700,
      clicks: 3320,
      conversions: 298,
      ctr: "8.58%",
      cvr: "8.98%",
      cost: 1520,
    },
  ],
  "30d": [
    {
      campaign: "Summer Sale",
      impressions: 284000,
      clicks: 19600,
      conversions: 1240,
      ctr: "6.90%",
      cvr: "6.33%",
      cost: 6840,
    },
    {
      campaign: "New Product Launch",
      impressions: 192000,
      clicks: 13700,
      conversions: 968,
      ctr: "7.14%",
      cvr: "7.07%",
      cost: 6120,
    },
    {
      campaign: "Brand Awareness",
      impressions: 362000,
      clicks: 12800,
      conversions: 704,
      ctr: "3.54%",
      cvr: "5.50%",
      cost: 5760,
    },
    {
      campaign: "Retargeting",
      impressions: 142000,
      clicks: 12200,
      conversions: 1086,
      ctr: "8.59%",
      cvr: "8.90%",
      cost: 5280,
    },
  ],
  "90d": [
    {
      campaign: "Summer Sale",
      impressions: 864000,
      clicks: 59600,
      conversions: 3780,
      ctr: "6.90%",
      cvr: "6.34%",
      cost: 20760,
    },
    {
      campaign: "New Product Launch",
      impressions: 578000,
      clicks: 41300,
      conversions: 2940,
      ctr: "7.15%",
      cvr: "7.12%",
      cost: 18540,
    },
    {
      campaign: "Brand Awareness",
      impressions: 1080000,
      clicks: 38400,
      conversions: 2140,
      ctr: "3.56%",
      cvr: "5.57%",
      cost: 17280,
    },
    {
      campaign: "Retargeting",
      impressions: 428000,
      clicks: 36800,
      conversions: 3290,
      ctr: "8.60%",
      cvr: "8.94%",
      cost: 15960,
    },
  ],
};

export const channelsOverTimeData = {
  "24h": [
    {
      name: "12am",
      organic: 120,
      paid: 80,
      direct: 65,
      social: 45,
      referral: 30,
    },
    {
      name: "6am",
      organic: 80,
      paid: 50,
      direct: 45,
      social: 25,
      referral: 20,
    },
    {
      name: "12pm",
      organic: 180,
      paid: 120,
      direct: 95,
      social: 70,
      referral: 55,
    },
    {
      name: "6pm",
      organic: 220,
      paid: 150,
      direct: 110,
      social: 85,
      referral: 65,
    },
  ],
  "7d": [
    {
      name: "Mon",
      organic: 520,
      paid: 380,
      direct: 290,
      social: 210,
      referral: 160,
    },
    {
      name: "Tue",
      organic: 480,
      paid: 350,
      direct: 270,
      social: 190,
      referral: 140,
    },
    {
      name: "Wed",
      organic: 560,
      paid: 410,
      direct: 310,
      social: 230,
      referral: 170,
    },
    {
      name: "Thu",
      organic: 540,
      paid: 390,
      direct: 300,
      social: 220,
      referral: 165,
    },
    {
      name: "Fri",
      organic: 590,
      paid: 430,
      direct: 330,
      social: 240,
      referral: 185,
    },
    {
      name: "Sat",
      organic: 640,
      paid: 470,
      direct: 350,
      social: 260,
      referral: 200,
    },
    {
      name: "Sun",
      organic: 580,
      paid: 420,
      direct: 320,
      social: 230,
      referral: 180,
    },
  ],
  "30d": [
    {
      name: "Week 1",
      organic: 3850,
      paid: 2780,
      direct: 2150,
      social: 1560,
      referral: 1180,
    },
    {
      name: "Week 2",
      organic: 4120,
      paid: 2980,
      direct: 2290,
      social: 1680,
      referral: 1270,
    },
    {
      name: "Week 3",
      organic: 4380,
      paid: 3170,
      direct: 2440,
      social: 1780,
      referral: 1350,
    },
    {
      name: "Week 4",
      organic: 4680,
      paid: 3390,
      direct: 2600,
      social: 1910,
      referral: 1440,
    },
  ],
  "90d": [
    {
      name: "Jan",
      organic: 12850,
      paid: 9280,
      direct: 7150,
      social: 5260,
      referral: 3980,
    },
    {
      name: "Feb",
      organic: 13720,
      paid: 9920,
      direct: 7640,
      social: 5620,
      referral: 4250,
    },
    {
      name: "Mar",
      organic: 14680,
      paid: 10630,
      direct: 8170,
      social: 6010,
      referral: 4540,
    },
  ],
};

export const conversionRatesData = {
  "24h": [
    { name: "Organic Search", rate: 3.2 },
    { name: "Direct", rate: 4.1 },
    { name: "Referral", rate: 5.3 },
    { name: "Social Media", rate: 2.8 },
    { name: "Email", rate: 6.4 },
    { name: "Paid Search", rate: 3.9 },
  ],
  "7d": [
    { name: "Organic Search", rate: 3.4 },
    { name: "Direct", rate: 4.3 },
    { name: "Referral", rate: 5.5 },
    { name: "Social Media", rate: 3.0 },
    { name: "Email", rate: 6.6 },
    { name: "Paid Search", rate: 4.1 },
  ],
  "30d": [
    { name: "Organic Search", rate: 3.6 },
    { name: "Direct", rate: 4.5 },
    { name: "Referral", rate: 5.7 },
    { name: "Social Media", rate: 3.2 },
    { name: "Email", rate: 6.8 },
    { name: "Paid Search", rate: 4.3 },
  ],
  "90d": [
    { name: "Organic Search", rate: 3.8 },
    { name: "Direct", rate: 4.7 },
    { name: "Referral", rate: 5.9 },
    { name: "Social Media", rate: 3.4 },
    { name: "Email", rate: 7.0 },
    { name: "Paid Search", rate: 4.5 },
  ],
};

export const landingPageData = {
  "24h": [
    {
      page: "/home",
      visitors: 1240,
      bounce: "28%",
      convRate: "4.2%",
      avgTime: "1:45",
    },
    {
      page: "/products",
      visitors: 860,
      bounce: "32%",
      convRate: "5.8%",
      avgTime: "2:12",
    },
    {
      page: "/blog/new-trends",
      visitors: 620,
      bounce: "38%",
      convRate: "3.6%",
      avgTime: "3:05",
    },
    {
      page: "/promotions",
      visitors: 580,
      bounce: "25%",
      convRate: "7.4%",
      avgTime: "1:58",
    },
    {
      page: "/about-us",
      visitors: 340,
      bounce: "42%",
      convRate: "2.1%",
      avgTime: "1:22",
    },
  ],
  "7d": [
    {
      page: "/home",
      visitors: 7840,
      bounce: "29%",
      convRate: "4.5%",
      avgTime: "1:52",
    },
    {
      page: "/products",
      visitors: 5420,
      bounce: "33%",
      convRate: "6.1%",
      avgTime: "2:24",
    },
    {
      page: "/blog/new-trends",
      visitors: 3950,
      bounce: "39%",
      convRate: "3.8%",
      avgTime: "3:18",
    },
    {
      page: "/promotions",
      visitors: 3640,
      bounce: "26%",
      convRate: "7.6%",
      avgTime: "2:05",
    },
    {
      page: "/about-us",
      visitors: 2180,
      bounce: "43%",
      convRate: "2.3%",
      avgTime: "1:28",
    },
  ],
  "30d": [
    {
      page: "/home",
      visitors: 28400,
      bounce: "30%",
      convRate: "4.7%",
      avgTime: "1:58",
    },
    {
      page: "/products",
      visitors: 19600,
      bounce: "34%",
      convRate: "6.3%",
      avgTime: "2:32",
    },
    {
      page: "/blog/new-trends",
      visitors: 14200,
      bounce: "40%",
      convRate: "4.0%",
      avgTime: "3:25",
    },
    {
      page: "/promotions",
      visitors: 13100,
      bounce: "27%",
      convRate: "7.8%",
      avgTime: "2:12",
    },
    {
      page: "/about-us",
      visitors: 7840,
      bounce: "44%",
      convRate: "2.5%",
      avgTime: "1:35",
    },
  ],
  "90d": [
    {
      page: "/home",
      visitors: 86500,
      bounce: "31%",
      convRate: "4.9%",
      avgTime: "2:05",
    },
    {
      page: "/products",
      visitors: 59800,
      bounce: "35%",
      convRate: "6.5%",
      avgTime: "2:40",
    },
    {
      page: "/blog/new-trends",
      visitors: 43600,
      bounce: "41%",
      convRate: "4.2%",
      avgTime: "3:32",
    },
    {
      page: "/promotions",
      visitors: 40200,
      bounce: "28%",
      convRate: "8.0%",
      avgTime: "2:18",
    },
    {
      page: "/about-us",
      visitors: 24100,
      bounce: "45%",
      convRate: "2.7%",
      avgTime: "1:42",
    },
  ],
};

export const pageViewsData = {
  "24h": [
    { name: "12am", views: 1420 },
    { name: "6am", views: 980 },
    { name: "12pm", views: 2840 },
    { name: "6pm", views: 3620 },
  ],
  "7d": [
    { name: "Mon", views: 5420 },
    { name: "Tue", views: 4980 },
    { name: "Wed", views: 6240 },
    { name: "Thu", views: 5890 },
    { name: "Fri", views: 7120 },
    { name: "Sat", views: 8340 },
    { name: "Sun", views: 6780 },
  ],
  "30d": [
    { name: "Week 1", views: 42800 },
    { name: "Week 2", views: 46300 },
    { name: "Week 3", views: 49700 },
    { name: "Week 4", views: 52100 },
  ],
  "90d": [
    { name: "Jan", views: 148600 },
    { name: "Feb", views: 162300 },
    { name: "Mar", views: 175800 },
  ],
};

export const eventTrackingData = {
  "24h": [
    { name: "Button Click", count: 843, users: 562, perUser: 1.5 },
    { name: "Form Submit", count: 412, users: 385, perUser: 1.1 },
    { name: "Video Play", count: 368, users: 276, perUser: 1.3 },
    { name: "Download", count: 215, users: 198, perUser: 1.1 },
    { name: "Share", count: 127, users: 94, perUser: 1.4 },
  ],
  "7d": [
    { name: "Button Click", count: 5246, users: 3218, perUser: 1.6 },
    { name: "Form Submit", count: 2853, users: 2567, perUser: 1.1 },
    { name: "Video Play", count: 2412, users: 1756, perUser: 1.4 },
    { name: "Download", count: 1532, users: 1324, perUser: 1.2 },
    { name: "Share", count: 926, users: 641, perUser: 1.4 },
  ],
  "30d": [
    { name: "Button Click", count: 18742, users: 10582, perUser: 1.8 },
    { name: "Form Submit", count: 10256, users: 8924, perUser: 1.1 },
    { name: "Video Play", count: 9125, users: 6218, perUser: 1.5 },
    { name: "Download", count: 5843, users: 4726, perUser: 1.2 },
    { name: "Share", count: 3642, users: 2418, perUser: 1.5 },
  ],
  "90d": [
    { name: "Button Click", count: 54825, users: 28764, perUser: 1.9 },
    { name: "Form Submit", count: 28945, users: 24568, perUser: 1.2 },
    { name: "Video Play", count: 26418, users: 17352, perUser: 1.5 },
    { name: "Download", count: 16752, users: 13216, perUser: 1.3 },
    { name: "Share", count: 10542, users: 6845, perUser: 1.5 },
  ],
};

export const userFlowData = {
  "24h": [
    { source: "Home", target: "Product", value: 342 },
    { source: "Home", target: "Blog", value: 218 },
    { source: "Home", target: "About", value: 142 },
    { source: "Product", target: "Pricing", value: 186 },
    { source: "Product", target: "Cart", value: 82 },
    { source: "Blog", target: "Product", value: 54 },
    { source: "About", target: "Contact", value: 38 },
  ],
  "7d": [
    { source: "Home", target: "Product", value: 2108 },
    { source: "Home", target: "Blog", value: 1524 },
    { source: "Home", target: "About", value: 918 },
    { source: "Product", target: "Pricing", value: 1276 },
    { source: "Product", target: "Cart", value: 542 },
    { source: "Blog", target: "Product", value: 364 },
    { source: "About", target: "Contact", value: 245 },
  ],
  "30d": [
    { source: "Home", target: "Product", value: 7642 },
    { source: "Home", target: "Blog", value: 5218 },
    { source: "Home", target: "About", value: 3476 },
    { source: "Product", target: "Pricing", value: 4218 },
    { source: "Product", target: "Cart", value: 1865 },
    { source: "Blog", target: "Product", value: 1352 },
    { source: "About", target: "Contact", value: 842 },
  ],
  "90d": [
    { source: "Home", target: "Product", value: 22856 },
    { source: "Home", target: "Blog", value: 15627 },
    { source: "Home", target: "About", value: 10382 },
    { source: "Product", target: "Pricing", value: 12624 },
    { source: "Product", target: "Cart", value: 5428 },
    { source: "Blog", target: "Product", value: 4257 },
    { source: "About", target: "Contact", value: 2654 },
  ],
};

export const sessionDurationData = {
  "24h": [
    { name: "0-30s", users: 624 },
    { name: "30s-2m", users: 428 },
    { name: "2m-5m", users: 316 },
    { name: "5m-15m", users: 196 },
    { name: "15m+", users: 98 },
  ],
  "7d": [
    { name: "0-30s", users: 3845 },
    { name: "30s-2m", users: 2672 },
    { name: "2m-5m", users: 1954 },
    { name: "5m-15m", users: 1238 },
    { name: "15m+", users: 642 },
  ],
  "30d": [
    { name: "0-30s", users: 13682 },
    { name: "30s-2m", users: 9534 },
    { name: "2m-5m", users: 6875 },
    { name: "5m-15m", users: 4327 },
    { name: "15m+", users: 2218 },
  ],
  "90d": [
    { name: "0-30s", users: 39724 },
    { name: "30s-2m", users: 27648 },
    { name: "2m-5m", users: 19842 },
    { name: "5m-15m", users: 12536 },
    { name: "15m+", users: 6485 },
  ],
};

export const exitPagesData = {
  "24h": [
    { page: "/checkout/success", exits: 126, exitRate: "82%" },
    { page: "/contact", exits: 84, exitRate: "45%" },
    { page: "/product/detail", exits: 62, exitRate: "28%" },
    { page: "/blog/article", exits: 56, exitRate: "38%" },
    { page: "/home", exits: 48, exitRate: "12%" },
  ],
  "7d": [
    { page: "/checkout/success", exits: 842, exitRate: "85%" },
    { page: "/contact", exits: 524, exitRate: "48%" },
    { page: "/product/detail", exits: 418, exitRate: "32%" },
    { page: "/blog/article", exits: 356, exitRate: "42%" },
    { page: "/home", exits: 284, exitRate: "15%" },
  ],
  "30d": [
    { page: "/checkout/success", exits: 2968, exitRate: "87%" },
    { page: "/contact", exits: 1856, exitRate: "52%" },
    { page: "/product/detail", exits: 1542, exitRate: "35%" },
    { page: "/blog/article", exits: 1238, exitRate: "46%" },
    { page: "/home", exits: 985, exitRate: "18%" },
  ],
  "90d": [
    { page: "/checkout/success", exits: 8943, exitRate: "89%" },
    { page: "/contact", exits: 5682, exitRate: "55%" },
    { page: "/product/detail", exits: 4725, exitRate: "38%" },
    { page: "/blog/article", exits: 3842, exitRate: "49%" },
    { page: "/home", exits: 2954, exitRate: "21%" },
  ],
};

export const conversionRateOverTimeData = {
  "24h": [
    { name: "12am", rate: 2.4 },
    { name: "6am", rate: 2.1 },
    { name: "12pm", rate: 3.5 },
    { name: "6pm", rate: 4.2 },
  ],
  "7d": [
    { name: "Mon", rate: 3.2 },
    { name: "Tue", rate: 3.5 },
    { name: "Wed", rate: 3.1 },
    { name: "Thu", rate: 3.8 },
    { name: "Fri", rate: 4.1 },
    { name: "Sat", rate: 3.6 },
    { name: "Sun", rate: 3.3 },
  ],
  "30d": [
    { name: "Week 1", rate: 3.2 },
    { name: "Week 2", rate: 3.5 },
    { name: "Week 3", rate: 3.8 },
    { name: "Week 4", rate: 4.1 },
  ],
  "90d": [
    { name: "Jan", rate: 3.4 },
    { name: "Feb", rate: 3.7 },
    { name: "Mar", rate: 4.2 },
  ],
};

export const goalCompletionsData = {
  "24h": [
    { name: "Purchase", value: 124 },
    { name: "Signup", value: 245 },
    { name: "Download", value: 187 },
    { name: "Contact", value: 98 },
  ],
  "7d": [
    { name: "Purchase", value: 842 },
    { name: "Signup", value: 1540 },
    { name: "Download", value: 1120 },
    { name: "Contact", value: 650 },
  ],
  "30d": [
    { name: "Purchase", value: 3250 },
    { name: "Signup", value: 5840 },
    { name: "Download", value: 4380 },
    { name: "Contact", value: 2420 },
  ],
  "90d": [
    { name: "Purchase", value: 9850 },
    { name: "Signup", value: 17520 },
    { name: "Download", value: 13140 },
    { name: "Contact", value: 7260 },
  ],
};

export const funnelData = {
  "24h": [
    { name: "Visitors", value: 2400 },
    { name: "Product Views", value: 1450 },
    { name: "Add to Cart", value: 620 },
    { name: "Checkout", value: 320 },
    { name: "Purchase", value: 124 },
  ],
  "7d": [
    { name: "Visitors", value: 14500 },
    { name: "Product Views", value: 8700 },
    { name: "Add to Cart", value: 3740 },
    { name: "Checkout", value: 1920 },
    { name: "Purchase", value: 842 },
  ],
  "30d": [
    { name: "Visitors", value: 54200 },
    { name: "Product Views", value: 32500 },
    { name: "Add to Cart", value: 14100 },
    { name: "Checkout", value: 7300 },
    { name: "Purchase", value: 3250 },
  ],
  "90d": [
    { name: "Visitors", value: 162600 },
    { name: "Product Views", value: 97500 },
    { name: "Add to Cart", value: 42300 },
    { name: "Checkout", value: 21900 },
    { name: "Purchase", value: 9850 },
  ],
};

export const revenueMetricsData = {
  "24h": [
    { metric: "Total Revenue", value: "$5,842" },
    { metric: "Avg Order Value", value: "$47.12" },
    { metric: "Revenue Per User", value: "$2.43" },
    { metric: "Revenue Per Visit", value: "$1.63" },
  ],
  "7d": [
    { metric: "Total Revenue", value: "$42,740" },
    { metric: "Avg Order Value", value: "$50.76" },
    { metric: "Revenue Per User", value: "$2.95" },
    { metric: "Revenue Per Visit", value: "$1.87" },
  ],
  "30d": [
    { metric: "Total Revenue", value: "$168,250" },
    { metric: "Avg Order Value", value: "$51.77" },
    { metric: "Revenue Per User", value: "$3.07" },
    { metric: "Revenue Per Visit", value: "$1.94" },
  ],
  "90d": [
    { metric: "Total Revenue", value: "$512,650" },
    { metric: "Avg Order Value", value: "$52.05" },
    { metric: "Revenue Per User", value: "$3.21" },
    { metric: "Revenue Per Visit", value: "$2.08" },
  ],
};

export const conversionBySourceData = {
  "24h": [
    { name: "Organic Search", value: 3.2 },
    { name: "Direct", value: 4.1 },
    { name: "Referral", value: 5.3 },
    { name: "Social Media", value: 2.8 },
    { name: "Email", value: 6.4 },
    { name: "Paid Search", value: 3.9 },
  ],
  "7d": [
    { name: "Organic Search", value: 3.4 },
    { name: "Direct", value: 4.3 },
    { name: "Referral", value: 5.5 },
    { name: "Social Media", value: 3.0 },
    { name: "Email", value: 6.6 },
    { name: "Paid Search", value: 4.1 },
  ],
  "30d": [
    { name: "Organic Search", value: 3.6 },
    { name: "Direct", value: 4.5 },
    { name: "Referral", value: 5.7 },
    { name: "Social Media", value: 3.2 },
    { name: "Email", value: 6.8 },
    { name: "Paid Search", value: 4.3 },
  ],
  "90d": [
    { name: "Organic Search", value: 3.8 },
    { name: "Direct", value: 4.7 },
    { name: "Referral", value: 5.9 },
    { name: "Social Media", value: 3.4 },
    { name: "Email", value: 7.0 },
    { name: "Paid Search", value: 4.5 },
  ],
};

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
