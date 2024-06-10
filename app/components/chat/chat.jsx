import io from "socket.io-client";
import React, { useRef, useState, useEffect } from "react";

import ChatTopbar from "./chat-topbar";
import ChatList from "./chat-list";

const socketURL = process.env;

export default function Chat({ selectedUser, isMobile }) {
  const [userName, setUserName] = useState("不睡覺的大小姐");
  const [assistantName, setAssistantName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);

  useEffect(() => {
    const socket = io(socketURL);

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
      setIsLoadingMessage(false);
      data.includes("管家") &&
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
    const socket = io(socketURL);
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
