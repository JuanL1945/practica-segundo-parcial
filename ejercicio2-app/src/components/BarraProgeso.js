import Barra from "./Barra";
import React, { useState } from "react";
function BarraProgreso() {
    const [val, setVal] = useState(10);
    const setValuer = (e) => setVal(Number(e.target.value));
    return (
        <div className="App">
            <h1>Barra de progreso</h1>
            <Barra width={val} />
            <form>
                <label for="html">Porcentaje de entrada:</label>
                <input type="number" onChange={setValuer} />
            </form>
        </div>
    );
}
export default BarraProgreso