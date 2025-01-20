import React from "react";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearAction, saveAction } from "../../features/textTodo";

const Form = (props: { createNewToDo: Function }) => {
  const textTodoSlice = useSelector((state: RootState) => state.textTodo.text);
  // методы по управлению инпутом из стора
  const dispatch = useDispatch();

  const formSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (textTodoSlice) {
      props.createNewToDo(textTodoSlice);
      dispatch(clearAction());
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
            onChange={(event) => {
              dispatch(saveAction(event.target.value));
            }}
            value={textTodoSlice}
          />
          <button></button>
        </label>
      </form>
    </div>
  );
};

export default Form;
