import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

export default defineConfig(() => {
  return {
    ssr: { target: "webworker" },
    plugins: [
      qwikCity(),
      tsconfigPaths(),
    ],
    resolve: {
      alias: {
        "~bootstrap": __dirname + "/node_modules/bootstrap",
      },
    },
  };
});
