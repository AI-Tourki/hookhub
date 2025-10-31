# HookHub - Project Specification

## Project Overview

**HookHub** is a curated directory and marketplace for open-source Claude Code hooks. It serves as a central discovery platform where developers can browse, search, and find useful hooks to enhance their Claude Code workflows.

Claude Code hooks are shell commands that execute in response to specific events (tool usage, prompt submission, session lifecycle, etc.), allowing developers to customize and extend Claude Code's behavior with automation, validation, notifications, and integrations.

## MVP Scope

### In Scope
- **Display Functionality**: Browse hooks in a grid-based layout
- **Search**: Basic text search across hook names and descriptions
- **Category Filtering**: Filter hooks by predefined categories
- **Hook Details**: View comprehensive information about each hook including name, description, category, GitHub repository link, and metadata
- **Responsive Design**: Mobile-friendly grid layout that adapts to different screen sizes
- **Static Data**: Hooks data stored locally (JSON file or hardcoded)

### Out of Scope (Post-MVP)
- User authentication and accounts
- Hook submissions by users
- Ratings and reviews
- Installation instructions/automation
- Hook analytics or usage statistics
- Backend API or database
- Admin panel for hook management

## Hook Data Model

Each hook entry contains the following fields:

```typescript
interface Hook {
  id: string;                    // Unique identifier
  name: string;                  // Hook display name
  slug: string;                  // URL-friendly identifier
  description: string;           // Brief description (1-2 sentences)
  longDescription?: string;      // Detailed description (optional)
  category: HookCategory;        // Primary category
  hookType: HookEventType;       // Claude Code hook event type
  githubUrl: string;            // Link to GitHub repository
  author: string;               // GitHub username or author name
  tags: string[];               // Additional searchable tags
  language?: string;            // Implementation language (Python, Bash, etc.)
  lastUpdated?: string;         // ISO date string
  featured?: boolean;           // Featured/recommended hook
}
```

### Hook Categories

```typescript
enum HookCategory {
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
```

### Hook Event Types

```typescript
enum HookEventType {
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
```

## Categories Taxonomy

### 1. Prompt Control
**Hook Type**: `UserPromptSubmit`
**Purpose**: Intercept and modify user prompts before Claude processes them
**Examples**: Prompt validation, context injection, prompt templates

### 2. Pre-Execution
**Hook Types**: `PreToolUse`, `PreCompact`
**Purpose**: Execute before Claude performs tool operations or compaction
**Examples**: Command blockers, security validators, pre-flight checks

### 3. Post-Execution
**Hook Type**: `PostToolUse`
**Purpose**: Execute after tool completion
**Examples**: Logging, transcript conversion, result validation

### 4. Completion
**Hook Types**: `Stop`, `SubagentStop`
**Purpose**: Execute when Claude or subagents finish responding
**Examples**: Completion messages, summary generation, cleanup tasks

### 5. Session Management
**Hook Types**: `SessionStart`, `SessionEnd`
**Purpose**: Manage session lifecycle events
**Examples**: Context loading, environment setup, session cleanup

### 6. Notifications
**Hook Type**: `Notification`
**Purpose**: Handle Claude Code notifications
**Examples**: Text-to-speech alerts, mobile notifications, desktop alerts

### 7. Code Quality
**Hook Types**: Various (typically `PreToolUse`, `PostToolUse`)
**Purpose**: Enforce code standards and best practices
**Examples**: Linters, formatters, complexity checkers

### 8. Security
**Hook Types**: Various (typically `PreToolUse`)
**Purpose**: Enhance security and prevent dangerous operations
**Examples**: Command validators, file operation blockers, credential scanners

### 9. Dependency Management
**Hook Types**: `PreToolUse`, `PostToolUse`
**Purpose**: Manage and validate project dependencies
**Examples**: Package age checkers, vulnerability scanners, license validators

## UI/UX Requirements

### Main Page (Home)

#### Layout
- **Header**
  - Logo/branding: "HookHub"
  - Tagline: "Discover powerful Claude Code hooks"
  - Search bar (prominent, centered)

- **Category Filter Bar**
  - Horizontal scrollable list of category pills
  - "All" option to show all hooks
  - Active category highlighted
  - Shows count of hooks per category

- **Hooks Grid**
  - Responsive grid layout:
    - Desktop (lg): 3 columns
    - Tablet (md): 2 columns
    - Mobile (sm): 1 column
  - Card-based design for each hook

#### Hook Card Design
Each card displays:
- Hook name (prominent, bold)
- Category badge (colored by category)
- Hook type badge (subtle, secondary)
- Short description (2-3 lines, truncated)
- Author name with GitHub icon
- Tags (max 3 visible)
- "View Details" button/link
- GitHub star icon linking to repository

#### Search Functionality
- Real-time search (filter as user types)
- Search across: hook name, description, tags, author
- Show "No results" state with clear message
- Display result count

#### Category Filtering
- Click category to filter hooks
- Visual indication of active filter
- Combine with search (filter + search both active)
- Smooth transitions when filtering

### Visual Design

#### Color Scheme
- Primary: Modern, tech-focused palette
- Category colors: Distinct colors for each category
- Dark mode support (using Tailwind's `dark:` prefix)

#### Typography
- Use Geist Sans for headings and body text
- Use Geist Mono for code-related elements (hook types, tags)

#### Spacing & Layout
- Generous whitespace for readability
- Consistent padding/margins using Tailwind spacing scale
- Card hover effects (subtle elevation/shadow)

### Interactions
- Hover states on cards (scale up slightly, shadow increase)
- Smooth transitions (200-300ms)
- Loading states (skeleton screens if needed)
- Responsive touch targets for mobile

## Technical Stack

### Core Technologies
- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0 with React Compiler
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS v4

### Project Structure
```
hookHubapp/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main hooks grid page
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   ├── components/
│   │   ├── HookCard.tsx          # Individual hook card
│   │   ├── HookGrid.tsx          # Grid container
│   │   ├── SearchBar.tsx         # Search input
│   │   ├── CategoryFilter.tsx    # Category filter pills
│   │   └── Header.tsx            # App header
│   ├── data/
│   │   └── hooks.json            # Static hooks data
│   ├── types/
│   │   └── hook.ts               # TypeScript interfaces
│   └── utils/
│       └── filterHooks.ts        # Search/filter logic
├── public/
│   └── [static assets]
└── [config files]
```

### State Management
- Use React built-in state (useState, useReducer)
- No external state management needed for MVP
- URL search params for filter state (optional enhancement)

### Data Storage
- Static JSON file in `src/data/hooks.json`
- Seed with 10-15 example hooks from research

### Performance Considerations
- Server Components by default (no "use client" unless needed)
- Use "use client" only for interactive components (SearchBar, CategoryFilter)
- React Compiler handles automatic optimization
- Image optimization with Next.js `<Image>` component if using hook logos

## Sample Data Structure

```json
[
  {
    "id": "1",
    "name": "Dangerous Command Blocker",
    "slug": "dangerous-command-blocker",
    "description": "Prevents execution of dangerous commands like rm -rf to protect your system.",
    "category": "Security",
    "hookType": "PreToolUse",
    "githubUrl": "https://github.com/disler/claude-code-hooks-mastery",
    "author": "disler",
    "tags": ["security", "validation", "command-safety"],
    "language": "Python",
    "featured": true
  },
  {
    "id": "2",
    "name": "Code Quality Validator",
    "slug": "code-quality-validator",
    "description": "Enforces clean code standards by checking function length, file length, and nesting depth.",
    "category": "Code Quality",
    "hookType": "PostToolUse",
    "githubUrl": "https://github.com/decider/claude-hooks",
    "author": "decider",
    "tags": ["code-quality", "linting", "best-practices"],
    "language": "Python"
  },
  {
    "id": "3",
    "name": "Package Age Checker",
    "slug": "package-age-checker",
    "description": "Prevents installation of outdated npm/yarn packages and suggests newer versions.",
    "category": "Dependency Management",
    "hookType": "PreToolUse",
    "githubUrl": "https://github.com/decider/claude-hooks",
    "author": "decider",
    "tags": ["dependencies", "npm", "package-management"],
    "language": "Python"
  }
]
```

## Future Considerations

### Phase 2 Features
- **Hook Submissions**: Allow users to submit their hooks for review
- **User Authentication**: GitHub OAuth for submissions and favorites
- **Favorites/Bookmarks**: Save favorite hooks to personal collection
- **Detailed Hook Pages**: Dedicated page per hook with full documentation
- **Installation Guide**: Step-by-step instructions and code snippets
- **Copy to Clipboard**: One-click copy of hook configuration

### Phase 3 Features
- **Ratings & Reviews**: Community feedback on hooks
- **Usage Statistics**: Track popular hooks
- **Hook Collections**: Curated sets of hooks for specific workflows
- **Version Tracking**: Track hook updates and breaking changes
- **API**: RESTful API for programmatic access
- **Advanced Search**: Filters by language, popularity, date, etc.

### Phase 4 Features
- **Hook Testing**: Online playground to test hooks
- **CLI Tool**: Install hooks directly from command line
- **VS Code Extension**: Browse and install hooks from editor
- **Notifications**: Alert users about new hooks in categories they follow
- **Community Features**: Comments, discussions, troubleshooting help

## Success Metrics (Post-MVP)

- Number of hooks displayed
- User engagement (time on site, clicks)
- Search usage patterns
- Popular categories
- GitHub star growth for featured hooks

## Design References

- [npm package directory](https://www.npmjs.com/) - Grid layout inspiration
- [Vercel Templates](https://vercel.com/templates) - Card design
- [GitHub Marketplace](https://github.com/marketplace) - Category filtering

## Development Guidelines

1. **Component Structure**: Create reusable, single-responsibility components
2. **TypeScript**: Use strict typing for all data structures
3. **Accessibility**: Ensure keyboard navigation and screen reader support
4. **Performance**: Optimize for fast load times and smooth interactions
5. **Responsive**: Mobile-first approach with Tailwind breakpoints
6. **Code Quality**: Follow Next.js and React best practices
7. **Documentation**: Comment complex logic and component props

## Getting Started

1. Set up the data model and TypeScript types
2. Create the hooks data JSON file with sample data
3. Build core components (HookCard, HookGrid, SearchBar, CategoryFilter)
4. Implement search and filter logic
5. Style with Tailwind CSS v4
6. Test responsive behavior
7. Polish interactions and animations
