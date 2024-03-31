export function saveToStorage(key: string, value: unknown): void {
  const treatedValue: string =
    typeof value === "string" ? value : JSON.stringify(value);

  window?.localStorage.setItem(key, treatedValue);
}

export function getFromStorage(key: string): string | null {
  return window?.localStorage.getItem(key);
}
