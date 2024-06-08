import { useEffect, useState } from "react";
import io from "socket.io-client";
const socketURL = process.env;
export default function Index() {
  const [userName, setUserName] = useState("");
  const [assistantName, setAssistantName] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io(socketURL);

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("$name", (name) => {
      setUserName(name);
    });

    socket.on("$assistantName", (name) => {
      setAssistantName(name);
    });

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("error", (data) => {
      console.error("Socket.IO error: ", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const socket = io(socketURL);
    socket.emit("message", `${userName}: ${message}`);
    setMessage("");
  };

  return (
    <div>
      <h1>聊天室</h1>
      <div id="username">
        Username: <span>{userName}</span>
      </div>
      <div id="assistantName">
        Assistant Name: <span>{assistantName}</span>
      </div>
      <div id="chatbox">
        {messages.map((msg, index) => {
          const isUserMessage = msg.startsWith(`${userName}:`);
          return (
            <div
              key={index}
              className={`message ${isUserMessage ? "user" : "assistant"}`}
            >
              <div className="message-content">{msg}</div>
            </div>
          );
        })}
      </div>
      <div id="inputContainer">
        <input
          type="text"
          id="messageInput"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button id="sendButton" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}
