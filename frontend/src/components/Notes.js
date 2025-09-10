import React, { useContext, useEffect, useState } from "react";
import notesContext from "../context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Notes = ({ showAlert }) => {
  const context = useContext(notesContext);
  const { notes, getNotes, editNote, deleteNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateNote = (currentNote) => {
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    handleShow();
  };

  const handleEdit = () => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    handleClose();
    showAlert("Note updated successfully ✅", "success");
  };

  const handleDelete = (id) => {
    deleteNote(id);
    showAlert("Note deleted successfully ✅", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5 notes-container">
      {/* Add Note Form */}
      <AddNote showAlert={showAlert} />

      {/* Edit Note Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="etitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="etitle"
                value={note.etitle}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="edescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="edescription"
                value={note.edescription}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="etag">
              <Form.Label>Tag</Form.Label>
              <Form.Control
                type="text"
                name="etag"
                value={note.etag}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Update Note
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Notes List */}
      <div className="row mt-4 mb-5">
        <h2 className="mb-4 text-center text-primary">Your Notes</h2>
        {notes.length === 0 && (
          <p className="text-center text-muted">No notes to display</p>
        )}
        {notes.map((note) => (
          <Noteitem
            key={note._id}
            note={note}
            updateNote={updateNote}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
