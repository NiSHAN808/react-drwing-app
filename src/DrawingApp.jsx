import React, { useState, useRef, } from "react";

function DrawingApp({ selectedColor, strokeSize }) {

function handleSaveClick (){
 localStorage.setItem("strokeDataX",JSON.stringify(strokeDataX));
 localStorage.setItem("strokeDataY",JSON.stringify(strokeDataY));
}
function handleSaveFetch(){
    let fetchDataX=JSON.parse(localStorage.getItem("strokeDataX"));
    let fetchDataY=JSON.parse(localStorage.getItem("strokeDataY"));
    const canvas = canvasRef.current;
        let ctx = canvas.getContext("2d");
       console.log(fetchDataX); console.log(fetchDataY);
      // ctx.moveTo(null, null); 
    for(let i=0 ;i<fetchDataX.current.length-1; i++){
        
       
       
          
      if(fetchDataX.current === null){   // ctx.beginPath();
        ctx.moveTo(fetchDataX.current[i+1], fetchDataY.current[i+1]); continue;
      }
        ctx.lineTo(fetchDataX.current[i], fetchDataY.current[i]);
        ctx.stroke();
    }
}
let strokeDataX =useRef([]); let strokeDataY =useRef([]);
let strokeCount =useRef(0);
    let canvasRef = useRef(null);
    let [drawingStatus, setdrawingState] = useState(false);

    function setdrawing(e) {
        if (drawingStatus === true) {
       
            const canvas = canvasRef.current;
            let ctx = canvas.getContext("2d");
            const { offsetX, offsetY } = e.nativeEvent; 
              strokeDataX.current.push(offsetX); 
              strokeDataY.current.push(offsetY);
              


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
        ctx.lineWidth = strokeSize;
        ctx.moveTo(offsetX, offsetY);

    }

    function setUp() {
        setdrawingState(false);
         strokeDataX.current.push(null); 
         strokeDataY.current.push(null); 
    }
    return (
        <>
            <canvas ref={canvasRef} height="500px" width="500px" style={{ background: "#909090" }}
                onMouseMove={setdrawing}
                onMouseDown={setDown}
                onMouseUp={setUp}
            />
      <button onClick={handleSaveClick}>SaVe</button>
      <button onClick={handleSaveFetch}>Fetch</button>
        </>
    )
}
export default DrawingApp;