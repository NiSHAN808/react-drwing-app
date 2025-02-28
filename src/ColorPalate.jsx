import React, { useState, lazy, useEffect } from "react";


function ColorPlate({selectedColor, setSelectedColor, strokeSize, setStrokeSize }) {
    //   selectedColor is used to return to compare  
    //    stoke size is also used in to return to compare and
    //  givve differnent css in case it is the same value that is selected 
    
    
    let [colors, setColors] = useState(["#41644A", "#E53888", "#443627", "#27445D", "#497D74"]);
    let [strokeList, setStrokeSizeM] = useState([2, 4, 6, 8, 10]);



    function handleColorClick(e, index) {
        setSelectedColor(colors[index]);
    }

    function handleStrokeClick(index) {
        setStrokeSize(strokeList[index]);
    }



    return (
        <>

            <div style={{ display: "inline-block" }} className="color-plate">
                {colors.map((color, index) => <div className="col" key={index} style={selectedColor === colors[index] ? {
                    background: color,
                    height: "45px",
                    width: "45px",
                    borderRadius: "10px",
                    marginBottom: "2px",
                    border: "4px solid rgba(255, 255, 255, 0.45)",

                } : {
                    background: color,
                    height: "50px",
                    width: "50px",
                    borderRadius: "10px",
                    marginBottom: "2px",

                }}
                    onClick={(e) => handleColorClick(e, index)}
                >

                </div>)}

            </div>

            <div style={{ display: "inline-block" }} className="stroke-plate">

                {strokeList.map((stroke, index) => <div style={strokeSize === stroke ? {
                    background: "#e9efff",
                    height: "37px",
                    width: "37px",
                    fontSize: stroke * 15,
                    borderRadius: "7px",
                    marginBottom: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "4px solid rgb(46 97 171 / 72%)",
                    overflow: "hidden",
                    cursor: "pointer",
                } : {
                    background: "hsl(0 0% 90% / 1)",
                    height: "40px",
                    width: "40px",
                    fontSize: stroke * 15,
                    borderRadius: "7px",
                    marginBottom: "2px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", border: "solid 1px #0000008c",
                    boxShadow: "0px 0px 3px 0px #000000",
                    overflow: "hidden",
                    cursor: "pointer",
                }}
                    onClick={() => handleStrokeClick(index)}

                    key={index}>
                    ~ </div>)}
            </div>

        </>
    );
}
export default ColorPlate;