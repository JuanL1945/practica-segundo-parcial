import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext("dark");

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeSetter() {
    const { setTheme } = useContext(ThemeContext);
    return setTheme;
}

export function ThemeProvider({ children }) {
    const [theme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
}
