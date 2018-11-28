import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: "" };
  handleChange = e => {
    e.preventDefault();
    this.setState({ comment: e.target.value });
  };
  handleSubmit = e => {
    // e.preventDefault();

    // TODO Call an action creator
    // And save the comment
    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
