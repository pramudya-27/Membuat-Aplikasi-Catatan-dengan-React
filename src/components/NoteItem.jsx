
import React, { Component } from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./NoteDelete";
import ArchiveButton from "./NoteArchivedButton";

class NoteItem extends Component {
  render() {
    const { title, body, createdAt, id, archived, onDelete, onArchive } =
      this.props;

    return (
      <div className="note-item">
        <div className="note-item__content">
          <NoteItemBody title={title} createdAt={createdAt} body={body} />
        </div>
        <div className="note-item__action">
          <DeleteButton id={id} onDelete={onDelete} />
          <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
      </div>
    );
  }
}

export default NoteItem;
