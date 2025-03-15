import React, { useState, useRef, } from "react";

function DrawingApp({ selectedColor, strokeSize }) {

    function handleSaveClick() {
        localStorage.setItem("strokeDataX", JSON.stringify(strokeDataX));
        localStorage.setItem("strokeDataY", JSON.stringify(strokeDataY));
        localStorage.setItem("strokeColorWidth", JSON.stringify(strokeColorWidth));
    }
    function handleFetchClick() {
        let fetchDataX = JSON.parse(localStorage.getItem("strokeDataX"));
        let fetchDataY = JSON.parse(localStorage.getItem("strokeDataY"));
        let fetchColorWidth = JSON.parse(localStorage.getItem("strokeColorWidth"));

        const canvas = canvasRef.current;
        let ctx = canvas.getContext("2d");
    



ctx.strokeStyle = fetchColorWidth.current[0].color;
ctx.lineWidth = fetchColorWidth.current[0].width;
let strokeNumber= 1;    // i am confuse shound i native variable in react or not
        for (let i = 0; i < fetchDataX.current.length - 1; i++) {

            if (fetchDataX.current[i] === null) {
                ctx.beginPath();
                ctx.moveTo(fetchDataX.current[i + 1], fetchDataY.current[i + 1]);
                ctx.strokeStyle = fetchColorWidth.current[strokeNumber].color;
                ctx.lineWidth = fetchColorWidth.current[strokeNumber].width;
                strokeNumber++;
                continue;                       // can we optimize one extra line of for loop execution
            } 


            ctx.lineTo(fetchDataX.current[i], fetchDataY.current[i]);
            ctx.stroke();
        }
    }


    let strokeDataX = useRef([]); let strokeDataY = useRef([]);   let strokeColorWidth= useRef([]);   console.log(strokeColorWidth.current)
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


      strokeColorWidth.current.push({color:selectedColor, width:strokeSize})
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
            <button onClick={handleFetchClick}>Fetch</button>
        </>
    )
}
export default DrawingApp;