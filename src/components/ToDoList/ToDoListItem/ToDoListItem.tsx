import "./ToDoListItem.scss";

const ToDoListItem = () => {
  return (
    <li className="todo-list-item__wrapper">
      <span>Первая задача</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash"></button>
        <button className="btn-check"></button>
      </div>
    </li>
  );
};

export default ToDoListItem;
