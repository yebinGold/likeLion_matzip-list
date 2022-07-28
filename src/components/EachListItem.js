import React, { useState } from "react";
import {
  faTrashCan,
  faSquare,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListBlock } from "./../styledComponents";

const EachListItem = ({ name, checked, onToggle, onRemove }) => {
  //console.log(todo);
  return (
    <ListBlock checked={checked}>
      <div>
        <FontAwesomeIcon
        className="check"
          onClick={() => onToggle(name)}
          icon={checked === true ? faSquareCheck : faSquare}
        />
        <h4>{name}</h4>
      </div>
      <FontAwesomeIcon className="remove" onClick={() => onRemove(name)} icon={faTrashCan} />
    </ListBlock>
  );
};

export default EachListItem;
