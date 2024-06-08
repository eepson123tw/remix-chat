import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      remix({
        ignoredRouteFiles: ["**/*.css"],
      }),
    ],
    server: {
      port: 3001,
    },
    define: {
      "import.meta.env.VITE_SOCKET_SERVER_URL": JSON.stringify(
        env.VITE_SOCKET_SERVER_URL
      ),
    },
  };
});
