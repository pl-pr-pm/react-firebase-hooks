
import { InputGroup, Form, Input, Button} from "reactstrap";
import { useState, useContext, useCallback} from "react";
import { TodosContext } from "../contexts/Todoscontext";



export const TodoForm = () => {
  
  const { addTodo } = useContext(TodosContext);

  const [value, setValue] = useState("");

  const handleSubmit = useCallback((e) => {
    // 送信時にページ遷移しないようにする
    e.preventDefault();
    addTodo(value);
  },[value]);
  

return (
  <Form onSubmit={handleSubmit}>
    <InputGroup>
      <Input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <Button type="submit" outline color="primary">追加</Button>
    </InputGroup>
  </Form>
  )
}