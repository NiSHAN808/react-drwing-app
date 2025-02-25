import React, { useState, useRef,useContext } from "react";
import{ MyContext} from './ColorPalate';
function DrawingApp() {
    let canvasRef = useRef(null);
    let [drawingStatus, setdrawingState] = useState(false);
    //let ctx=x.getContext("2d");
    //canvas[0].addEventListener("onMouseMove",setdrawing);

   let col=useContext(MyContext);

    function setdrawing(e) {
       if(drawingStatus===true){
        const x = canvasRef.current;
        let ctx = x.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;
        //let cordinate={x.}
       // let col=useContext(MyContext);
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
       }
    }
    function setDown(e){
        setdrawingState(true)
        const x = canvasRef.current;
        let ctx = x.getContext("2d");
        const { offsetX, offsetY } = e.nativeEvent;
       // let col=useContext(MyContext);
      ctx.strokeStyle = col;
        ctx.moveTo(offsetX, offsetY);
        console.log("stroke");
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