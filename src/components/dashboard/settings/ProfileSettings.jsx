import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Camera,
  Bell,
  Eye,
  Shield,
  Moon,
  Sun,
  LogOut,
} from "lucide-react";

// Tabs for the settings page
const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "account", label: "Account", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Appearance", icon: Eye },
  { id: "privacy", label: "Privacy", icon: Shield },
];

// User component imported from lucide-react
function User(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function ProfileSettings({ onClose, darkMode, setDarkMode }) {
  const [activeTab, setActiveTab] = useState("profile");
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatar: null,
    bio: "Product manager with 5+ years of experience in analytics and data visualization.",
    phone: "+1 (555) 123-4567",
    location: "New York, USA",
    company: "Acme Inc.",
    title: "Product Manager",
  });

  const [accountSettings, setAccountSettings] = useState({
    email: "john.doe@example.com",
    twoFactorAuth: false,
    password: "••••••••••",
    language: "English",
    timezone: "Eastern Time (US & Canada)",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    dashboardUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    newFeatures: true,
  });

  const [privacySettings, setPrivacySettings] = useState({
    shareUsageData: true,
    allowCookies: true,
    showOnlineStatus: true,
  });

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      setUserProfile({ ...userProfile, avatar: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  // Handle profile form submission
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the update to a backend
    alert("Profile updated successfully!");
  };

  // Handle account settings form submission
  const handleAccountSubmit = (e) => {
    e.preventDefault();
    alert("Account settings updated successfully!");
  };

  // Handle notification settings toggle
  const handleNotificationToggle = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    });
  };

  // Handle privacy settings toggle
  const handlePrivacyToggle = (setting) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting],
    });
  };

  // Render the appropriate tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <form onSubmit={handleProfileSubmit}>
              <div className="flex flex-col md:flex-row gap-8 mb-6">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-200 dark:bg-gray-700 flex items-center justify-center">
                      {userProfile.avatar ? (
                        <img
                          src={userProfile.avatar}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User
                          size={40}
                          className="text-slate-400 dark:text-slate-500"
                        />
                      )}
                    </div>
                    <label
                      htmlFor="avatar-upload"
                      className="absolute bottom-0 right-0 bg-indigo-600 text-white p-1 rounded-full cursor-pointer hover:bg-indigo-700"
                    >
                      <Camera size={16} />
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={userProfile.name}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            name: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        value={userProfile.email}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            email: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={userProfile.title}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            title: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        value={userProfile.company}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            company: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={userProfile.phone}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            phone: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        value={userProfile.location}
                        onChange={(e) =>
                          setUserProfile({
                            ...userProfile,
                            location: e.target.value,
                          })
                        }
                        className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Bio
                    </label>
                    <textarea
                      value={userProfile.bio}
                      onChange={(e) =>
                        setUserProfile({ ...userProfile, bio: e.target.value })
                      }
                      rows={4}
                      className="w-full p-2 border border-slate-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-slate-800 dark:text-white"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
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

      case "account":
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
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
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
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                          Two-Factor Authentication
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <button
                        type="button"
                        className={`w-12 h-6 rounded-full transition-colors ${accountSettings.twoFactorAuth
                            ? "bg-indigo-600"
                            : "bg-slate-200 dark:bg-gray-600"
                          } relative`}
                        onClick={() =>
                          setAccountSettings({
                            ...accountSettings,
                            twoFactorAuth: !accountSettings.twoFactorAuth,
                          })
                        }
                      >
                        <span
                          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${accountSettings.twoFactorAuth ? "left-7" : "left-1"
                            }`}
                        ></span>
                      </button>
                    </div>
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

      case "notifications":
        return (
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Control which notifications you receive from the dashboard.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Email Notifications
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Receive email notifications for important updates
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${notificationSettings.emailNotifications
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handleNotificationToggle("emailNotifications")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationSettings.emailNotifications
                        ? "left-7"
                        : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Dashboard Updates
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Get notified when dashboard data is refreshed
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${notificationSettings.dashboardUpdates
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handleNotificationToggle("dashboardUpdates")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationSettings.dashboardUpdates
                        ? "left-7"
                        : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Security Alerts
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Be notified about security-related events
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${notificationSettings.securityAlerts
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handleNotificationToggle("securityAlerts")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationSettings.securityAlerts ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Marketing Emails
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Receive occasional newsletters and promotions
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${notificationSettings.marketingEmails
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handleNotificationToggle("marketingEmails")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationSettings.marketingEmails ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    New Features
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Get notified when new features are released
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${notificationSettings.newFeatures
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handleNotificationToggle("newFeatures")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${notificationSettings.newFeatures ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Customize how the dashboard looks and feels.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Dark Mode
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Toggle between light and dark themes
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${darkMode ? "bg-indigo-600" : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${darkMode ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="py-4 border-b border-slate-200 dark:border-gray-700">
                <div className="mb-4">
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Theme
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Choose your preferred color theme
                  </p>
                </div>

                <div className="grid grid-cols-5 gap-3">
                  <button className="w-12 h-12 rounded-full bg-indigo-600 ring-2 ring-offset-2 ring-indigo-600"></button>
                  <button className="w-12 h-12 rounded-full bg-blue-600"></button>
                  <button className="w-12 h-12 rounded-full bg-green-600"></button>
                  <button className="w-12 h-12 rounded-full bg-purple-600"></button>
                  <button className="w-12 h-12 rounded-full bg-red-600"></button>
                </div>
              </div>

              <div className="py-4">
                <div className="mb-2">
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Font Size
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="text-xs p-2 border border-slate-200 dark:border-gray-700 rounded-md hover:bg-slate-50 dark:hover:bg-gray-700">
                    Small
                  </button>
                  <button className="text-sm p-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-md bg-indigo-50 dark:bg-indigo-900/20">
                    Medium
                  </button>
                  <button className="text-base p-2 border border-slate-200 dark:border-gray-700 rounded-md hover:bg-slate-50 dark:hover:bg-gray-700">
                    Large
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Control your privacy settings and manage your data.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Share Usage Data
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Help improve the dashboard by sharing anonymous usage data
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${privacySettings.shareUsageData
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handlePrivacyToggle("shareUsageData")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${privacySettings.shareUsageData ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4 border-b border-slate-200 dark:border-gray-700">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Allow Cookies
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Enable cookies to improve your browsing experience
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${privacySettings.allowCookies
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handlePrivacyToggle("allowCookies")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${privacySettings.allowCookies ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>

              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-300">
                    Show Online Status
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Let others see when you're online
                  </p>
                </div>
                <button
                  type="button"
                  className={`w-12 h-6 rounded-full transition-colors ${privacySettings.showOnlineStatus
                      ? "bg-indigo-600"
                      : "bg-slate-200 dark:bg-gray-600"
                    } relative`}
                  onClick={() => handlePrivacyToggle("showOnlineStatus")}
                >
                  <span
                    className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full transition-transform bg-white ${privacySettings.showOnlineStatus ? "left-7" : "left-1"
                      }`}
                  ></span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
                Data Management
              </h3>
              <div className="space-y-4">
                <button className="flex items-center justify-between w-full p-3 border border-slate-200 dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700">
                  <span className="text-slate-700 dark:text-slate-300">
                    Export Personal Data
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Download all your data in a CSV format
                  </span>
                </button>
                <button className="flex items-center justify-between w-full p-3 border border-red-200 dark:border-red-900 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <span>Delete Account</span>
                  <span className="text-sm">
                    Permanently remove your account and all data
                  </span>
                </button>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 flex justify-between items-center p-6 border-b border-slate-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft size={20} className="text-slate-700 dark:text-white" />
            </button>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Profile & Settings
            </h2>
          </div>
          <button
            className="flex items-center gap-2 text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-lg transition-colors"
            onClick={onClose}
          >
            <LogOut size={18} className="text-red-500 dark:text-red-400" />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar navigation */}
          <div className="w-full md:w-64 p-6 border-r border-slate-200 dark:border-gray-700 shrink-0">
            <nav className="space-y-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${activeTab === tab.id
                      ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
                      : "text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-gray-700"
                    }`}
                >
                  <tab.icon
                    size={18}
                    className="text-slate-700 dark:text-white"
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab content */}
          <div className="flex-1 p-6">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
