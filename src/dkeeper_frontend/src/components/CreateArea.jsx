import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

export const CreateArea = (props) => {
  const [isExpand, setExpand] = useState(false);
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setContent((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleClick = (event) => {
    props.onAdd(content);
    setContent({
      title: "",
      content: "",
    });

    event.preventDefault();
  };

  const expand = () => {
    setExpand(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={content.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={content.content}
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};
