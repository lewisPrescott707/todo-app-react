import { useState } from 'react';

function Add({ handleAdd }) {
  const [data, setData] = useState({
    todo: ''
  });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData(oldData => ({ ...oldData, [key]: value }));
  };
  const onSubmit = (evt) => {
    handleAdd(data);
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{display: 'flex', flexDirection: 'column'}}
    >
      <label>
         Todo:
         <input value={data.todo} name="todo" onChange={onChange} data-cy="todo" />
      </label>
      <div>
        <button data-cy="Add">Add</button>
      </div>
    </form>
  );
}

export default Add;
