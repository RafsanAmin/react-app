/* eslint-disable no-underscore-dangle */
/* eslint-disable eqeqeq */
import Todo from './Todo';

function TodoList(props) {
  const { Todos, Loading, rmTD } = props;
  return (
    <div className="list">
      {Loading ? <p className="over">Loading</p> : null}
      {Todos
        ? Todos.map((todos) => {
            console.log(todos);
            return (
              <Todo
                key={todos._id}
                id={todos._id}
                title={todos.title}
                text={todos.text}
                func={rmTD}
              />
            );
          })
        : 'No Todos Here'}
    </div>
  );
}
export default TodoList;
