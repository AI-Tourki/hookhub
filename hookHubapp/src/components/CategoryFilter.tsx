"use client";

import { HookCategory } from "@/types/hook";

interface CategoryFilterProps {
  activeCategory: HookCategory | "All";
  onCategoryChange: (category: HookCategory | "All") => void;
  categoryCounts: Record<string, number>;
}

const categories: (HookCategory | "All")[] = [
  "All",
  HookCategory.SECURITY,
  HookCategory.CODE_QUALITY,
  HookCategory.PROMPT_CONTROL,
  HookCategory.PRE_EXECUTION,
  HookCategory.POST_EXECUTION,
  HookCategory.COMPLETION,
  HookCategory.SESSION_MANAGEMENT,
  HookCategory.NOTIFICATIONS,
  HookCategory.DEPENDENCY_MANAGEMENT,
  HookCategory.PRODUCTIVITY,
  HookCategory.DEBUGGING,
  HookCategory.OTHER,
];

const categoryColors: Record<string, string> = {
  All: "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100",
  Security: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-100",
  "Code Quality":
    "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100",
  "Prompt Control":
    "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100",
  "Pre-Execution":
    "bg-orange-100 dark:bg-orange-900/30 text-orange-900 dark:text-orange-100",
  "Post-Execution":
    "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100",
  Completion:
    "bg-teal-100 dark:bg-teal-900/30 text-teal-900 dark:text-teal-100",
  "Session Management":
    "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100",
  Notifications:
    "bg-pink-100 dark:bg-pink-900/30 text-pink-900 dark:text-pink-100",
  "Dependency Management":
    "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-100",
  Productivity:
    "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-100",
  Debugging:
    "bg-violet-100 dark:bg-violet-900/30 text-violet-900 dark:text-violet-100",
  Other: "bg-gray-100 dark:bg-gray-900/30 text-gray-900 dark:text-gray-100",
};

const activeCategoryColors: Record<string, string> = {
  All: "bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900",
  Security: "bg-red-600 dark:bg-red-500 text-white dark:text-white",
  "Code Quality": "bg-blue-600 dark:bg-blue-500 text-white dark:text-white",
  "Prompt Control":
    "bg-purple-600 dark:bg-purple-500 text-white dark:text-white",
  "Pre-Execution": "bg-orange-600 dark:bg-orange-500 text-white dark:text-white",
  "Post-Execution": "bg-green-600 dark:bg-green-500 text-white dark:text-white",
  Completion: "bg-teal-600 dark:bg-teal-500 text-white dark:text-white",
  "Session Management":
    "bg-indigo-600 dark:bg-indigo-500 text-white dark:text-white",
  Notifications: "bg-pink-600 dark:bg-pink-500 text-white dark:text-white",
  "Dependency Management":
    "bg-yellow-600 dark:bg-yellow-500 text-white dark:text-white",
  Productivity: "bg-cyan-600 dark:bg-cyan-500 text-white dark:text-white",
  Debugging: "bg-violet-600 dark:bg-violet-500 text-white dark:text-white",
  Other: "bg-gray-600 dark:bg-gray-500 text-white dark:text-white",
};

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto py-2">
      <div className="flex gap-2 min-w-max px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {categories.map((category) => {
          const count = categoryCounts[category] || 0;
          const isActive = activeCategory === category;
          const colorClass = isActive
            ? activeCategoryColors[category]
            : categoryColors[category];

          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`${colorClass} px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500`}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { categoryColors, activeCategoryColors };
