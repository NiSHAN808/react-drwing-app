import React, { useState, useRef, } from "react";

function DrawingApp({ selectedColor }) {
    console.log("app = " + selectedColor);
    let canvasRef = useRef(null);
    let [drawingStatus, setdrawingState] = useState(false);
   
    function setdrawing(e) {
        if (drawingStatus === true) {
           const canvas = canvasRef.current;
            let ctx = canvas.getContext("2d");
            const { offsetX, offsetY } = e.nativeEvent;
            ctx.lineTo(offsetX, offsetY);
            ctx.stroke();
        }
    }

    function setDown(e) {
        setdrawingState(true)
        const canvas = canvasRef.current;
        let ctx = canvas.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;
        ctx.beginPath();
        ctx.strokeStyle = selectedColor;
        ctx.moveTo(offsetX, offsetY);
       
    }
    
    function setUp() {
        setdrawingState(false);
    }
    return (
        <>
            <canvas ref={canvasRef} height="500px" width="500px" style={{ background: "#909090" }}
                onMouseMove={setdrawing}
                onMouseDown={setDown}
                onMouseUp={setUp}
            />

        </>
    )
}
export default DrawingApp;