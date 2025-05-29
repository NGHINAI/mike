---
applyTo: "**"
---

# Code Generation Instructions for Vite/TypeScript/React/shadcn-ui/Tailwind CSS Project

## Core Development Workflow:
1.  **Understand User Instruction & Plan:**
    *   Before any action, create a clear and detailed to-do plan in your chat window.
2.  **Write Code:**
    *   Implement the user's request and the agreed-upon plan incrementally.
    *   Focus on small, manageable chunks of work.
3.  **Visual UI & Functional Verification with MCP Server:**
    *   After implementing a feature or a significant change:
        *   Use Puppeteer and Playwright via an MCP (Multi-Copilot Planner) server to:
            *   **Visually inspect** the UI changes you have coded.
            *   **Verify** that the relevant parts of the website are **successfully working** as expected.
            *   **Confirm** that the changes desired by the user are **implemented properly** and accurately reflect the request.
4.  **Iterative Correction Loop:**
    *   If visual inspection or functional checks with the MCP server reveal issues, discrepancies, or that the website is not working as intended:
        *   Analyze the failure or incorrect output.
        *   Edit the code to fix the issues.
        *   Re-perform the visual UI and functional verification with the MCP server.
        *   Repeat this sub-loop until the implementation is correct and visually confirmed.
5.  **Commit & Push Changes:**
    *   **Frequently commit changes to `git` locally** as you complete logical units of work and they pass verification. Use clear, descriptive commit messages explaining *what* changed and *why*.
    *   After a feature or a set of related changes is fully implemented and verified, **push the commits to the `github main branch`** using github MCP server.

## General Principles (Supporting the Workflow):
*   Always think step-by-step before generating code. Outline the steps if the task is complex.
*   Use .cursorrules (they are always in AI context) to tell broad rules.
*   Get agent to write code incrementally.
*   Encourage chain of thought in your prompts and internal processing.
*   When you run into problems, ask cursor to write a report with all files listed and what they do and the problems encountered. Ask Claude/chatgpt how to fix the problem.
*   Keep context short by explicitly adding files via @. Longer the context, more derailed AI will go.
*   Start new chats when context gets longer or for distinct tasks.
*   Resync / index code frequently.
*   Use .cursorignore to exclude irrelevant files.
*   Use /Reference open editors to quickly add them to context.
*   Notepads are frequently used prompts.
*   Optional: enable YOLO mode if you want the AI to also write basic tests for its own verification, but primary verification is via MCP server as described above.

## Project-Specific Technologies:
*   **Vite:** Ensure code is compatible with Vite's build process and development server.
*   **TypeScript:**
    *   Strictly use TypeScript for all new code.
    *   Define types and interfaces clearly.
    *   Leverage TypeScript features for robust and maintainable code.
    *   Use underscore for private field names.
*   **React:**
    *   Generate functional components with Hooks.
    *   Follow React best practices.
    *   Ensure components are reusable and well-structured.
*   **shadcn-ui:**
    *   Utilize shadcn-ui components according to their documentation.
    *   Ensure proper integration and styling.
*   **Tailwind CSS:**
    *   Use Tailwind CSS utility classes for styling.
    *   Follow Tailwind CSS conventions and best practices.
    *   Ensure responsive design.

## Code Style and Quality:
*   Write clean, readable, and maintainable code.
*   Add comments where necessary to explain complex logic.
*   Ensure code is well-formatted.