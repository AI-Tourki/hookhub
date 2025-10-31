export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            HookHub
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            Discover powerful Claude Code hooks
          </p>
        </div>
      </div>
    </header>
  );
}
