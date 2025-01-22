import { IToDo } from "../../../models/todo-item";
import {
  ToDoItem,
  ToDoItemButton,
  ToDoItemButtons,
  ToDoItemText,
} from "./ToDoListItem.styled";

import checkIcon from "./../../../assets/images/check.png";
import uncheckIcon from "./../../../assets/images/uncheck.png";
import trashIcon from "./../../../assets/images/trash.png";

const ToDoListItem = (props: {
  toDoItem: IToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <ToDoItem>
      <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
      <ToDoItemButtons>
        <ToDoItemButton
          icon={trashIcon}
          className="btn-trash"
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoItemButton>
        <ToDoItemButton
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoItemButton>
      </ToDoItemButtons>
    </ToDoItem>
  );
};

export default ToDoListItem;
