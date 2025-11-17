import { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children, initial = 'light' }) {
    const [theme, setTheme] = useState(initial);
    const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <div data-theme={theme} className="app_theme-root">
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme повинна використовуватися тільки всередині ThemeProvider');
    return ctx;
}
