import React from "react";
import { AddTableElement } from "../AddTableElement/AddTableElement";
import { TableElement } from "../TableElement/TableElement";

export const Table = ({
  elements,
  setElements,
  isAddingNewItem,
  setIsAddingNewItem,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-nav-element-disabled"></th>
          <th className="table-nav-element-disabled"></th>
          <th></th>
          <th>Имя</th>
          <th>Тип</th>
          <th>Цвет (hex / rgb / hsl)</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {elements.length !== 0 ? (
          elements.map((element, index) => (
            <TableElement
              key={`${index}__${Date.now()}`}
              index={index}
              name={element.name}
              type={element.type}
              color={element.color}
              elements={elements}
              setElements={setElements}
              isAddingNewItem={isAddingNewItem}
            />
          ))
        ) : (
          <tr>
            <td colSpan="7" className="table-empty-list">
              Список элементов пуст
            </td>
          </tr>
        )}
        <AddTableElement
          index={elements.length + 1}
          elements={elements}
          setElements={setElements}
          isAddingNewItem={isAddingNewItem}
          setIsAddingNewItem={setIsAddingNewItem}
        />
      </tbody>
    </table>
  );
};
