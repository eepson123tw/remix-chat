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

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KMDCXUF2.css";

// app/assets/styles/index.css
var styles_default = "/build/_assets/index-VIG3O62D.css";

// app/root.jsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  return json({ ENV: { LOCAL_PATH: process.env.VITE_SOCKET_SERVER_URL } });
}
var links = () => [
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: tailwind_default }
];
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
  default: () => Index,
  loader: () => loader2
});
import "react";
import { useLoaderData as useLoaderData2, Link as Link4, json as json2 } from "@remix-run/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { twMerge as twMerge2 } from "tailwind-merge";
import { clsx as clsx2 } from "clsx";

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

// app/cookies.server.jsx
import { createCookie } from "@remix-run/node";
var userPrefs = createCookie("user-prefs", {
  maxAge: 604800
  // one week
});

// app/components/chat/chat-layout.jsx
import { useEffect as useEffect3, useState as useState3 } from "react";

// @/components/ui/resizable.tsx
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import * as ResizablePrimitive from "react-resizable-panels";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV4(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "@/components/ui/resizable.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
), ResizablePanel = ResizablePrimitive.Panel, ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV4(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsxDEV4("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border", children: /* @__PURE__ */ jsxDEV4(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }, void 0, !1, {
      fileName: "@/components/ui/resizable.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "@/components/ui/resizable.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "@/components/ui/resizable.tsx",
    lineNumber: 28,
    columnNumber: 3
  },
  this
);

// app/components/sidebar.jsx
import { Link } from "@remix-run/react";
import { MoreHorizontal, SquarePen } from "lucide-react";

// @/components/ui/tooltip.tsx
import * as React2 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var TooltipProvider = TooltipPrimitive.Provider, Tooltip = TooltipPrimitive.Root, TooltipTrigger = TooltipPrimitive.Trigger, TooltipContent = React2.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "@/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// app/components/ui/avatar.jsx
import * as React3 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Avatar = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV6(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.jsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV6(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.jsx",
    lineNumber: 21,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV6(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.jsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/components/sidebar.jsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Sidebar({ links: links2, isCollapsed, isMobile }) {
  return /* @__PURE__ */ jsxDEV7(
    "div",
    {
      "data-collapsed": isCollapsed,
      className: "relative group flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 ",
      children: [
        !isCollapsed && /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-between p-2 items-center", children: [
          /* @__PURE__ */ jsxDEV7("div", { className: "flex gap-2 items-center text-2xl", children: [
            /* @__PURE__ */ jsxDEV7("p", { className: "font-medium", children: "Chats" }, void 0, !1, {
              fileName: "app/components/sidebar.jsx",
              lineNumber: 26,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV7("span", { className: "text-zinc-300", children: [
              "(",
              links2.length,
              ")"
            ] }, void 0, !0, {
              fileName: "app/components/sidebar.jsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/sidebar.jsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV7("div", { children: [
            /* @__PURE__ */ jsxDEV7(
              Link,
              {
                href: "#",
                className: cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9"
                ),
                children: /* @__PURE__ */ jsxDEV7(MoreHorizontal, { size: 20 }, void 0, !1, {
                  fileName: "app/components/sidebar.jsx",
                  lineNumber: 38,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/sidebar.jsx",
                lineNumber: 31,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV7(
              Link,
              {
                href: "#",
                className: cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "h-9 w-9"
                ),
                children: /* @__PURE__ */ jsxDEV7(SquarePen, { size: 20 }, void 0, !1, {
                  fileName: "app/components/sidebar.jsx",
                  lineNumber: 48,
                  columnNumber: 15
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/sidebar.jsx",
                lineNumber: 41,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/sidebar.jsx",
            lineNumber: 30,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/sidebar.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV7("nav", { className: "grid gap-1 px-2  group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2", children: links2.map(
          (link, index) => isCollapsed ? /* @__PURE__ */ jsxDEV7(TooltipProvider, { children: /* @__PURE__ */ jsxDEV7(Tooltip, { delayDuration: 0, children: [
            /* @__PURE__ */ jsxDEV7(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV7(
              Link,
              {
                href: "#",
                className: cn(
                  buttonVariants({ variant: link.variant, size: "icon" }),
                  "h-11 w-11 md:h-16 md:w-16",
                  link.variant === "grey" && "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                ),
                children: [
                  /* @__PURE__ */ jsxDEV7(Avatar, { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxDEV7(
                    AvatarImage,
                    {
                      src: link.avatar,
                      alt: link.avatar,
                      width: 6,
                      height: 6,
                      className: "w-10 h-10 "
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/sidebar.jsx",
                      lineNumber: 69,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/sidebar.jsx",
                    lineNumber: 68,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV7("span", { className: "sr-only", children: link.name }, void 0, !1, {
                    fileName: "app/components/sidebar.jsx",
                    lineNumber: 77,
                    columnNumber: 21
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/sidebar.jsx",
                lineNumber: 59,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/sidebar.jsx",
              lineNumber: 58,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV7(
              TooltipContent,
              {
                side: "right",
                className: "flex items-center gap-4",
                children: link.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/sidebar.jsx",
                lineNumber: 80,
                columnNumber: 17
              },
              this
            )
          ] }, index, !0, {
            fileName: "app/components/sidebar.jsx",
            lineNumber: 57,
            columnNumber: 15
          }, this) }, index, !1, {
            fileName: "app/components/sidebar.jsx",
            lineNumber: 56,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV7(
            Link,
            {
              href: "#",
              className: cn(
                buttonVariants({ variant: link.variant, size: "xl" }),
                link.variant === "grey" && "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white shrink",
                "justify-start gap-4 p-2"
              ),
              children: [
                /* @__PURE__ */ jsxDEV7(Avatar, { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxDEV7(
                  AvatarImage,
                  {
                    src: link.avatar,
                    alt: link.avatar,
                    width: 6,
                    height: 6,
                    className: "w-10 h-10 "
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/sidebar.jsx",
                    lineNumber: 100,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/sidebar.jsx",
                  lineNumber: 99,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col max-w-28", children: /* @__PURE__ */ jsxDEV7("span", { children: link.name }, void 0, !1, {
                  fileName: "app/components/sidebar.jsx",
                  lineNumber: 109,
                  columnNumber: 17
                }, this) }, void 0, !1, {
                  fileName: "app/components/sidebar.jsx",
                  lineNumber: 108,
                  columnNumber: 15
                }, this)
              ]
            },
            index,
            !0,
            {
              fileName: "app/components/sidebar.jsx",
              lineNumber: 89,
              columnNumber: 13
            },
            this
          )
        ) }, void 0, !1, {
          fileName: "app/components/sidebar.jsx",
          lineNumber: 53,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/sidebar.jsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/chat/chat.jsx
import io from "socket.io-client";
import { useState as useState2, useEffect as useEffect2 } from "react";

// app/components/chat/chat-topbar.jsx
import "react";
import { Link as Link2 } from "@remix-run/react";
import { Info, Phone, Video } from "lucide-react";

// app/components/ui/button.jsx
import * as React4 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var buttonVariants2 = cva2(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/30 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        grey: "bg-accent/30 text-accent-foreground shadow-sm hover:bg-accent/80"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        xl: "h-16 rounded-md px-5 "
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button2 = React4.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
    asChild ? Slot2 : "button",
    {
      className: cn(buttonVariants2({ variant, size, className })),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.jsx",
      lineNumber: 43,
      columnNumber: 7
    },
    this
  )
);
Button2.displayName = "Button";

// app/components/chat/chat-topbar.jsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var TopbarIcons = [
  { icon: Phone, content: "Phone" },
  { icon: Video, content: "Video" },
  { icon: Info, content: "Info" }
], TooltipContentWrapper = ({
  children,
  index,
  variant = "grey",
  icon
}) => /* @__PURE__ */ jsxDEV9(TooltipProvider, { children: /* @__PURE__ */ jsxDEV9(Tooltip, { delayDuration: 0, children: [
  /* @__PURE__ */ jsxDEV9(TooltipTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV9(
    Link2,
    {
      href: "#",
      className: cn(
        buttonVariants2({ variant: "ghost", size: "icon" }),
        "h-9 w-9",
        "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
      ),
      children: /* @__PURE__ */ jsxDEV9(icon.icon, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
        fileName: "app/components/chat/chat-topbar.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    },
    index,
    !1,
    {
      fileName: "app/components/chat/chat-topbar.jsx",
      lineNumber: 32,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/chat/chat-topbar.jsx",
    lineNumber: 31,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV9(TooltipContent, { side: "right", className: "flex items-center gap-4", children: icon.content }, void 0, !1, {
    fileName: "app/components/chat/chat-topbar.jsx",
    lineNumber: 44,
    columnNumber: 9
  }, this)
] }, icon.content, !0, {
  fileName: "app/components/chat/chat-topbar.jsx",
  lineNumber: 30,
  columnNumber: 7
}, this) }, icon.content, !1, {
  fileName: "app/components/chat/chat-topbar.jsx",
  lineNumber: 29,
  columnNumber: 5
}, this);
function ChatTopBar({ selectedUser }) {
  return /* @__PURE__ */ jsxDEV9("div", { className: "w-full h-20 flex p-4 justify-between items-center border-b", children: [
    /* @__PURE__ */ jsxDEV9("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxDEV9(Avatar, { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxDEV9(
        AvatarImage,
        {
          src: selectedUser.avatar,
          alt: selectedUser.name,
          width: 6,
          height: 6,
          className: "w-10 h-10 "
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat/chat-topbar.jsx",
          lineNumber: 57,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/chat/chat-topbar.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxDEV9("span", { className: "font-medium", children: selectedUser.name }, void 0, !1, {
          fileName: "app/components/chat/chat-topbar.jsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV9("span", { className: "text-xs", children: "Active 2 mins ago" }, void 0, !1, {
          fileName: "app/components/chat/chat-topbar.jsx",
          lineNumber: 67,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/chat/chat-topbar.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat/chat-topbar.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { children: TopbarIcons.map((icon, index) => /* @__PURE__ */ jsxDEV9(
      TooltipContentWrapper,
      {
        index,
        icon
      },
      icon.content,
      !1,
      {
        fileName: "app/components/chat/chat-topbar.jsx",
        lineNumber: 72,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/chat/chat-topbar.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat/chat-topbar.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/components/chat/chat-list.jsx
import { useRef as useRef2, useEffect, useCallback } from "react";
import { AnimatePresence as AnimatePresence2, motion as motion2 } from "framer-motion";

// app/components/chat/chat-bottombar.jsx
import {
  FileImage,
  Mic,
  Paperclip,
  PlusCircle,
  SendHorizontal,
  ThumbsUp
} from "lucide-react";
import { Link as Link3 } from "@remix-run/react";
import { useRef, useState } from "react";

// @/components/ui/textarea.tsx
import * as React6 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Textarea = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "@/components/ui/textarea.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Textarea.displayName = "Textarea";

// app/components/chat/chat-bottombar.jsx
import { AnimatePresence, motion } from "framer-motion";

// @/components/ui/popover.tsx
import * as React7 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React7.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV11(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV11(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "@/components/ui/popover.tsx",
    lineNumber: 17,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "@/components/ui/popover.tsx",
  lineNumber: 16,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/data/index.js
var userData = [
  {
    id: 1,
    avatar: "https://picsum.photos/id/64/200/300",
    messages: [
      {
        id: 1,
        avatar: "https://picsum.photos/id/64/200/300",
        name: "Jane Doe",
        message: "Hey, Jakob"
      },
      {
        id: 2,
        avatar: "https://picsum.photos/id/11/200/300",
        name: "Jakob Hoeg",
        message: "Hey!"
      }
    ],
    name: "\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0"
  },
  {
    id: 2,
    avatar: "https://picsum.photos/id/61/200/300",
    name: "\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0-1"
  },
  {
    id: 3,
    avatar: "https://picsum.photos/id/60/200/300",
    name: "\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0-2"
  },
  {
    id: 4,
    avatar: "https://picsum.photos/id/59/200/300",
    name: "\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0-3"
  }
], loggedInUserData = {
  id: 5,
  avatar: "https://picsum.photos/id/11/200/300",
  name: "Jakob Hoeg"
};

// app/components/emoji-picker.jsx
import { SmileIcon } from "lucide-react";
import Picker from "@emoji-mart/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function EmojiPicker({ onChange }) {
  return /* @__PURE__ */ jsxDEV12(Popover, { children: [
    /* @__PURE__ */ jsxDEV12(PopoverTrigger, { children: /* @__PURE__ */ jsxDEV12(SmileIcon, { className: "h-5 w-5 text-muted-foreground hover:text-foreground transition" }, void 0, !1, {
      fileName: "app/components/emoji-picker.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/emoji-picker.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12(PopoverContent, { className: "w-full", children: /* @__PURE__ */ jsxDEV12(
      Picker,
      {
        emojiSize: 18,
        theme: "light",
        maxFrequentRows: 1,
        onEmojiSelect: (emoji) => onChange(emoji.native)
      },
      void 0,
      !1,
      {
        fileName: "app/components/emoji-picker.jsx",
        lineNumber: 18,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/emoji-picker.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/emoji-picker.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/chat/chat-bottombar.jsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var BottombarIcons = [{ icon: FileImage }, { icon: Paperclip }];
function ChatBottombar({ sendMessage, isMobile }) {
  let [message, setMessage] = useState(""), [isComposing, setIsComposing] = useState(!1), inputRef = useRef(null), handleInputChange = (event) => {
    setMessage(event.target.value);
  }, handleComposition = (event) => {
    event.type === "compositionstart" ? setIsComposing(!0) : event.type === "compositionend" && setIsComposing(!1);
  }, handleThumbsUp = () => {
    let newMessage = {
      id: message.length + 1,
      name: loggedInUserData.name,
      avatar: loggedInUserData.avatar,
      message: "\u{1F44D}"
    };
    sendMessage(newMessage), setMessage("");
  }, handleSend = () => {
    if (message.trim()) {
      let newMessage = {
        id: message.length + 1,
        name: loggedInUserData.name,
        avatar: loggedInUserData.avatar,
        message: message.trim()
      };
      sendMessage(newMessage), setMessage(""), inputRef.current && inputRef.current.focus();
    }
  }, handleKeyPress = (event) => {
    event.key === "Enter" && !isComposing && (event.shiftKey ? (event.preventDefault(), setMessage((prev) => prev + `
`)) : (event.preventDefault(), handleSend()));
  };
  return /* @__PURE__ */ jsxDEV13("div", { className: "p-2 flex justify-between w-full items-center gap-2", children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "flex", children: [
      /* @__PURE__ */ jsxDEV13(Popover, { children: [
        /* @__PURE__ */ jsxDEV13(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV13(
          Link3,
          {
            href: "#",
            className: cn(
              buttonVariants2({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
            ),
            children: /* @__PURE__ */ jsxDEV13(PlusCircle, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
              fileName: "app/components/chat/chat-bottombar.jsx",
              lineNumber: 98,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/chat/chat-bottombar.jsx",
            lineNumber: 90,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(PopoverContent, { side: "top", className: "w-full p-2", children: message.trim() || isMobile ? /* @__PURE__ */ jsxDEV13("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxDEV13(
            Link3,
            {
              href: "#",
              className: cn(
                buttonVariants2({ variant: "ghost", size: "icon" }),
                "h-9 w-9",
                "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              ),
              children: /* @__PURE__ */ jsxDEV13(Mic, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
                fileName: "app/components/chat/chat-bottombar.jsx",
                lineNumber: 112,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/chat/chat-bottombar.jsx",
              lineNumber: 104,
              columnNumber: 17
            },
            this
          ),
          BottombarIcons.map((icon, index) => /* @__PURE__ */ jsxDEV13(
            Link3,
            {
              href: "#",
              className: cn(
                buttonVariants2({ variant: "ghost", size: "icon" }),
                "h-9 w-9",
                "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
              ),
              children: /* @__PURE__ */ jsxDEV13(icon.icon, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
                fileName: "app/components/chat/chat-bottombar.jsx",
                lineNumber: 124,
                columnNumber: 21
              }, this)
            },
            index,
            !1,
            {
              fileName: "app/components/chat/chat-bottombar.jsx",
              lineNumber: 115,
              columnNumber: 19
            },
            this
          ))
        ] }, void 0, !0, {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 103,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV13(
          Link3,
          {
            href: "#",
            className: cn(
              buttonVariants2({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
            ),
            children: /* @__PURE__ */ jsxDEV13(Mic, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
              fileName: "app/components/chat/chat-bottombar.jsx",
              lineNumber: 137,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/chat/chat-bottombar.jsx",
            lineNumber: 129,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/chat/chat-bottombar.jsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      !message.trim() && !isMobile && /* @__PURE__ */ jsxDEV13("div", { className: "flex", children: BottombarIcons.map((icon, index) => /* @__PURE__ */ jsxDEV13(
        Link3,
        {
          href: "#",
          className: cn(
            buttonVariants2({ variant: "ghost", size: "icon" }),
            "h-9 w-9",
            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
          ),
          children: /* @__PURE__ */ jsxDEV13(icon.icon, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
            fileName: "app/components/chat/chat-bottombar.jsx",
            lineNumber: 154,
            columnNumber: 17
          }, this)
        },
        index,
        !1,
        {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 145,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/chat/chat-bottombar.jsx",
        lineNumber: 143,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/chat/chat-bottombar.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(AnimatePresence, { initial: !1, children: [
      /* @__PURE__ */ jsxDEV13(
        motion.div,
        {
          className: "w-full relative",
          layout: !0,
          initial: { opacity: 0, scale: 1 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1 },
          transition: {
            opacity: { duration: 0.05 },
            layout: {
              type: "spring",
              bounce: 0.15
            }
          },
          children: [
            /* @__PURE__ */ jsxDEV13(
              Textarea,
              {
                autoComplete: "off",
                value: message,
                ref: inputRef,
                onKeyDown: handleKeyPress,
                onChange: handleInputChange,
                onCompositionStart: handleComposition,
                onCompositionEnd: handleComposition,
                name: "message",
                placeholder: "Aa",
                className: " w-full border rounded-full flex items-center h-9 resize-none overflow-hidden bg-background"
              },
              void 0,
              !1,
              {
                fileName: "app/components/chat/chat-bottombar.jsx",
                lineNumber: 177,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13("div", { className: "absolute right-2 bottom-0.5  ", children: /* @__PURE__ */ jsxDEV13(
              EmojiPicker,
              {
                onChange: (value) => {
                  setMessage(message + value), inputRef.current && inputRef.current.focus();
                }
              },
              void 0,
              !1,
              {
                fileName: "app/components/chat/chat-bottombar.jsx",
                lineNumber: 190,
                columnNumber: 13
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/chat/chat-bottombar.jsx",
              lineNumber: 189,
              columnNumber: 11
            }, this)
          ]
        },
        "input",
        !0,
        {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 162,
          columnNumber: 9
        },
        this
      ),
      message.trim() ? /* @__PURE__ */ jsxDEV13(
        Link3,
        {
          href: "#",
          className: cn(
            buttonVariants2({ variant: "ghost", size: "icon" }),
            "h-9 w-9",
            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
          ),
          onClick: handleSend,
          children: /* @__PURE__ */ jsxDEV13(SendHorizontal, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
            fileName: "app/components/chat/chat-bottombar.jsx",
            lineNumber: 211,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 202,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ jsxDEV13(
        Link3,
        {
          href: "#",
          className: cn(
            buttonVariants2({ variant: "ghost", size: "icon" }),
            "h-9 w-9",
            "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
          ),
          onClick: handleThumbsUp,
          children: /* @__PURE__ */ jsxDEV13(ThumbsUp, { size: 20, className: "text-muted-foreground" }, void 0, !1, {
            fileName: "app/components/chat/chat-bottombar.jsx",
            lineNumber: 223,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/chat/chat-bottombar.jsx",
          lineNumber: 214,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/chat/chat-bottombar.jsx",
      lineNumber: 161,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat/chat-bottombar.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

// app/components/chat/chat-list.jsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var MessageContent = ({ content }) => {
  let keywords = ["\u8DF3\u821E", "\u821E\u8E48", "\u8D77\u821E"], regex = new RegExp(`(${keywords.join("|")})`, "gi"), parts = content.split(regex);
  return /* @__PURE__ */ jsxDEV14("span", { className: "bg-accent p-3 rounded-md max-w-xs", children: parts.map(
    (part, index) => keywords.some(
      (keyword) => keyword.toLowerCase() === part.toLowerCase()
    ) ? /* @__PURE__ */ jsxDEV14("strong", { className: "text-gradient", children: part }, index, !1, {
      fileName: "app/components/chat/chat-list.jsx",
      lineNumber: 20,
      columnNumber: 11
    }, this) : part
  ) }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}, MessageLoading = ({ isLoadingMessage }) => isLoadingMessage ? /* @__PURE__ */ jsxDEV14("div", { className: "bg-accent p-4 rounded-md max-w-xs  whitespace-pre-wrap loading-wrap", children: /* @__PURE__ */ jsxDEV14("div", { className: "loading loadingAnimation", children: [
  /* @__PURE__ */ jsxDEV14("span", { children: "L" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 35,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "O" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 36,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "A" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 37,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "D" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 38,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "I" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "N" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV14("span", { children: "G" }, void 0, !1, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 41,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/chat/chat-list.jsx",
  lineNumber: 34,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/chat/chat-list.jsx",
  lineNumber: 33,
  columnNumber: 5
}, this) : null, MotionWrapper = ({
  children,
  index = 0,
  className = "",
  messages = [],
  message = ""
}) => /* @__PURE__ */ jsxDEV14(
  motion2.div,
  {
    layout: !0,
    initial: { opacity: 0, scale: 1, y: 50, x: 0 },
    animate: { opacity: 1, scale: 1, y: 0, x: 0 },
    exit: { opacity: 0, scale: 1, y: 1, x: 0 },
    transition: {
      opacity: { duration: 0.1 },
      layout: {
        type: "spring",
        bounce: 0.3,
        duration: messages.indexOf(message) * 0.05 + 0.2
      }
    },
    style: {
      originX: 0.5,
      originY: 0.5
    },
    className,
    children
  },
  index,
  !1,
  {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 55,
    columnNumber: 5
  },
  this
);
function ChatList({
  messages,
  selectedUser,
  sendMessage,
  isMobile,
  isLoadingMessage
}) {
  let messagesContainerRef = useRef2(null), isRobotMessage = useCallback((message) => message.name !== selectedUser.name, []);
  return useEffect(() => {
    messagesContainerRef.current && (messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight);
  }, [messages]), /* @__PURE__ */ jsxDEV14("div", { className: "w-full overflow-y-auto overflow-x-hidden h-full flex flex-col", children: [
    /* @__PURE__ */ jsxDEV14(
      "div",
      {
        ref: messagesContainerRef,
        className: "w-full overflow-y-auto overflow-x-hidden h-full flex flex-col",
        children: /* @__PURE__ */ jsxDEV14(AnimatePresence2, { children: [
          messages?.map((message, index) => /* @__PURE__ */ jsxDEV14(
            MotionWrapper,
            {
              messages,
              message,
              index,
              className: cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                isRobotMessage(message) ? "items-end" : "items-start"
              ),
              children: /* @__PURE__ */ jsxDEV14("div", { className: "flex gap-3 items-center", children: [
                message.name === selectedUser.name && /* @__PURE__ */ jsxDEV14(Avatar, { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxDEV14(
                  AvatarImage,
                  {
                    src: message.avatar,
                    alt: message.name,
                    width: 6,
                    height: 6
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/chat/chat-list.jsx",
                    lineNumber: 121,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/chat/chat-list.jsx",
                  lineNumber: 120,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV14(MessageContent, { content: message.message }, void 0, !1, {
                  fileName: "app/components/chat/chat-list.jsx",
                  lineNumber: 129,
                  columnNumber: 17
                }, this),
                message.name !== selectedUser.name && /* @__PURE__ */ jsxDEV14(Avatar, { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxDEV14(
                  AvatarImage,
                  {
                    src: message.avatar,
                    alt: message.name,
                    width: 6,
                    height: 6
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/chat/chat-list.jsx",
                    lineNumber: 133,
                    columnNumber: 21
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/chat/chat-list.jsx",
                  lineNumber: 132,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/chat/chat-list.jsx",
                lineNumber: 118,
                columnNumber: 15
              }, this)
            },
            index,
            !1,
            {
              fileName: "app/components/chat/chat-list.jsx",
              lineNumber: 108,
              columnNumber: 13
            },
            this
          )),
          /* @__PURE__ */ jsxDEV14(MotionWrapper, { children: /* @__PURE__ */ jsxDEV14(
            MessageLoading,
            {
              isLoadingMessage
            },
            void 0,
            !1,
            {
              fileName: "app/components/chat/chat-list.jsx",
              lineNumber: 145,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/chat/chat-list.jsx",
            lineNumber: 144,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/chat/chat-list.jsx",
          lineNumber: 106,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/chat/chat-list.jsx",
        lineNumber: 102,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV14(ChatBottombar, { sendMessage, isMobile }, void 0, !1, {
      fileName: "app/components/chat/chat-list.jsx",
      lineNumber: 151,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/chat/chat-list.jsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/components/chat/chat.jsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var socketURL = process.env;
function Chat({ selectedUser, isMobile }) {
  let [userName, setUserName] = useState2("\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0"), [assistantName, setAssistantName] = useState2(""), [messages, setMessages] = useState2([]), [message, setMessage] = useState2(""), [isLoadingMessage, setIsLoadingMessage] = useState2(!1);
  return useEffect2(() => {
    let socket = io(socketURL);
    socket.on("connect", () => {
      console.warn("Connected to the server");
    }), socket.on("$name", (name) => {
      setUserName("\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0");
    }), socket.on("$assistantName", (name) => {
      setAssistantName(name);
    }), socket.on("message", (data) => {
      setIsLoadingMessage(!1), data.includes("\u7BA1\u5BB6") && setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: 1,
          avatar: "https://picsum.photos/id/20/200/300",
          name: assistantName,
          message: data
        }
      ]);
    }), socket.on("error", (data) => {
      console.error("Socket.IO error: ", data);
    });
  }, []), /* @__PURE__ */ jsxDEV15("div", { className: "flex flex-col justify-between w-full h-full", children: [
    /* @__PURE__ */ jsxDEV15(ChatTopBar, { selectedUser }, void 0, !1, {
      fileName: "app/components/chat/chat.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15(
      ChatList,
      {
        messages,
        selectedUser,
        sendMessage: (newMessage) => {
          io(socketURL).emit("message", `${userName}: ${newMessage.message}`), setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: 1,
              avatar: "https://picsum.photos/id/64/200/300",
              name: "\u4E0D\u7761\u89BA\u7684\u5927\u5C0F\u59D0",
              message: newMessage.message
            }
          ]), setIsLoadingMessage(!0);
        },
        isMobile,
        isLoadingMessage
      },
      void 0,
      !1,
      {
        fileName: "app/components/chat/chat.jsx",
        lineNumber: 68,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/chat/chat.jsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}

// app/components/chat/chat-layout.jsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function ChatLayout({
  defaultLayout = [320, 480],
  defaultCollapsed = !1,
  navCollapsedSize
}) {
  let [isCollapsed, setIsCollapsed] = useState3(defaultCollapsed), [selectedUser, setSelectedUser] = useState3(userData[0]), [isMobile, setIsMobile] = useState3(!1);
  return useEffect3(() => {
    let checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    return checkScreenWidth(), window.addEventListener("resize", checkScreenWidth), () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []), /* @__PURE__ */ jsxDEV16(
    ResizablePanelGroup,
    {
      direction: "horizontal",
      onLayout: (sizes) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      },
      className: "h-full items-stretch",
      children: [
        /* @__PURE__ */ jsxDEV16(
          ResizablePanel,
          {
            defaultSize: defaultLayout[0],
            collapsedSize: navCollapsedSize,
            collapsible: !0,
            minSize: isMobile ? 0 : 24,
            maxSize: isMobile ? 8 : 30,
            onCollapse: () => {
              setIsCollapsed(!0), document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                !0
              )}`;
            },
            onExpand: () => {
              setIsCollapsed(!1), document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                !1
              )}`;
            },
            className: cn(
              isCollapsed && "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
            ),
            children: /* @__PURE__ */ jsxDEV16(
              Sidebar,
              {
                isCollapsed: isCollapsed || isMobile,
                links: userData.map((user) => ({
                  name: user.name,
                  messages: user.messages ?? [],
                  avatar: user.avatar,
                  variant: selectedUser.name === user.name ? "grey" : "ghost"
                })),
                isMobile
              },
              void 0,
              !1,
              {
                fileName: "app/components/chat/chat-layout.jsx",
                lineNumber: 75,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/chat/chat-layout.jsx",
            lineNumber: 52,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV16(ResizableHandle, { withHandle: !0 }, void 0, !1, {
          fileName: "app/components/chat/chat-layout.jsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV16(ResizablePanel, { defaultSize: defaultLayout[1], minSize: 30, children: /* @__PURE__ */ jsxDEV16(
          Chat,
          {
            messages: selectedUser.messages,
            selectedUser,
            isMobile
          },
          void 0,
          !1,
          {
            fileName: "app/components/chat/chat-layout.jsx",
            lineNumber: 88,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/chat/chat-layout.jsx",
          lineNumber: 87,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/chat/chat-layout.jsx",
      lineNumber: 43,
      columnNumber: 5
    },
    this
  );
}

// app/components/chat/chat-music.jsx
import { useEffect as useEffect4, useRef as useRef4, useState as useState4 } from "react";

// app/assets/music.mp3
var music_default = "/build/_assets/music-DTOIUQ4G.mp3";

// app/components/chat/chat-music.jsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function ChatMusic() {
  let audioRef = useRef4(null), timeoutRef = useRef4(null), playTime = useState4(0);
  return useEffect4(() => {
    let handleKeyDown = () => {
      audioRef.current && (audioRef.current.play(), timeoutRef.current && clearTimeout(timeoutRef.current), timeoutRef.current = setTimeout(() => {
        audioRef.current.pause();
      }, 5e3));
    };
    return window.addEventListener("keydown", handleKeyDown), () => {
      window.removeEventListener("keydown", handleKeyDown), timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []), /* @__PURE__ */ jsxDEV17("figure", { children: /* @__PURE__ */ jsxDEV17("audio", { ref: audioRef, src: music_default, preload: "auto", loop: !0, controls: !0 }, void 0, !1, {
    fileName: "app/components/chat/chat-music.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/chat/chat-music.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/_index.jsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function cn2(...inputs) {
  return twMerge2(clsx2(inputs));
}
var extractLayout = (inputString) => {
  let regex = /react-resizable-panels:layout=\[([0-9,]+)\];/, match = inputString.match(regex);
  return match ? match[1].split(",").map(Number) : null;
};
async function loader2({ request }) {
  let cookieHeader = request.headers.get("cookie"), cookie = await userPrefs.parse(cookieHeader) || {};
  return json2({ cookies: cookieHeader, cookie });
}
function Index() {
  let { cookies, cookie } = useLoaderData2(), layout = cookies ? extractLayout(cookies) : null, defaultLayout = layout || void 0;
  return /* @__PURE__ */ jsxDEV18("main", { className: "flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4 ", children: [
    /* @__PURE__ */ jsxDEV18("div", { className: "slider-thumb" }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "flex justify-between max-w-5xl w-full items-center", children: [
      /* @__PURE__ */ jsxDEV18(
        Link4,
        {
          to: "https://www.youtube.com/watch?v=FoO7Pmx0bE4",
          className: "font-bold text-gradient",
          children: "Good Night Ojosama"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 44,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV18(
        Link4,
        {
          to: "",
          className: cn2(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-10 w-10"
          ),
          children: /* @__PURE__ */ jsxDEV18(GitHubLogoIcon, { className: "w-7 h-7 text-muted-foreground" }, void 0, !1, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 57,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.jsx",
          lineNumber: 50,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("div", { className: "z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex chat-wrapper", children: /* @__PURE__ */ jsxDEV18(ChatLayout, { defaultLayout, navCollapsedSize: 8 }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(ChatMusic, {}, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ATFYKXMJ.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-V2EUWG4X.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-GMFRLIKR.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TBZ5JI3Y.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-R5GYOMP5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "faa41a15", hmr: { runtime: "/build/_shared/chunk-GMFRLIKR.js", timestamp: 1717994814720 }, url: "/build/manifest-FAA41A15.js" };

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
