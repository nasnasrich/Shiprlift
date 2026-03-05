import { createContext, useState, useContext } from "react";
import { translations } from "./translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: changeLanguage,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// ✅ THIS WAS MISSING
export const useLanguage = () => {
  return useContext(LanguageContext);
};