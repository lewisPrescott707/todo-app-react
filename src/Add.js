import { useState } from 'react';

export default function Add() {
    const [data, setData] = useState({
        todo: ''
    });
    const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData(oldData => ({ ...oldData, [key]: value }));
    };
    return (
    <form>
        <label>
            Todo:
            <input value={data.todo} name="todo" onChange={onChange} data-testid="todo-input" />
        </label>
            <button type="submit">Add Todo</button>
    </form>
    );
 }
