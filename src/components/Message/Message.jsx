import ".//Message.css"

function Message({message, user}) {
    const myMessage = user.id === message.clientId;
    const className = myMessage ?
    "Messages-message currentMember" : "Messages-message";

    return (
   <li className={className}>
       <span
        className="avatar"
        style={{backgroundColor: message.member.clientData.color}}>          
        </span>   
      <div className="Message-content">
          <div className="username">
            {message.member.clientData.username}
          </div>
          <div className="text" >
            {message.data}
          </div>
       </div>
                 
    </li>
  );
}

export default Message;             
