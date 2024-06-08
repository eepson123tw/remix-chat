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
var global_default = "/build/_assets/global-MNDKXT7F.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}
var links = () => [{ rel: "stylesheet", href: global_default }];
function App() {
  let { locale, ENV } = useLoaderData();
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 37,
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
          lineNumber: 38,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 31,
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
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
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
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "\u804A\u5929\u5BA4" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { id: "username", children: [
      "Username: ",
      /* @__PURE__ */ jsxDEV3("span", { children: userName }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 48,
        columnNumber: 19
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { id: "assistantName", children: [
      "Assistant Name: ",
      /* @__PURE__ */ jsxDEV3("span", { children: assistantName }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { id: "chatbox", children: messages.map((msg, index) => {
      let isUserMessage = msg.startsWith(`${userName}:`);
      return /* @__PURE__ */ jsxDEV3(
        "div",
        {
          className: `message ${isUserMessage ? "user" : "assistant"}`,
          children: /* @__PURE__ */ jsxDEV3("div", { className: "message-content", children: msg }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this)
        },
        index,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 57,
          columnNumber: 13
        },
        this
      );
    }) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { id: "inputContainer", children: [
      /* @__PURE__ */ jsxDEV3(
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
          lineNumber: 67,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV3("button", { id: "sendButton", onClick: sendMessage, children: "Send" }, void 0, !1, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-7RQHCKFD.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-SFDIGTAH.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-GMFRLIKR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-PFXQAUAD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-T4E4GN5B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "077eebda", hmr: { runtime: "/build/_shared/chunk-GMFRLIKR.js", timestamp: 1717841220459 }, url: "/build/manifest-077EEBDA.js" };

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
