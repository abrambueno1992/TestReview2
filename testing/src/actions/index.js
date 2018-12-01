import { SAVE_COMMENT } from "actions/types";

export function saveComment(comment) {
  console.log("fired save", comment);
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
