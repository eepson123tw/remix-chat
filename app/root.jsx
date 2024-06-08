import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <title>My First Remix App</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        <p>This is a remix app. Hooray!</p>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}
