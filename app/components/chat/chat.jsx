import io from "socket.io-client";
import React, { useRef, useState, useEffect, useMemo } from "react";

import { v4 } from "uuid";

import ChatTopbar from "./chat-topbar";
import ChatList from "./chat-list";

const socketURL = process.env;

export default function Chat({ selectedUser, isMobile }) {
  const [userName, setUserName] = useState("不睡覺的大小姐");
  const [assistantName, setAssistantName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);

  // 获取或生成用户ID
  const userId = useMemo(() => {
    if (typeof window !== "undefined") {
      let storedUserId = sessionStorage.getItem("userId");
      if (!storedUserId) {
        storedUserId = v4(); // 生成新的 UUID
        sessionStorage.setItem("userId", storedUserId);
      }
      return storedUserId;
    }
    return ""; // 如果在非浏览器环境中，返回空字符串
  }, []);

  useEffect(() => {
    // if (!userId) {
    //   sessionStorage.setItem("userId", userId);
    // }

    const socket = io(socketURL, {
      query: { userId },
    });

    socket.on("connect", () => {
      console.warn("Connected to the server");
    });

    socket.on("$name", (name) => {
      setUserName("不睡覺的大小姐");
    });

    socket.on("$assistantName", (name) => {
      setAssistantName(name);
    });

    socket.on("message", (data) => {
      data.includes("管家") && setIsLoadingMessage(false);
      data.includes("管家") &&
        !isLoadingMessage &&
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            id: 1,
            avatar: "https://picsum.photos/id/20/200/300",
            name: assistantName,
            message: data,
          },
        ]);
    });

    socket.on("error", (data) => {
      console.error("Socket.IO error: ", data);
    });
  }, []);

  const sendMessage = (newMessage) => {
    const socket = io(socketURL, {
      query: { userId },
    });
    socket.emit("message", `${userName}: ${newMessage.message}`);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: 1,
        avatar: "https://picsum.photos/id/64/200/300",
        name: "不睡覺的大小姐",
        message: newMessage.message,
      },
    ]);
    setIsLoadingMessage(true);
  };
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar selectedUser={selectedUser} />
      <ChatList
        messages={messages}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
        isLoadingMessage={isLoadingMessage}
      />
    </div>
  );
}
