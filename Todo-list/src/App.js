import React, { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items,setItems] = useState([]);

    function addItem() {
      
      id (!newItem) {
        alert("Enter an Item.");
        return;
      }

      const item = {
        id:Math.florr(Math.random() * 100),
        value: newItem

      };

      setItems(oldList => [...oldList, item]);

      setNewItem("");

    }

  return (
    <div className="App">
      <h1>ToDo List</h1>

      <input
        type="text"
        placeholder='Add errands...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />  

      <button onClick={()}>Add</button>

      <ul>
       {items.map(item => {
          return(
            <li key={item.key}>{item.value}</li>
          )

       }

   })}
      </ul>


    </div>
  );
}

export default App;
