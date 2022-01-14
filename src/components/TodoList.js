
import { Button, Table } from "reactstrap";

export const TodoList = ({ todos, removeTodo, completeTodo }) => {

  return (
    <Table>
      <tbody>
        {console.log(`Todo is ${todos}`)}
        {todos && todos.map((todo, index) => (
          <tr keys={index}>
            <th className="text-left" style={{ textDecoration: todo.complete ? "line-through" : "" }}>
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
  )
}