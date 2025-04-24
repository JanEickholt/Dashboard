export const getTooltipStyles = (darkMode) => ({
  contentStyle: {
    backgroundColor: darkMode ? "#2d3748" : "#fff",
    border: darkMode ? "1px solid #4a5568" : "1px solid #e2e8f0",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    color: darkMode ? "#fff" : "#000",
  },
  labelStyle: {
    color: darkMode ? "#fff" : "#000",
  },
  itemStyle: {
    color: darkMode ? "#fff" : "#000",
  },
});

export const getGridColor = (darkMode) => (darkMode ? "#333333" : "#f0f0f0");
export const getAxisColor = (darkMode) => (darkMode ? "#94a3b8" : "#64748b");
