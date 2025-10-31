import { Hook, HookCategory } from "@/types/hook";

/**
 * Filters hooks by search query across name, description, tags, and author
 */
export function searchHooks(hooks: Hook[], query: string): Hook[] {
  if (!query.trim()) {
    return hooks;
  }

  const lowerQuery = query.toLowerCase();

  return hooks.filter((hook) => {
    return (
      hook.name.toLowerCase().includes(lowerQuery) ||
      hook.description.toLowerCase().includes(lowerQuery) ||
      hook.author.toLowerCase().includes(lowerQuery) ||
      hook.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

/**
 * Filters hooks by category
 */
export function filterByCategory(
  hooks: Hook[],
  category: HookCategory | "All"
): Hook[] {
  if (category === "All") {
    return hooks;
  }

  return hooks.filter((hook) => hook.category === category);
}

/**
 * Combined search and category filter
 */
export function filterHooks(
  hooks: Hook[],
  searchQuery: string,
  category: HookCategory | "All"
): Hook[] {
  let filtered = hooks;

  // Apply category filter
  filtered = filterByCategory(filtered, category);

  // Apply search filter
  filtered = searchHooks(filtered, searchQuery);

  return filtered;
}

/**
 * Get count of hooks per category
 */
export function getCategoryCounts(hooks: Hook[]): Record<string, number> {
  const counts: Record<string, number> = { All: hooks.length };

  hooks.forEach((hook) => {
    counts[hook.category] = (counts[hook.category] || 0) + 1;
  });

  return counts;
}
