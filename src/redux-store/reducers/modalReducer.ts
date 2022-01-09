import { modalInterface } from "../../modals";

const initialState = {
  showModal: false,
  modalTitle: "",
  isDarkMode: false,
} as modalInterface;
export default function modalReducer(
  state = initialState as modalInterface,
  action: any
) {
  switch (action.type) {
    case "toggleModal":
      return { ...state, showModal: !state.showModal };
    case "toggleMode":
      return { ...state, isDarkMode: !state.isDarkMode };
    case "updateModalTitle":
      return { ...state, modalTitle: action.payload };
    default:
      return state;
  }
}
