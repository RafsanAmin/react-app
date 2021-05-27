import { useState } from 'react';

export default function Form(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { addTodo } = props;
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputVal = e.target.value;
    if (inputName === 'title') {
      setTitle(inputVal);
    } else {
      setText(inputVal);
    }
  };
  return (
    <form>
      <input name="title" type="text" value={title} onChange={handleChange} />
      <textarea name="text" value={text} onChange={handleChange} />
      <button
        type="button"
        onClick={() =>
          addTodo({
            id: Math.random(),
            title,
            text,
          })
        }
      >
        Add Todo
      </button>
    </form>
  );
}
