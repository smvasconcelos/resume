import en from "config/lang/en";
import pt from "config/lang/pt";
import React, { createContext, useEffect, useState } from "react";
import langStorage from "storage/lang";
import { ILangContext, ILangOptions } from "./interfaces";
import { language } from "lib/Language";

const LangContext = createContext<ILangContext>({
  setLang: () => null,
  changeLang: (key: string) => null,
  lang: en,
  langChanged: false,
	currentLangKey: "pt",
});

export const LangProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useState<typeof en>(en);
  const [langState] = useState<ILangOptions>({ en, pt });
  const [langChanged, setLangChanged] = useState<boolean>(false);
	const [currentState, setCurrentState] = useState<string>("pt");
	const changeLang = (key: string) => {
		setLang(langState[key] || langState["pt"]);
    setCurrentState(key);
    setLangChanged(!langChanged);
    setCurrentState(key);
		language.lang = langState[key] || langState["pt"];
    langStorage.set(key);
  };

  useEffect(() => {
    const localKey = langStorage.get();

    if (localKey) {
      changeLang(localKey);
      setCurrentState(localKey);
    } else {
			changeLang("pt");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LangContext.Provider
      value={{
        lang,
        langChanged,
        currentLangKey: currentState,
        setLang,
        changeLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
