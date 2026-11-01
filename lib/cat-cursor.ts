// Shared by the cursor cat and its header toggle. The cat is on by default;
// visitors can switch it off and the choice is remembered in localStorage.
export const CAT_STORAGE_KEY = "cat-cursor";
export const CAT_EVENT = "cat-cursor-change";

export function readCatPreference(): boolean {
  try {
    return localStorage.getItem(CAT_STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function writeCatPreference(on: boolean) {
  try {
    localStorage.setItem(CAT_STORAGE_KEY, on ? "on" : "off");
  } catch {
    /* private mode etc.: the toggle still works for this page view */
  }
  window.dispatchEvent(new Event(CAT_EVENT));
}
