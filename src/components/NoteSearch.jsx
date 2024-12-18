import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    this.setState({ search }, () => {
      this.props.onSearch(search);
    });
  };

  render() {
    return (
      <div>
        <div className="note-app__header">
            <h1>Personal Notes App by Dio</h1>
            <div className="note-search"></div>
        
        <input
          type="text"
          id="search"
          placeholder="Cari Judul...."
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
      </div>
    );
  }
}

export default NoteSearch;