import Header from "@/components/Header";
import HookGrid from "@/components/HookGrid";
import hooksData from "@/data/hooks.json";
import { Hook } from "@/types/hook";

export const metadata = {
  title: "HookHub - Discover Claude Code Hooks",
  description: "Browse and discover powerful open-source Claude Code hooks to enhance your workflow with automation, validation, and integrations.",
};

export default function Home() {
  const hooks = hooksData as Hook[];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Header />
      <main>
        <HookGrid hooks={hooks} />
      </main>
    </div>
  );
}
