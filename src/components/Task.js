import React from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

function Task({ togRem, todo, onDelete }) {
  return (
    <Box
      className={todo.reminder ? "reminder" : ""}
      sx={{
        width: "400px",
        ml: "20px",
        background: todo.reminder ? " #1c83c823" : " #00000023",
        padding: "10px",
        mb: "20px",
      }}
    >
      <h3>{todo.text}</h3>
      <Box sx={{ display: "flex" }}>
        <p>{todo.day}</p>
        <Button sx={{ ml: "200px" }} onClick={() => togRem(todo.id)}>
          set
        </Button>
        <Button onClick={() => onDelete(todo.id)}>x</Button>
      </Box>
    </Box>
  );
}

export default Task;
