import React from "react";
import { Download } from "lucide-react";

export default function ExportIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse z-50">
      <Download size={18} className="animate-bounce" />
      <span>Exporting data...</span>
    </div>
  );
}
