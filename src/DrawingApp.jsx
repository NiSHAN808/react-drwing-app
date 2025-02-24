import React, { useState, useRef } from "react";
function DrawingApp() {
    let canvasRef = useRef(null);
    let [drawingStatus, setdrawingState] = useState(false);
    //let ctx=x.getContext("2d");
    //canvas[0].addEventListener("onMouseMove",setdrawing);


    function setdrawing(e) {
       if(drawingStatus===true){
        const x = canvasRef.current;
        let ctx = x.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;
        console.log(offsetX, offsetY);
        //let cordinate={x.}
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
       }
    }
    function setDown(){
        setdrawingState(true);
    }
    function setUp(){
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