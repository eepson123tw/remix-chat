import React, { useRef, useEffect, useCallback, Children } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Avatar, AvatarImage } from "../ui/avatar";
import ChatBottombar from "./chat-bottombar";
import { cn } from "@/lib/utils";

const MessageContent = ({ content }) => {
  const keywords = ["跳舞", "舞蹈", "起舞"];
  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = content.split(regex);

  return (
    <span className="bg-accent p-3 rounded-md max-w-xs">
      {parts.map((part, index) =>
        keywords.some(
          (keyword) => keyword.toLowerCase() === part.toLowerCase()
        ) ? (
          <strong className="text-gradient" key={index}>
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

const MessageLoading = ({ isLoadingMessage }) => {
  return isLoadingMessage ? (
    <div className="bg-accent p-4 rounded-md max-w-xs  whitespace-pre-wrap loading-wrap">
      <div class="loading loadingAnimation">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  ) : null;
};

const MotionWrapper = ({
  children,
  index = 0,
  className = "",
  messages = [],
  message = "",
}) => {
  return (
    <motion.div
      key={index}
      layout
      initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
      transition={{
        opacity: { duration: 0.1 },
        layout: {
          type: "spring",
          bounce: 0.3,
          duration: messages.indexOf(message) * 0.05 + 0.2,
        },
      }}
      style={{
        originX: 0.5,
        originY: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ChatList({
  messages,
  selectedUser,
  sendMessage,
  isMobile,
  isLoadingMessage,
}) {
  const messagesContainerRef = useRef(null);
  const isRobotMessage = useCallback((message) => {
    const isRobotMessage = message.name !== selectedUser.name;
    return isRobotMessage;
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        <AnimatePresence>
          {messages?.map((message, index) => (
            <MotionWrapper
              messages={messages}
              message={message}
              index={index}
              className={cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                isRobotMessage(message) ? "items-end" : "items-start"
              )}
            >
              <div className="flex gap-3 items-center">
                {message.name === selectedUser.name && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      src={message.avatar}
                      alt={message.name}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
                <MessageContent content={message.message} />
                {/* robot response */}
                {message.name !== selectedUser.name && (
                  <Avatar className="flex justify-center items-center">
                    <AvatarImage
                      src={message.avatar}
                      alt={message.name}
                      width={6}
                      height={6}
                    />
                  </Avatar>
                )}
              </div>
            </MotionWrapper>
          ))}
          <MotionWrapper>
            <MessageLoading
              isLoadingMessage={isLoadingMessage}
            ></MessageLoading>
          </MotionWrapper>
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  );
}
