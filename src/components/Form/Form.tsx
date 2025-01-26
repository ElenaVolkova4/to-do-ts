import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearAction, saveAction } from "../../features/textTodo";
import {
  FormBlock,
  FormButton,
  FormInput,
  FormLabel,
  Wrapper,
} from "./Form.styled";
import plusIcon from "./../../assets/images/plus.png";

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
    <Wrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormInput
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(saveAction(event.target.value));
            }}
            value={textTodoSlice}
          />
          <FormButton icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </Wrapper>
  );
};

export default Form;
