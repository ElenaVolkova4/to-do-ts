import { useState } from "react";
import "./Form.scss";

const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = () => {
    if (text) {
      props.createNewToDo(text);
      setText("");
    }
  };

  // const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setText(event.target.value);
  // };

  return (
    <div className="form-wrapper">
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            type="text"
            onChange={(event) => setText(event.target.value)}
            value={text}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};

export default Form;
