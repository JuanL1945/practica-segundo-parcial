
import React from "react";
import { useTheme } from "./ThemeContext";

function Comp1() {
    const { theme } = useTheme();

    return (
        <div>
            <h1>{theme}</h1>
        </div>
    );
}

export default Comp1;
