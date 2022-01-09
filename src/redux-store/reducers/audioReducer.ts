import { audioInterface } from "../../modals";

const initialState = { playing: false, audioUrl: "" } as audioInterface;
export default function audioReducer(
  state = initialState as audioInterface,
  action: any
) {
  switch (action.type) {
    case "toggle":
      return { ...state, playing: !state.playing };
    case "stop":
      return { ...state, playing: false };
    case "play":
      return { ...state, playing: true };
    default:
      return state;
  }
}
