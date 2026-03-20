import { List, ActionPanel, Action, getPreferenceValues } from "@raycast/api";
import { shortcuts, CATEGORIES } from "./data/shortcuts";
import type { FigmaShortcut } from "./data/shortcuts";

interface Preferences {
  platform: "mac" | "windows" | "linux";
}

function getPlatformLabel(platform: Preferences["platform"]): string {
  if (platform === "mac") return "macOS";
  if (platform === "windows") return "Windows";
  return "Linux";
}

// Linux uses the same shortcuts as Windows
function getKeys(shortcut: FigmaShortcut, platform: Preferences["platform"]): string {
  return platform === "mac" ? shortcut.mac : shortcut.windows;
}

export default function Command() {
  const { platform } = getPreferenceValues<Preferences>();
  const platformLabel = getPlatformLabel(platform);

  return (
    <List searchBarPlaceholder="Search Figma shortcuts...">
      {CATEGORIES.map((category) => {
        const items = shortcuts.filter((s) => s.category === category);
        if (items.length === 0) return null;

        return (
          <List.Section key={category} title={category} subtitle={`${items.length} shortcuts`}>
            {items.map((shortcut) => {
              const keys = getKeys(shortcut, platform);
              return (
                <List.Item
                  key={shortcut.id}
                  title={shortcut.action}
                  subtitle={keys}
                  keywords={shortcut.keywords}
                  accessories={[{ tag: { value: platformLabel, color: "#F24E1E" } }]}
                  actions={
                    <ActionPanel>
                      <Action.CopyToClipboard title="Copy Shortcut" content={keys} />
                      <Action.CopyToClipboard
                        title="Copy Action Name"
                        content={shortcut.action}
                        shortcut={{ modifiers: ["shift"], key: "return" }}
                      />
                    </ActionPanel>
                  }
                />
              );
            })}
          </List.Section>
        );
      })}
    </List>
  );
}
