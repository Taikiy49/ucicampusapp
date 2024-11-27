import React, { useState } from 'react';
import './Another.css';

const Another = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: Date.now(), text: newMessage }]);
            setNewMessage("");
        }
    };

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    return (
        <div className='another-container'>
            <div className='another-chatbot-container'>
                <div className="another-chatbox-messages">
                    {messages.map((message) => (
                        <div key={message.id} className="another-chat-message">
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="another-chatbox-input">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        value={newMessage} 
                        onChange={handleInputChange} 
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Another;
