"use client";

import { useState } from "react";
import { Hook, HookCategory } from "@/types/hook";
import HookCard from "./HookCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import { filterHooks, getCategoryCounts } from "@/utils/filterHooks";

interface HookGridProps {
  hooks: Hook[];
}

export default function HookGrid({ hooks }: HookGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<HookCategory | "All">("All");

  const filteredHooks = filterHooks(hooks, searchQuery, activeCategory);
  const categoryCounts = getCategoryCounts(hooks);

  return (
    <div className="w-full">
      {/* Search Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 bg-zinc-50 dark:bg-zinc-950/50">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          resultCount={filteredHooks.length}
        />
      </div>

      {/* Category Filter */}
      <div className="pt-8 pb-6 border-b border-zinc-200 dark:border-zinc-800">
        <CategoryFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categoryCounts={categoryCounts}
        />
      </div>

      {/* Hooks Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {filteredHooks.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-12 w-12 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              No hooks found
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Try adjusting your search or filter to find what you&apos;re looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHooks.map((hook) => (
              <HookCard key={hook.id} hook={hook} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
