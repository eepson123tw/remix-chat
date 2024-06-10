"use client";

import React, { useEffect, useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

import { Sidebar } from "../sidebar";
import Chat from "./chat";

const socketURL = process.env;

const fetchActiveChatRooms = async () => {
  const response = await fetch(socketURL + "/messages/getActiveChatRooms");
  const data = await response.json();
  return data;
};

export default function ChatLayout({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeChatRooms, setActiveChatRooms] = useState([]);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Fetch active chat rooms
    fetchActiveChatRooms().then((rooms) => {
      setActiveChatRooms(rooms);
      if (rooms.length > 0) {
        setSelectedUser(rooms[0]); // 默认选择第一个聊天室
      }
    });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`;
        }}
        className={cn(
          isCollapsed &&
            "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          links={activeChatRooms.map((room) => ({
            id: room.userId,
            name: room.name,
            avatar: room.avatar,
            variant:
              selectedUser && selectedUser.userId === room.userId
                ? "grey"
                : "ghost",
          }))}
          isMobile={isMobile}
          onSelect={(room) => setSelectedUser(room)}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        {selectedUser && (
          <Chat
            key={selectedUser.userId}
            selectedUser={selectedUser}
            isMobile={isMobile}
          />
        )}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
