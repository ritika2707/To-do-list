import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        //jb hm click krenge tp onClicked function call hoga
        props.onClicked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
