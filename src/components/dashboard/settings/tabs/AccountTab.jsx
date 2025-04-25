import React, { useState } from "react";
import SettingsToggle from "../ui/SettingsToggle";

export default function AccountTab({ onClose }) {
  const [accountSettings, setAccountSettings] = useState({
    email: "john.doe@example.com",
    twoFactorAuth: false,
    password: "••••••••••",
    language: "English",
    timezone: "Eastern Time (US & Canada)",
  });

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    alert("Account settings updated successfully!");
  };

  return (
    <div>
      <form onSubmit={handleAccountSubmit}>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-3">
              Login Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={accountSettings.email}
                  onChange={(e) =>
                    setAccountSettings({
                      ...accountSettings,
                      email: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={accountSettings.password}
                    className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                    disabled
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 dark:bg-gray-800"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-3">
              Security
            </h3>
            <div className="space-y-4">
              <SettingsToggle
                label="Two-Factor Authentication"
                description="Add an extra layer of security to your account"
                enabled={accountSettings.twoFactorAuth}
                onChange={() =>
                  setAccountSettings({
                    ...accountSettings,
                    twoFactorAuth: !accountSettings.twoFactorAuth,
                  })
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-3">
              Preferences
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Language
                </label>
                <select
                  value={accountSettings.language}
                  onChange={(e) =>
                    setAccountSettings({
                      ...accountSettings,
                      language: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Chinese">Chinese</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Timezone
                </label>
                <select
                  value={accountSettings.timezone}
                  onChange={(e) =>
                    setAccountSettings({
                      ...accountSettings,
                      timezone: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                >
                  <option value="Eastern Time (US & Canada)">
                    Eastern Time (US & Canada)
                  </option>
                  <option value="Central Time (US & Canada)">
                    Central Time (US & Canada)
                  </option>
                  <option value="Pacific Time (US & Canada)">
                    Pacific Time (US & Canada)
                  </option>
                  <option value="UTC">UTC</option>
                  <option value="London">London</option>
                  <option value="Tokyo">Tokyo</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
