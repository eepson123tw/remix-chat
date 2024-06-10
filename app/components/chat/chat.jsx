import io from "socket.io-client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { v4 } from "uuid";
import assistant from "../../assets/img/assitant.png";
import ChatTopbar from "./chat-topbar";
import ChatList from "./chat-list";

const socketURL = process.env;

export default function Chat({ selectedUser, isMobile }) {
  const [userName, setUserName] = useState("不睡覺的大小姐");
  const [assistantName, setAssistantName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoadingMessage, setIsLoadingMessage] = useState(false);

  // 使用 useRef 儲存 socket 連接，確保在組件生命周期內只使用一個連接
  const socketRef = useRef(null);

  const userId = useMemo(() => {
    if (typeof window !== "undefined") {
      let storedUserId = sessionStorage.getItem("userId");
      if (!storedUserId) {
        storedUserId = v4(); // 生成新的 UUID
        sessionStorage.setItem("userId", storedUserId);
      }
      return storedUserId;
    }
    return ""; // 如果在非瀏覽器環境中，返回空字符串
  }, []);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(socketURL, {
        query: { userId: selectedUser.userId },
      });

      socketRef.current.on("connect", () => {
        console.warn("Connected to the server");
      });

      socketRef.current.on("$name", (name) => {
        setUserName("不睡覺的大小姐");
      });

      socketRef.current.on("$assistantName", (name) => {
        setAssistantName(name);
      });

      socketRef.current.on("message", (data) => {
        console.log({ data });
        data.includes("管家") && setIsLoadingMessage(false);
        data.includes("管家") &&
          !isLoadingMessage &&
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: 1,
              avatar: assistant,
              name: assistantName,
              message: data,
            },
          ]);
      });

      socketRef.current.on("error", (data) => {
        console.error("Socket.IO error: ", data);
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [selectedUser]);

  const sendMessage = (newMessage) => {
    if (socketRef.current) {
      socketRef.current.emit("message", `${userName}: ${newMessage.message}`);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: selectedUser.userId,
          avatar: selectedUser.avatar,
          name: selectedUser.name,
          message: newMessage.message,
        },
      ]);
      setIsLoadingMessage(true);
    }
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
