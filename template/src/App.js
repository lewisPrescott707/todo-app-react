import { useState } from 'react';
import List from './List';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
  };

  return (
    <>
      <List items={items} />
    </>
  );
}

export default App;
