
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from "reactstrap";
import { useState, useCallback } from "react";
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((text) => {
    const newTodos = [...todos, {text, complete: false}];
    setTodos(newTodos);
  }, [todos])


  const removeTodo = useCallback((index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos);
  },[todos]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">
          Todoリスト
        </h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}/>
      </Container>
    </div>
  );
}

export default App;
