import { localStorageKeys } from "constants/localstorage";
const langStorage = {
  remove: (): void => localStorage.removeItem(localStorageKeys.lang),
  set: (value: string): void =>
    localStorage.setItem(localStorageKeys.lang, value),
  get: (): string => localStorage.getItem(localStorageKeys.lang) as string,
};

export default langStorage;
