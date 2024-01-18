import React from "react";
import "../styles/Barra.css";
const Barra = ({ width: inputWidth }) => {
    return (
        <div>
            <div className="container">
                {inputWidth >= 0 && inputWidth <= 100 ? (
                    <div className="innerContainer" style={{ width: `${inputWidth}%` }}>
                        {inputWidth}%
                    </div>
                ) : (
                    alert("por favor introduzca un valor inferior a 100")
                )}
            </div>
        </div>
    );
}

export default Barra;