import { Hook } from "@/types/hook";
import { categoryColors } from "./CategoryFilter";

interface HookCardProps {
  hook: Hook;
}

export default function HookCard({ hook }: HookCardProps) {
  const categoryColor = categoryColors[hook.category] || categoryColors.Other;

  return (
    <div className="group relative flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-700">
      {hook.featured && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 dark:bg-yellow-500 text-zinc-900 text-xs font-bold px-2 py-1 rounded-full">
          ⭐ Featured
        </div>
      )}

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
          {hook.name}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`${categoryColor} px-3 py-1 rounded-full text-xs font-medium`}>
          {hook.category}
        </span>
        <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1 rounded-full text-xs font-mono">
          {hook.hookType}
        </span>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 flex-grow line-clamp-3">
        {hook.description}
      </p>

      <div className="flex items-center gap-2 mb-4 text-sm text-zinc-500 dark:text-zinc-500">
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="font-mono">{hook.author}</span>
        {hook.language && (
          <>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span>{hook.language}</span>
          </>
        )}
      </div>

      {hook.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hook.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={hook.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-md bg-zinc-900 dark:bg-zinc-100 px-4 py-2 text-sm font-medium text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
      >
        <svg
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}
