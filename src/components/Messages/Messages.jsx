import Message from "../Message/Message";
import React from "react";
import ".//Messages.css";

function Messages({messages, user}) {
  
    return (
      <ul className="Messages-list">
        {messages.map(message => (
         <Message key={message.id} message={message} user={user} /> 
        ))}
      </ul>
    );
  
}





export default Messages;