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
import { jsx } from "react/jsx-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url })
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
var global_default = "/build/_assets/global-KUYSSM6X.css";

// app/root.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}
var links = () => [{ rel: "stylesheet", href: global_default }];
function App() {
  let { locale, ENV } = useLoaderData();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.process = ${JSON.stringify({
              env: ENV.LOCAL_PATH
            })}`
          }
        }
      ),
      /* @__PURE__ */ jsx2(ScrollRestoration, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2("div", { children: [
    /* @__PURE__ */ jsx3("h1", { children: "\u804A\u5929\u5BA4" }),
    /* @__PURE__ */ jsxs2("div", { id: "username", children: [
      "Username: ",
      /* @__PURE__ */ jsx3("span", { children: userName })
    ] }),
    /* @__PURE__ */ jsxs2("div", { id: "assistantName", children: [
      "Assistant Name: ",
      /* @__PURE__ */ jsx3("span", { children: assistantName })
    ] }),
    /* @__PURE__ */ jsx3("div", { id: "chatbox", children: messages.map((msg, index) => {
      let isUserMessage = msg.startsWith(`${userName}:`);
      return /* @__PURE__ */ jsx3(
        "div",
        {
          className: `message ${isUserMessage ? "user" : "assistant"}`,
          children: /* @__PURE__ */ jsx3("div", { className: "message-content", children: msg })
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs2("div", { id: "inputContainer", children: [
      /* @__PURE__ */ jsx3(
        "input",
        {
          type: "text",
          id: "messageInput",
          placeholder: "Type a message...",
          value: message,
          onChange: (e) => setMessage(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx3("button", { id: "sendButton", onClick: sendMessage, children: "Send" })
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PZQWHUYM.js", imports: ["/build/_shared/chunk-36JIVDKI.js", "/build/_shared/chunk-RKJSHOWP.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RON34DR2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OS2QWHTR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "27c8414d", hmr: void 0, url: "/build/manifest-27C8414D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
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
