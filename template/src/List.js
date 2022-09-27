function List({ items }) {
  if (!items.length) {
    return <h2>To-do list empty!</h2>
  }
  return (
    <>
      <h2>{items.length} item(s) to do</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td data-cy={"todo-"+i}>{item.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
