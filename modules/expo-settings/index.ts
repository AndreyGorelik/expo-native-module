import ExpoSettingsModule from "./src/ExpoSettingsModule";

export function getTheme(): string {
  return ExpoSettingsModule.getTheme();
}

export function setTheme(theme: string): void {
  return ExpoSettingsModule.setTheme(theme);
}

export function hello(): string {
  return ExpoSettingsModule.hello()
}
