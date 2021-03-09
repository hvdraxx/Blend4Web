import React, { useState } from "react";
import { hexToHSL, hexToRGB } from "../../utils/convertColor";

export const TableElement = ({
  index,
  name,
  type,
  color,
  elements,
  setElements,
  isAddingNewItem,
}) => {
  const [nameValue, setNameValue] = useState(name);
  const [typeValue, setTypeValue] = useState(type);
  const [colorValue, setColorValue] = useState(color);

  const deleteElement = () => {
    const newElements = elements.filter((elem, i) => {
      return i !== index;
    });
    setElements(newElements);

    const elemsToJSON = JSON.stringify(newElements);
    localStorage.setItem("elements", elemsToJSON);
  };

  const updateItems = () => {
    const configuredItem = {
      name: nameValue,
      type: typeValue,
      color: colorValue,
    };
    const configuredElements = [...elements];
    configuredElements[index] = configuredItem;
    setElements(configuredElements);

    const elemsToJSON = JSON.stringify(configuredElements);
    localStorage.setItem("elements", elemsToJSON);
  };

  const onBlurNameHandler = (event) => {
    setNameValue(event.currentTarget.value);
    if (!isAddingNewItem) {
      updateItems();
    }
  };
  const onBlurTypeHandler = (event) => {
    setTypeValue(event.currentTarget.value);
    if (!isAddingNewItem) {
      updateItems();
    }
  };
  const onBlurColorHandler = (event) => {
    setColorValue(event.currentTarget.value);
    if (!isAddingNewItem) {
      updateItems();
    }
  };

  const onMoveTopHandler = () => {
    if (elements[index - 1]) {
      const newElements = [...elements];
      const temp = newElements[index - 1];
      newElements[index - 1] = newElements[index];
      newElements[index] = temp;
      setElements(newElements);
    }
  };

  const onMoveBotHandler = () => {
    if (elements[index + 1]) {
      const newElements = [...elements];
      const temp = newElements[index + 1];
      newElements[index + 1] = newElements[index];
      newElements[index] = temp;
      setElements(newElements);
    }
  };

  return (
    <tr>
      <td className="table-nav-element" onClick={onMoveBotHandler}>
        ↓
      </td>
      <td className="table-nav-element" onClick={onMoveTopHandler}>
        ↑
      </td>
      <td>{index + 1}</td>
      <td className="table-name-element">
        <input
          type="text"
          value={nameValue}
          onChange={(event) => setNameValue(event.currentTarget.value)}
          onBlur={onBlurNameHandler}
        />
      </td>
      <td className="table-type-element">
        <select
          value={typeValue}
          onChange={(event) => setTypeValue(event.currentTarget.value)}
          onBlur={onBlurTypeHandler}
        >
          <option value="main">Main</option>
          <option value="side">Side</option>
          <option value="other">Other</option>
        </select>
      </td>
      <td className="table-color-element">
        <div className="color-element-wrapper">
          <span>{colorValue}</span>
          <span>{hexToRGB(colorValue)}</span>
          <span>{hexToHSL(colorValue)}</span>
        </div>
        <input
          type="color"
          value={colorValue}
          onChange={(event) => setColorValue(event.currentTarget.value)}
          onBlur={onBlurColorHandler}
        />
      </td>
      <td className="table-delete-btn" onClick={deleteElement}></td>
    </tr>
  );
};
