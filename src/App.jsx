import AppName from "./componenet/AppName";
import AddTodo from "./componenet/AddTodo";
import TodoItem1 from "./componenet/TodoItem1";
import TodoItem2 from "./componenet/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
      <TodoItem1 />
      <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
