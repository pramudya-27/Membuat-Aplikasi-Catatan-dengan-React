import React, { Component } from "react";

class ArchiveButton extends Component {
  render() {
    const { id, onArchive, archived } = this.props;

    return (
      <button
        className="note-item__archive-button"
        onClick={() => onArchive(id)}
      >
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    );
  }
}

export default ArchiveButton;