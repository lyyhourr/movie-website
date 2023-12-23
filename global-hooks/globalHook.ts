import { create } from "zustand";

type State = {
  showMenu: boolean;
};
type Action = {
  setShowMenu: (showMenu: State["showMenu"]) => void;
};
export const useGlobalHook = create<State & Action>((set) => ({
  showMenu: false,
  setShowMenu: (menu) => set(() => ({ showMenu: menu })),
}));
