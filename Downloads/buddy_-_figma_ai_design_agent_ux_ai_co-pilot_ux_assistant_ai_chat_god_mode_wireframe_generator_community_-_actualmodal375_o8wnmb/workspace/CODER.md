<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## Project Structure
- Entry: `index.html` → `src/index.jsx`
- Modal component: `src/screens/Actualmodal/Actualmodal.jsx` (exported as `ConnectWalletModal` and `Actualmodal`)
- UI primitives: `src/components/ui/button.jsx`, `src/components/ui/card.jsx`
- Utilities: `src/lib/utils.js` (cn helper using clsx + tailwind-merge)
- Styles: `tailwind.css` (Tailwind base + custom animations like `animate-slide-up`)
- No TypeScript — project is plain React JSX + CSS (Tailwind)
</coder>
