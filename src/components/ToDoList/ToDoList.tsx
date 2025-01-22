import ToDoListItem from "./ToDoListItem/ToDoListItem";
import { IToDo } from "../../models/todo-item";
import {
  ToDoContainer,
  ToDoListCompleted,
  ToDoListFailed,
} from "./ToDoList.styled";

const ToDoList = (props: {
  todos: IToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={item.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <ToDoContainer>
      <ToDoListFailed>{checkedList()}</ToDoListFailed>
      <ToDoListCompleted>{unCheckedList()}</ToDoListCompleted>
    </ToDoContainer>
  );
};

export default ToDoList;
