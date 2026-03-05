import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import "./language.css";

const languages = [
  { code: "en", name: "English 🇬🇧" },
  { code: "es", name: "Spanish 🇪🇸" },
  { code: "fr", name: "French 🇫🇷" },
  { code: "de", name: "German 🇩🇪" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const selected = languages.find(l => l.code === language);

  return (
    <div className="lang-container">
      <input
        readOnly
        value={selected.name}
        onClick={() => setOpen(!open)}
        className="lang-input"
      />

      {open && (
        <div className="dropdown">
          {languages.map(lang => (
            <div
              key={lang.code}
              className="dropdown-item"
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}