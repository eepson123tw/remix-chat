import { useEffect, useState } from "react";
import { useLoaderData, Link, json } from "@remix-run/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

import { userPrefs } from "~/cookies.server";
import ChatLayout from "../components/chat/chat-layout";
import ChatMusic from "../components/chat/chat-music";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const extractLayout = (inputString) => {
  const regex = /react-resizable-panels:layout=\[([0-9,]+)\];/;
  const match = inputString.match(regex);
  if (match) {
    return match[1].split(",").map(Number);
  }
  return null;
};

export async function loader({ request }) {
  const cookieHeader = request.headers.get("cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};
  return json({ cookies: cookieHeader, cookie });
}

export default function Index() {
  const { cookies, cookie } = useLoaderData();

  const layout = cookies ? extractLayout(cookies) : null;
  const defaultLayout = layout ? layout : undefined;

  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4 ">
      <div className="slider-thumb"></div>
      <div className="flex justify-between max-w-5xl w-full items-center">
        <Link
          to="https://www.youtube.com/watch?v=FoO7Pmx0bE4"
          className="font-bold text-gradient"
        >
          Good Night Ojosama
        </Link>
        <Link
          to=""
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "h-10 w-10"
          )}
        >
          <GitHubLogoIcon className="w-7 h-7 text-muted-foreground" />
        </Link>
      </div>
      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex chat-wrapper">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>
      <ChatMusic />
    </main>
  );
}
