import React, { useState } from "react";
import { hexToHSL, hexToRGB } from "../../utils/convertColor";

export const AddTableElement = ({
  index,
  elements,
  setElements,
  isAddingNewItem,
  setIsAddingNewItem,
}) => {
  const [element, setElement] = useState({
    name: "Имя нового элемента",
    type: "Main",
    color: "#ffffff",
  });

  const addNewItem = () => {
    setIsAddingNewItem(false);

    const configuredElements = [...elements];
    configuredElements.push(element);
    setElements(configuredElements);

    const elemsToJSON = JSON.stringify(configuredElements);
    localStorage.setItem("elements", elemsToJSON);

    setElement({
      name: "Имя нового элемента",
      type: "Main",
      color: "#ffffff",
    });
  };

  const onChangeHandler = (event, field) => {
    switch (field) {
      case "name":
        setElement({
          name: event.currentTarget.value,
          type: element.type,
          color: element.color,
        });
        break;
      case "type":
        setElement({
          name: element.name,
          type: event.currentTarget.value,
          color: element.color,
        });
        break;
      case "color":
        setElement({
          name: element.name,
          type: element.type,
          color: event.currentTarget.value,
        });
        break;
      default:
        return null;
    }
  };

  return isAddingNewItem ? (
    <>
      <tr className="new-item-highlight">
        <td className="table-nav-element-disabled"></td>
        <td className="table-nav-element-disabled"></td>
        <td>{index}</td>
        <td className="table-name-element">
          <input
            type="text"
            className="new-item-highlight"
            value={element.name}
            onChange={(event) => onChangeHandler(event, "name")}
          />
        </td>
        <td className="table-type-element">
          <select
            className="new-item-highlight"
            value={element.type}
            onChange={(event) => onChangeHandler(event, "type")}
          >
            <option value="main">Main</option>
            <option value="side">Side</option>
            <option value="other">Other</option>
          </select>
        </td>
        <td className="table-color-element">
          <div className="color-element-wrapper">
            <span>{element.color}</span>
            <span>{hexToRGB(element.color)}</span>
            <span>{hexToHSL(element.color)}</span>
          </div>
          <input
            type="color"
            value={element.color}
            onChange={(event) => onChangeHandler(event, "color")}
          />
        </td>
        <td></td>
      </tr>
      <tr>
        <td className="table-add-btn-approve" colSpan="7" onClick={addNewItem}>
          Добавить
        </td>
      </tr>
      <tr>
        <td
          className="table-add-btn-reject"
          colSpan="7"
          onClick={() => setIsAddingNewItem(false)}
        >
          Отменить
        </td>
      </tr>
    </>
  ) : (
    <tr>
      <td
        className="table-add-button"
        colSpan="7"
        onClick={() => setIsAddingNewItem(true)}
      ></td>
    </tr>
  );
};
