import React from "react";
import { Button, TextField } from "@mui/material";
import { Checkbox } from "@mui/material";
import { useState } from "react";

export default function Header({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault(); // ???

    if (!text || !day) {
      alert("a Task or Day field is empty!");
      return;
    }
    onAdd({ text, day, reminder });
    // onAdd(text , date, reminder); // my mistake here was to forgot i need to
    // round them with curly braces as an object {}
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <>
      <header>
        <h3>New Task </h3>
        <TextField
          sx={{ m: "5px", display: "flex", width: "440px", mb: "20px" }}
          label="Enter task name"
          color="primary"
          value={text}
          onChange={(e) => setText(e.target.value)} // taking input value here nothing much
          focused
        />
        <TextField
          sx={{ m: "5px", display: "flex", width: "440px", mb: "20px" }}
          label="Enter date"
          color="primary"
          value={day}
          onChange={(e) => setDay(e.target.value)} //
          focused
        />
      </header>
      <label className="checkLabel">Set reminder</label>
      <Checkbox
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)} //
        checked={reminder}
      />
      <Button
        onClick={onSubmit}
        variant="contained"
        sx={{ ml: "222px", mt: "20px", mb: "25px" }}
      >
        SAVE
      </Button>
    </>
  );
}
