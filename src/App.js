import './App.css';
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
    <div className={`min-h-screen flex flex-col items-center justify-center mt-10 ${theme}`} style={{backgroundColor: 'var(--background-color)', color: 'var(--primary-color)'}}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Weather />
    </ThemeContext.Provider>
    </div>
    </>
  );
}

export default App;
