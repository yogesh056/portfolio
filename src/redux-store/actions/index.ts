export interface stateType {
    showModal: boolean;
    modalTitle: string;
  }
  const initialState = { showModal: false, modalTitle: "" } as stateType;
  export default function modalReducer(
    state = initialState as stateType,
    action: any
  ) {
    switch (action.type) {
      case "toggleModal":
        return { ...state, showModal: !state.showModal };
      case "updateModalTitle":
        return { ...state, modalTitle: action.payload };
      default:
        return state;
    }
  }
  