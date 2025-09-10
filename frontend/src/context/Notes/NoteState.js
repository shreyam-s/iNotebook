import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  // Use environment variable for backend URL
  const host = process.env.REACT_APP_API_URL; // e.g., https://inotebook-backend.onrender.com
  const [notes, setNotes] = useState([]);

  // 🔹 Get All Notes
  const getNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return; // not logged in, skip

      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (!response.ok) {
        console.error("Failed to fetch notes");
        return;
      }

      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  // 🔹 Add Note
  const addNote = async (title, description, tag) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        console.error("Failed to add note");
        return;
      }

      const newNote = await response.json();
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.error("Error adding note:", error.message);
    }
  };

  // 🔹 Delete Note
  const deleteNote = async (id) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      });

      if (!response.ok) {
        console.error("Failed to delete note");
        return;
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  // 🔹 Edit Note
  const editNote = async (id, title, description, tag) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ title, description, tag }),
      });

      if (!response.ok) {
        console.error("Failed to update note");
        return;
      }

      // Update on client side
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
    } catch (error) {
      console.error("Error updating note:", error.message);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
