import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

interface Alias {
  [key: string]: string;
}

const alias = (path = "src") => ({
  "@components": `${path}/components`,
  "@context": `${path}/context`,
  "@services": `${path}/services`,
  "@utils": `${path}/utils`,
});

const resolvedAlias = (alias: Alias): Record<string, string> =>
  Object.entries(alias).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: path.resolve(__dirname, value),
    }),
    {}
  );

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: resolvedAlias(alias()),
  },
  plugins: [react()],
});
