import en from "config/lang/en";
export type TypeLanguage = "pt" | "en";

export interface IInit {
  lang: typeof en;
}
export interface ILanguage extends IInit {}
class Language implements ILanguage {
  public lang = en;
}
export const language = new Language();
