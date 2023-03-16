/* eslint-disable @typescript-eslint/no-explicit-any */
export type personType = {
  name: string;
  firstName: string;
  address: string;
  town: string;
  codePost: string;
};

export interface AppState {
  loading: boolean;
  closeModal: boolean;
  modal: any | null;
}
