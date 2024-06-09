import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";
import { json } from "@remix-run/node";

import styles from "./tailwind.css";
import configcss from "./assets/styles/index.css";

export async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}

export const links = () => [
  { rel: "stylesheet", href: configcss },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  const { locale, ENV } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.process = ${JSON.stringify({
              env: ENV.LOCAL_PATH,
            })}`,
          }}
        />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
