import { Box } from "@mui/material";
import * as React from "react";
import Task from "./Task";

function Data({ mapit, onDelete, togRem }) {
  return (
    <Box sx={{ mt: "30px" }}>
      {mapit.map((todo) => (
        <Task togRem={togRem} key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </Box>
  );
}

export default Data;
