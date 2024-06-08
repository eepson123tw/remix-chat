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
import { json, LinksFunction } from "@remix-run/node";

import styles from "./styles/global.css";
import tailstyles from "./tailwind.css";

export async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}

export const links = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailstyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const { locale, ENV } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-red-400">
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
