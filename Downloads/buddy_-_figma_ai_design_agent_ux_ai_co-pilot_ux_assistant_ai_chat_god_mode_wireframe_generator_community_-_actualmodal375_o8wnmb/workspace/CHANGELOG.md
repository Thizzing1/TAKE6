<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
## 2026-05-02 (conversion)
- Converted all `.tsx`/`.ts` → `.jsx`/`.js`; deleted old TS files
- New JSX files: `src/index.jsx`, `src/screens/Actualmodal/Actualmodal.jsx`, `src/screens/Actualmodal/index.js`
- New JSX UI: `src/components/ui/button.jsx`, `src/components/ui/card.jsx`, `src/lib/utils.js`
- Updated `index.html` entry point to `./src/index.jsx`
## 2026-05-02
- Removed close button from modal header in `src/screens/Actualmodal/Actualmodal.tsx`
- Fixed missing `ConnectWalletModal` named export in `src/screens/Actualmodal/index.ts`
- Fixed `tailwind.css` import in `src/index.tsx` to use absolute `/tailwind.css` path
</changelog>
