import { createContext, useState, useCallback } from "react"

export const TodosContext = createContext();

export const TodosContextProvider = props => {

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
    <TodosContext.Provider value={{todos, addTodo, removeTodo, completeTodo}}>
      {props.children}
    </TodosContext.Provider>
  )
}