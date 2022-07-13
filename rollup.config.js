import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

// plugin

// Bundles code

// Looks for a specific file main.js

// changes the content of the file

// re-builds the bundle

export default {
  input: "main.js",
  output: [
    {
      file: "bundle.js",
      format: "cjs",
    },
    {
      file: "bundle.min.js",
      format: "iife",
      name: "version",
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
