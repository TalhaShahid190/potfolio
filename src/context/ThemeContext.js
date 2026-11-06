import { createContext, useContext, useState } from "react";

// --------------------------------------------------
// ThemeContext
// Yahan se poori app mein theme control hoti hai
// dark ya light — bas ek jagah se badlo
// --------------------------------------------------

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook — har component mein easily use karo
export function useTheme() {
  return useContext(ThemeContext);
}
