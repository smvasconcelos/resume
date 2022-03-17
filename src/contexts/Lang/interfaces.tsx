import en from "config/lang/en";

export interface ILangOptions {
  [key: string]: typeof en;
}

export interface ILangContext {
  setLang: (val: typeof en) => void;
  lang: typeof en;
  langChanged: boolean;
  currentLangKey: string;
  changeLang: (key: string) => void;
}
