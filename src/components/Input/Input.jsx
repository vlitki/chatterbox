import { useState} from "react";
import ".//Input.css";

function Input(props) {
    const [text, setText] = useState("");
  
   const onChange = e => {
      setText(e.target.value);
    }
  
   const onSubmit = e => {
      e.preventDefault();
      setText("");
      props.onMessagePublish(text);
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