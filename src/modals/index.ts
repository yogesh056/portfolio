export interface modalInterface {
  showModal: boolean;
  isDarkMode: boolean
  modalTitle: string;
}
export interface audioInterface {
  playing: boolean;
  audioUrl: string;
}
export interface stateType {
  audio: audioInterface;
  modal: modalInterface;
}
