/* eslint-disable no-unused-vars */

function Todo(props) {
  const { id, title, text, func } = props;

  if (!(title && text)) {
    return null;
  }
  return (
    <div className="myClass">
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <button
        onClick={(e) =>
          // e.stopPropagation();
          func({ _id: id })
        }
        type="button"
      >
        X
      </button>
    </div>
  );
}

export default Todo;
