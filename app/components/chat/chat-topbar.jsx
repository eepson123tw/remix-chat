import React from "react";
import { Link } from "@remix-run/react";

import { Info, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { Avatar, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";

export const TopbarIcons = [
  { icon: Phone, content: "Phone" },
  { icon: Video, content: "Video" },
  { icon: Info, content: "Info" },
];

export const TooltipContentWrapper = ({
  children,
  index,
  variant = "grey",
  icon,
}) => {
  return (
    <TooltipProvider key={icon.content}>
      <Tooltip key={icon.content} delayDuration={0}>
        <TooltipTrigger asChild>
          <Link
            key={index}
            href="#"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "h-9 w-9",
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white shrink-0"
            )}
          >
            <icon.icon size={20} className="text-muted-foreground" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {icon.content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function ChatTopBar({ selectedUser }) {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser.avatar}
            alt={selectedUser.name}
            width={6}
            height={6}
            className="w-10 h-10 "
          />
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{selectedUser.name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>
      <div>
        {TopbarIcons.map((icon, index) => (
          <TooltipContentWrapper
            key={icon.content}
            index={index}
            icon={icon}
          ></TooltipContentWrapper>
        ))}
      </div>
    </div>
  );
}
