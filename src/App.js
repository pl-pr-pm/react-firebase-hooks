
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { TodosContextProvider } from "./contexts/Todoscontext"

function App() {

  return (
    <div className="App">
      <Container>
        <TodosContextProvider>
          <h1 className="mt-4">
            Todoリスト
          </h1>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
