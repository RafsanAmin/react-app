import { useEffect, useState } from 'react';
import TodoAPI from '../API/TodoAPI';
import Form from './components/Form';
import TodoList from './components/TodoList';
/* eslint-disable no-alert */
function TodoApp() {
  const [Todos, setTodos] = useState([]);
  const [Loading, setLoad] = useState(true);
  const getData = async () => {
    let MyTodos = await TodoAPI.getAllTodo();
    setTodos(MyTodos);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, []);
  // Todo Handlers
  const addTodo = async (newTodo) => {
    setLoad(true);
    const { title, text } = newTodo;
    if (!(title && text)) {
      alert('Add Title and Text');
    } else {
      await TodoAPI.addTodo({ title, text });
      getData();
      setLoad(false);
    }
  };
  const removeTodo = async (arr) => {
    setLoad(true);
    await TodoAPI.delTodo(arr);
    getData();
    setLoad(false);
  };
  return (
    <>
      <div>
        <Form addTodo={addTodo} />
        <TodoList Todos={Todos} Loading={Loading} rmTD={removeTodo} />
      </div>
    </>
  );
}

export default TodoApp;
