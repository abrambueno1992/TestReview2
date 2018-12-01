import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "" };
  }
  handleChange = e => {
    // e.preventDefault();
    this.setState({ comment: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    // TODO Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment);
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

const mapStateToProps = state => {
  return null;
};
export default connect(
  null,
  actions
)(CommentBox);
