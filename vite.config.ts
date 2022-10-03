import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyEdge from "@netlify/vite-plugin-netlify-edge";

export default defineConfig(() => {
  return {
    ssr: { target: "node", format: "cjs", noExternal: /./ },
    plugins: [
      qwikCity(),
      qwikVite({
        ssr: { outDir: "netlify/edge-functions/entry.netlify-edge" },
      }),
      tsconfigPaths(),
      netlifyEdge({ functionName: "entry.netlify-edge" }),
    ],
    resolve: {
      alias: {
        "~bootstrap": __dirname+"/node_modules/bootstrap",
      },
    },
  };
});
