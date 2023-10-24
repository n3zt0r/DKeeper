import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const Note = (props) => {
  const handleClick = () => {
    return props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
};
