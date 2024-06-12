import Weather from './Components/Weather';
import { ThemeContext } from './Components/ThemeContext';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <>
    <div className={`bg-${theme}-background text-${theme}-primary`}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Weather />
    </ThemeContext.Provider>
    </div>
    </>
  );
}

export default App;
