export enum HookCategory {
  PROMPT_CONTROL = "Prompt Control",
  PRE_EXECUTION = "Pre-Execution",
  POST_EXECUTION = "Post-Execution",
  COMPLETION = "Completion",
  SESSION_MANAGEMENT = "Session Management",
  NOTIFICATIONS = "Notifications",
  CODE_QUALITY = "Code Quality",
  SECURITY = "Security",
  DEPENDENCY_MANAGEMENT = "Dependency Management",
  PRODUCTIVITY = "Productivity",
  DEBUGGING = "Debugging",
  OTHER = "Other"
}

export enum HookEventType {
  USER_PROMPT_SUBMIT = "UserPromptSubmit",
  PRE_TOOL_USE = "PreToolUse",
  POST_TOOL_USE = "PostToolUse",
  PRE_COMPACT = "PreCompact",
  STOP = "Stop",
  SUBAGENT_STOP = "SubagentStop",
  SESSION_START = "SessionStart",
  SESSION_END = "SessionEnd",
  NOTIFICATION = "Notification"
}

export interface Hook {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  category: HookCategory;
  hookType: HookEventType;
  githubUrl: string;
  author: string;
  tags: string[];
  language?: string;
  lastUpdated?: string;
  featured?: boolean;
}
