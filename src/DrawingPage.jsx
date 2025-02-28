import React, { useState } from "react";
import ColorPlate from "./ColorPalate";
import DrawingApp from "./DrawingApp";

function DrawingPage() {
   // let [colors, setColors] = useState(["#41644A", "#E53888", "#443627", "#27445D", "#497D74"]);
    let [selectedColor, setSelectedColor] = useState("#41644A");
    let [strokeSize, setStrokeSize] = useState(2);
    return (
        <>
            <ColorPlate //colors={colors}
              //  setColors={setColors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                strokeSize={strokeSize}
                setStrokeSize={setStrokeSize} />

            <DrawingApp selectedColor={selectedColor} strokeSize={strokeSize} />
        </>
    )
}
export default DrawingPage;
