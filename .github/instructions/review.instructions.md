---
applyTo: "**"
---

# Code Reviewing Instructions

## General Principles:
*   Always think step-by-step when reviewing code.
*   Refer to the `codegen.instructions.md` for project standards and the expected development workflow.
*   Encourage chain of thought in your review feedback.
*   When you run into problems understanding code, ask cursor to write a report with all files listed and what they do and the problems encountered.

## Review Focus Areas:
*   **Workflow Adherence:**
    *   Was a clear plan established before coding?
    *   Was the code implemented based on the user's request and plan?
    *   Was the **Visual UI & Functional Verification with MCP Server** step performed thoroughly?
    *   If issues were found during verification, was the iterative correction loop followed until success?
    *   Were changes **frequently committed to `git` locally** with good messages?
    *   Were verified changes **pushed to the `github main branch`**?
*   **Correctness & Functionality:**
    *   Does the code implement the user's requirements accurately?
    *   Does the relevant part of the website work correctly after the changes?
    *   Does the UI look as expected and function properly?
    *   Are edge cases handled appropriately (where applicable and discernible)?
*   **Clarity & Readability:** Is the code easy to understand? Are variable and function names clear? Is the logic straightforward?
*   **Maintainability:** Is the code well-structured? Can it be easily modified or extended?
*   **TypeScript Usage:** Are types used effectively? Is the code type-safe?
*   **React Best Practices:** Does the code follow React conventions (functional components, hooks, etc.)?
*   **shadcn-ui Integration:** Are shadcn-ui components used correctly and consistently?
*   **Tailwind CSS Usage:** Are Tailwind CSS classes applied appropriately and efficiently? Is the styling consistent with the design?
*   **Performance:** Are there any obvious performance bottlenecks introduced by the changes?
*   **Security:** Are there any potential security vulnerabilities introduced? (Basic check)
*   **Adherence to Instructions:** Does the code adhere to all other relevant instructions provided in `codegen.instructions.md`?
*   **Commit Messages:** Are commit messages clear, concise, and descriptive of the changes made?

## Feedback Style:
*   Be constructive and specific.
*   Suggest improvements rather than just pointing out flaws.
*   Keep answers concise and direct.
*   Suggest alternative solutions where appropriate.
*   Avoid unnecessary explanations.
*   Prioritize technical details over generic advice.