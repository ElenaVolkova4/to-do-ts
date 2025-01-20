import { RootState } from "../store";

/** сохранение в localStorage */
export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem("appState", appState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem("appState");
    if (!appState) return undefined;
    return JSON.parse(appState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};
