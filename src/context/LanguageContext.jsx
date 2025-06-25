import { createContext, useState, useContext, useEffect } from "react";

// 1. Create context
const LanguageContext = createContext()

// 2. Create provider component
export const LanguageProvider = ({ children }) => {
  // Read initial value from localStorage (fallback to true for English)
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang !== null ? JSON.parse(savedLang) : true;
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language));
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// 3. Hook for easier access
export const useLanguage = () => useContext(LanguageContext)
