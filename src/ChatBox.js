import React, { useState } from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;

const ChatBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSend = () => {
    if (inputValue.trim() !== "") {
      const newMessage = inputValue;

      // Retrieve stored messages from localStorage
      let storedMessages = JSON.parse(localStorage.getItem("messages")) || {
        message: "",
      };

      // Add the new message to the stored messages
      storedMessages.message += " " + newMessage;

      // Store the updated messages in localStorage
      localStorage.setItem("messages", JSON.stringify(storedMessages));
      console.log(JSON.stringify(storedMessages));
      // Clear the input value
      setInputValue("");
    }
  };

  const handleClear = () => {
    // Clear the messages in localStorage
    localStorage.removeItem("messages");

    // Clear the input value
    setInputValue("");
  };

  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <TextArea
        rows={2}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <Button type="primary" onClick={handleSend}>
        Send
      </Button>
      <Button onClick={handleClear}>Clear</Button>
    </div>
  );
};

export default ChatBox;
