import React, { useEffect, useState } from "react";
import { Table } from "./components/Table/Table";

const initElements = [
  { name: "Люминесценция", type: "main", color: "#FFCD69" },
  { name: "Безмятежность", type: "other", color: "#AA7DFF" },
  { name: "Сияние", type: "side", color: "#FF5A86" },
  { name: "Вдохновение", type: "main", color: "#64F5FF" },
  { name: "Периодичность", type: "side", color: "#00FF73" },
];

function App() {
  const [elements, setElements] = useState([]);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  useEffect(() => {
    if (elements.length === 0) {
      if (localStorage.elements) {
        const elementsFromStorage = JSON.parse(localStorage.elements);
        setElements(elementsFromStorage);
      } else {
        setElements(initElements);
      }
    }
  }, [elements.length]);

  return (
    <div className="container">
      <Table
        elements={elements}
        setElements={setElements}
        isAddingNewItem={isAddingNewItem}
        setIsAddingNewItem={setIsAddingNewItem}
      />
    </div>
  );
}

export default App;
