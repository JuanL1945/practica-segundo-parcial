import React from "react";
import { useTheme, useThemeSetter } from "./ThemeContext";

function Comp2() {
    const theme = useTheme();
    const setTheme = useThemeSetter();

    return (
        <div>
            Current: {theme}
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
    );
}

export default Comp2;
