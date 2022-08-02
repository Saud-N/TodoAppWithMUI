import Data from "./components/Data";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [oppintments, setOppintments] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);
  // show add oppointment
  const [showAdd, setshowAdd] = useState(false);
  const togAdd = () => {
    setshowAdd(!showAdd);
  };
  // add oppointment

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newOppointment = { id, ...task };
    setOppintments([...oppintments, newOppointment]);
  };

  // delete oppointment

  const deleteOppo = (id) => {
    setOppintments(oppintments.filter((task) => task.id !== id));
  };
  // change reminder

  const changeRem = (id) => {
    setOppintments(
      oppintments.map((task) => {
        if (task.id === id) task.reminder = !task.reminder;
        return task;
      })
    );
  };

  // const changeRem = (id) => {
  //   setOppintments(
  //     oppintments.map((tasks) =>
  //       tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks
  //     )
  //   );
  // };

  return (
    <div>
      <Navbar />
      <Button
        variant={showAdd ? "outlined" : "contained"}
        sx={{ ml: "375px", mt: "20px", mb: "25px" }}
        onClick={togAdd}
      >
        {showAdd ? "Close" : " Add "}
      </Button>
      {showAdd && <Header onAdd={addTask} />}
      <header className="shit"> - My tasks - </header>
      {oppintments.length > 0 ? (
        <Data mapit={oppintments} togRem={changeRem} onDelete={deleteOppo} />
      ) : (
        "no tasks to do!"
      )}
    </div>
  );
}

export default App;
