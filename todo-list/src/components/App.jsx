import { useState } from "react";
import List from "./List";

function App() {
  const [data, setData] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setData(value);
  }

  function handleClick() {
    setItems((prevItems) => {
      return [...prevItems, data];
    });
    setData("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={data} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((doItem, index) => {
            return (
              <List
                key={index}
                id={index}
                text={doItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
