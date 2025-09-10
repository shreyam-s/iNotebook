import React, { useContext, useState } from "react";
import notesContext from "../context/Notes/noteContext";

const AddNote = ({ showAlert }) => {
  const context = useContext(notesContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert("Note added successfully ✅", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <div className="w-50 mx-auto">
            <img
              src="/images/addnote.png"
              alt="Add Notes"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <h2 className="mt-3 text-primary">Organize Your Thoughts</h2>
          <p className="text-muted">
            Add, manage, and categorize your notes easily. Stay productive and
            stress-free.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6">
          <div
            className="p-4 shadow-lg rounded"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <h3 className="mb-4 text-center text-success">Add a New Note</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={note.title}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={note.description}
                  onChange={onChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="tag" className="form-label">
                  Tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tag"
                  name="tag"
                  value={note.tag}
                  onChange={onChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={handleClick}
                disabled={note.title.length < 3 || note.description.length < 5}
              >
                Add Note
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
