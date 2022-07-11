import { useState, useContext } from "react";
import ChatContext from "../context/ChatContext";
import "./Input.css"

function Input() {
    const {publishMessage} = useContext(ChatContext)
    const [text, setText] = useState("");
  
   const onChange = e => {
      setText(e.target.value);
    }
  
   const onSubmit = e => {
      e.preventDefault();
      setText("");
      publishMessage(text);
    }
  
      return (
        <div className="Input">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={text}
              type="text"
              placeholder="Write here and press ENTER"
              autofocus="true"
            />
            <button>Send</button>
          </form>
        </div>
      );
    }
  

export default Input;