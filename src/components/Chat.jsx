import React, {useState} from 'react'
import Profile from './Profile.jsx'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
  
    const handleMessageSend = () => {
      if (messageInput.trim() === '') return;
      setMessages([...messages, { text: messageInput, sender: 'sender' }]);
      setMessageInput('');
    };

  return (
    <div>
        <div className='hidden md:flex dk-profile border-r'>
          <Profile/>
        </div>

        <div className='chat-page overflow-hidden'>
            <div className='chat-header'>
                <div className='signup-go-back-btn'>
                    <Link to='/inbox'>
                        <IoIosArrowBack size={25}/>
                    </Link>
                </div>

                <div className='chat-header-title'>
                    <img src='' className='border'/>
                    <p>Collins wale</p>
                </div>
            </div>
            <div className='chat-header-border border-b' />

            <div className='chat'>
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

                <div className="receiver">
                    {messages.map((message, index) => {
                    if (message.sender === 'receiver') {
                        return (
                        <div key={index} className="message receiver-message">
                            {message.text}
                        </div>
                        );
                    }
                    return null;
                    })}
                </div>

                <div className="chat-input-box">
                    <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Type your message..."
                    className='border'
                    />
                    <button onClick={handleMessageSend}>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat