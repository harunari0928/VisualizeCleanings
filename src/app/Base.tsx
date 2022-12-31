import React from "react";
import { useState } from "react";

export function Base() {
    const [num, setNum] = useState<number>(0);
    return (<div>
        <h1>
            test
        </h1>
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >
        </nav>
        <input type="number" value={num} />
        <input
            type="button"
            role="button"
            value="Click me!!"
            onClick={() => setNum(num + 2)}
            readOnly />
    </div>)
};