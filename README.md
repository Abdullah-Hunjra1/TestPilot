# TestPilot

> AI-powered software testing automation platform that helps developers generate test cases and execute browser tests with confidence.

TestPilot is an AI-powered testing platform designed to simplify software testing. It connects to GitHub repositories, uses AI to analyze application context and generate relevant test cases, and executes browser-based tests in a cloud environment.

The goal is to make testing easier to manage by bringing test generation, browser execution, and test results together in one workspace.

## Features

- 🤖 **AI-Powered Test Generation**
  - Generate relevant test cases using Google Gemini.
  - Use repository and application context to guide test generation.
  - Generate test scripts for browser-based testing.

- 🔗 **GitHub Integration**
  - Connect GitHub through OAuth.
  - Access repository information for testing workflows.
  - Select repositories to work with through the platform.

- 🌐 **Automated Browser Testing**
  - Execute browser tests using Playwright.
  - Run browser automation in a cloud environment powered by Browserbase.
  - Test application pages through automated browser interactions.

- 📊 **Test Management Dashboard**
  - View generated test cases in a workspace.
  - Track test execution status and results.
  - Review test information and execution logs.

- 🔐 **Authentication**
  - User authentication powered by Clerk.
  - GitHub OAuth integration for repository access.

- 🗄️ **Database Integration**
  - Store application data using Neon PostgreSQL.
  - Manage database schemas and queries with Drizzle ORM.

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

### Backend
- Next.js App Router
- Next.js Route Handlers
- TypeScript

### AI
- Google Gemini
- AI-powered test case and test script generation

### Browser Automation
- Playwright
- Browserbase

### Authentication & Integrations
- Clerk
- GitHub OAuth

### Database
- Neon PostgreSQL
- Drizzle ORM

### Development Tools
- Git
- GitHub
- npm

## How It Works

```text
Connect GitHub Repository
          |
          v
Analyze Application Context
          |
          v
Generate Test Cases with AI
          |
          v
Prepare Browser Test Scripts
          |
          v
Execute Tests with Playwright
          |
          v
Browserbase Cloud Browser
          |
          v
Review Results and Logs
```

## Getting Started

### Prerequisites

Before running TestPilot locally, make sure you have:

- Node.js compatible with the project's dependencies
- npm
- A GitHub account
- A Clerk application
- A Neon PostgreSQL database
- A Google Gemini API key
- A Browserbase account and API credentials

### Installation

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd testpilot
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the required environment variables using the project's existing environment configuration.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

> Note: Required environment variable names and values depend on the project's current configuration. Never commit API keys, OAuth secrets, database credentials, or other sensitive environment values.

## Project Structure

```text
testpilot/
├── app/
│   ├── api/                 # API routes and integrations
│   ├── sign-in/             # Clerk sign-in
│   ├── sign-up/             # Clerk sign-up
│   ├── workspace/           # Main testing workspace
│   ├── layout.tsx           # Root application layout
│   └── page.tsx             # Marketing homepage
├── components/
│   ├── custom/              # Workspace components
│   ├── marketing/           # Marketing homepage components
│   └── ui/                  # Reusable UI components
├── drizzle/                 # Database schema/migrations, if configured
├── public/                  # Static assets
└── package.json
```

## Environment Configuration

TestPilot integrates with external services that require environment configuration, including:

- Clerk authentication keys
- GitHub OAuth credentials and callback configuration
- Neon PostgreSQL database connection
- Google Gemini API key
- Browserbase API credentials

Refer to the project's environment configuration and integration code for the exact variable names and required callback URLs.

## Current Development Status

TestPilot is under active development. Its core direction includes GitHub repository integration, AI-assisted test generation, cloud browser execution, and a centralized testing workspace.

Individual features and integrations may require further configuration and testing before production use.

## Future Improvements

Potential improvements include:

- More detailed test execution reports
- Improved handling of failed tests and retries
- Test history and execution analytics
- Better debugging tools with screenshots and logs
- Expanded test configuration and customization


