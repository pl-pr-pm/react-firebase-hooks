
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, Form, Input, Button, Table } from "reactstrap";
import { useState, useCallback } from "react";

function App() {

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = useCallback((e) => {
    // 送信時にページ遷移しないようにする
    e.preventDefault();
    addTodo(value);
  },[value]);

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
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text" value={value} onChange={e => setValue(e.target.value)} />
            <Button type="submit" outline color="primary">追加</Button>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos && todos.map((todo, index) => (
              <tr keys={index}>
                <th className="text-left" style={{textDecoration: todo.complete ? "line-through": ""}}>
                  {todo.text}
                </th>
                <td className="text-right">
                  <Button
                  color={todo.complete ? "secondary" : "success"}
                  className="mr-2"
                  onClick={() => completeTodo(index)}>
                  {todo.complete ? "完了" : "未完了"}
                  </Button>
                  <Button color="danger" onClick={() => removeTodo(index)}>削除</Button>
                  {/*
                  onClickには関数を渡す必要がある
                  引数を付ける場合、removeTodo(hoge) これは、関数を渡しているのではなく、関数を実行している
                  なので、引数つきの場合は、アロー関数を渡す。 () => removeTodo(hoge) #別にアロー関数でなくても、別で関数を定義すれば良いだけの話。

                   */}

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
