import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
// import { type FixupPluginDefinition } from "@eslint/compat";

export default tseslint.config(
  {
    ignores: [
      "dist",
      "node_modules",
      "commitizen.config.cjs",
      "commitlint.config.cjs",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks as any,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": [
        "error",
        { groups: [["^\\u0000"], ["^components/"], ["^$"], ["^\\."]] },
      ],
      "simple-import-sort/exports": "error",
    },
  },
);
