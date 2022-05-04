import { useState } from 'react';
import { DarkModeContext } from "../constants/context";

function ThemeProvider({
  children
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{
      isDarkMode,
      toggleDarkMode
    }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default ThemeProvider;
