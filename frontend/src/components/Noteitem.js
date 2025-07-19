import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card shadow-sm border-0 rounded-3 my-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <h5 className="card-title fw-semibold text-primary">
              {note.title}
            </h5>
            <div>
              <i
                className="fas fa-edit text-success mx-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  updateNote(note);
                }}
                title="Edit"
              ></i>
              <i
                className="fas fa-trash-alt text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "success");
                }}
                title="Delete"
              ></i>
            </div>
          </div>
          <p className="card-text mt-2 text-muted">{note.description}</p>
          {note.tag && (
            <span className="badge bg-info text-dark">{note.tag}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
