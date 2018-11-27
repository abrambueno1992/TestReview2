import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createAttribute("div");

  ReactDOM.render(<App />, div);

  // Looks inside the div
  // and checks to see if the CommentBox component is there

  ReactDOM.unmountComponentAtNode(div);
});
