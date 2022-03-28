import { Window as window } from "@/utils/server-safe-globals";

export const userPrefersDark =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export const userPrefersLight =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
