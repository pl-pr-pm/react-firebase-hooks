
import { InputGroup, Form, Input, Button} from "reactstrap";
import { useState, useCallback} from "react";



export const TodoForm = ({addTodo}) => {

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