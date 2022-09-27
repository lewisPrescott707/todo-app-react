import { useState } from 'react';
import List from './List';
import Add from './Add';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
  };

  return (
    <>
      <Add handleAdd={handleAdd} />
      <List items={items} />
    </>
  );
}

export default App;
