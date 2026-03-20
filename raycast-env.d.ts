/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-shortcuts` command */
  export type SearchShortcuts = ExtensionPreferences & {
  /** Platform - Which OS shortcut format to display and copy */
  "platform": "mac" | "windows" | "linux"
}
}

declare namespace Arguments {
  /** Arguments passed to the `search-shortcuts` command */
  export type SearchShortcuts = {}
}

