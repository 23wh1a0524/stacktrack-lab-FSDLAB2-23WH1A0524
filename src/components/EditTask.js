import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const rollNumber = "23wh1a0524"; 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`http://bvrithcloud.com/api/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": rollNumber,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setStatus(data.status);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleUpdate(e) {
    e.preventDefault();

    fetch(`http://bvrithcloud.com/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-student-id": rollNumber,
      },
      body:{
        title: title,
        description: description,
        status: status,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Task Updated");
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>Edit Task</h2>

      <form onSubmit={handleUpdate}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <br />

        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditTask;