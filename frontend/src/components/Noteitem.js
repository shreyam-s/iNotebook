import React from "react";
import "./Noteitem.css";

const Noteitem = ({ note, updateNote, handleDelete }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card my-3 shadow-lg rounded border-0 h-100 hover-effect">
        <div className="card-body d-flex flex-column">
          <span className="badge bg-primary mb-2 align-self-start">
            {note.tag || "General"}
          </span>
          <h5 className="card-title text-primary">{note.title}</h5>
          <p className="card-text text-muted flex-grow-1">{note.description}</p>
          <div className="mt-3 d-flex justify-content-end">
            <i
              className="fa-solid fa-pen-to-square text-success mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => updateNote(note)}
              title="Edit Note"
            ></i>
            <i
              className="fa-solid fa-trash text-danger mx-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(note._id)}
              title="Delete Note"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
