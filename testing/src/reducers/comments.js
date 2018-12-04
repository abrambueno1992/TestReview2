import { SAVE_COMMENT } from "actions/types";

const initialState = {
  nothing: true,
  trouble: true,
  comment: ""
};
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return Object.assign({}, state, {
        comment: action.payload
      });
    default:
      return state;
  }
}
