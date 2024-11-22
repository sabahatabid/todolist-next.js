import React, { useState } from 'react';

const ToDoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>ToDo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: "5px", marginRight: "5px", width: "200px" }}
        />
        <button onClick={addTask} style={{ padding: "5px 10px" }}>
          Add Task
        </button>
      </div>
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                marginLeft: "10px",
                padding: "2px 5px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
