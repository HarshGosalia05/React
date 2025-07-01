import AppName from "./Components/AppName";
import AppTodo from "./Components/appTodo";
import TodoItems from "./Components/TodoItems";
import TodoItems2 from "./Components/TodoItems2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <div className="todo-items">
          <TodoItems />
          <TodoItems2 />
      </div>
    </center>
  );
}

export default App;
