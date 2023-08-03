import React, { useState } from 'react';

const ChatDemo = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const handleMessageSend = () => {
    if (messageInput.trim() === '') return;
    setMessages([...messages, { text: messageInput, sender: 'sender' }]);
    setMessageInput('');
  };

  return (
    <div className="chat-page">
      <div className="receiver">
        {messages.map((message, index) => {
          if (message.sender === 'receiver') {
            return (
              <div key={index} className=" receiver-message">
                {message.text}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="sender">
        {messages.map((message, index) => {
          if (message.sender === 'sender') {
            return (
              <div key={index} className="message sender-message">
                {message.text}
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatDemo;
