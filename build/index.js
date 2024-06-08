var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import ReactDOMServer from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 11,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";

// app/styles/global.css
var global_default = "/build/_assets/global-G6N42O2F.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-NL7MBXRC.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  let { locale, ENV } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { className: "bg-red-400", children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.process = ${JSON.stringify({
              env: ENV.LOCAL_PATH
            })}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.jsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect, useState } from "react";
import io from "socket.io-client";

// @/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// @/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// @/components/ui/button.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV3(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "@/components/ui/button.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/routes/_index.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var socketURL = process.env;
function Index() {
  let [userName, setUserName] = useState(""), [assistantName, setAssistantName] = useState(""), [messages, setMessages] = useState([]), [message, setMessage] = useState("");
  useEffect(() => {
    let socket = io(socketURL);
    return socket.on("connect", () => {
      console.log("Connected to the server");
    }), socket.on("$name", (name) => {
      setUserName(name);
    }), socket.on("$assistantName", (name) => {
      setAssistantName(name);
    }), socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    }), socket.on("error", (data) => {
      console.error("Socket.IO error: ", data);
    }), () => {
      socket.disconnect();
    };
  }, []);
  let sendMessage = () => {
    io(socketURL).emit("message", `${userName}: ${message}`), setMessage("");
  };
  return /* @__PURE__ */ jsxDEV4("div", { children: [
    /* @__PURE__ */ jsxDEV4("h1", { children: "\u804A\u5929\u5BA4" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { id: "username", children: [
      "Username: ",
      /* @__PURE__ */ jsxDEV4("span", { children: userName }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 50,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { id: "assistantName", children: [
      "Assistant Name: ",
      /* @__PURE__ */ jsxDEV4("span", { children: assistantName }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 53,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { id: "chatbox", children: messages.map((msg, index) => {
      let isUserMessage = msg.startsWith(`${userName}:`);
      return /* @__PURE__ */ jsxDEV4(
        "div",
        {
          className: `message ${isUserMessage ? "user" : "assistant"}`,
          children: /* @__PURE__ */ jsxDEV4("div", { className: "message-content", children: msg }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this)
        },
        index,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 59,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { id: "inputContainer", children: [
      /* @__PURE__ */ jsxDEV4(
        "input",
        {
          type: "text",
          id: "messageInput",
          placeholder: "Type a message...",
          value: message,
          onChange: (e) => setMessage(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 69,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV4(
        Button,
        {
          id: "sendButton",
          className: "text-3xl font-bold underline bg-black",
          onClick: sendMessage,
          children: "Send"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 76,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7RQHCKFD.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-SFDIGTAH.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-GMFRLIKR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GEE7B2CC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-7Q6MOPOF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "7763db28", hmr: { runtime: "/build/_shared/chunk-GMFRLIKR.js", timestamp: 1717866286931 }, url: "/build/manifest-7763DB28.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
