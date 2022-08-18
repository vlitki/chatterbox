import React, { useEffect, useState } from "react";
import "./App.css";
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { randomName, randomColor } from "./user/random";

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    if (drone || user.id) {
      return;
    }
    const log = new window.Scaledrone("gZnLjZdMnZ1mturE", {
      data: user,
    }); 
     setDrone(log);
  }, [user, drone]);

  useEffect(() => {
    if (!drone) {
      return;
    }
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

    const member = { ...user };
    member.id = drone.clientId;
    setUser(member);
    });

    const room = drone.subscribe("observable-room");
       room.on("message", (message) => {
        setMessages((messages) => [...messages, message]);
        });
  }, [drone, user]);

  function publishMessage(message) {
    drone.publish({
      room: "observable-room",
      message,
    });
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Music Chatterbox</h1>
      </div>
      <Messages messages={messages} user={user} />
      <Input onMessagePublish={publishMessage} />
    </div>
  );
}

export default App;