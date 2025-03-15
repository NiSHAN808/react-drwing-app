import React, { useState, lazy, useEffect, useRef } from "react";


function ColorPlate({ selectedColor, setSelectedColor, strokeSize, setStrokeSize }) {
    //   selectedColor is used to return to compare  
    //    stoke size is also used in to return to compare and
    //  givve differnent css in case it is the same value that is selected 


    let [colors, setColors] = useState(["#41644A", "#E53888", "#443627", "#27445D", "#497D74"]);
    let [strokeList, setStrokeSizeM] = useState([2, 4, 6, 8, 10]);

    const newColor = useRef();

    function handleColorClick(e, index) {
        setSelectedColor(colors[index]);
    }

    function handleStrokeClick(index) {
        setStrokeSize(strokeList[index]);
    }

    function handleAddColorClick() {
        console.log(newColor.current.value);
        setColors([...colors, newColor.current.value])
    }

    return (
        <>

            <div style={{ display: "inline-block" }} className="color-plate">
                {colors.map((color, index) => <div className="col" key={index} style={selectedColor === colors[index] ? {
                    background: color,
                    height: "1.8rem",
                    width: "1.8rem",
                    borderRadius: "10px",
                    marginBottom: "2px",
                    border: "4px solid rgba(255, 255, 255, 0.45)",

                } : {
                    background: color,
                    height: "2rem",
                    width: "2rem",
                    borderRadius: "10px",
                    marginBottom: "2px",

                }}
                    onClick={(e) => handleColorClick(e, index)}
                >

                </div>)}
                <div style={{
                    border: "4px solid rgba(255, 255, 255, 0.45)",
                    background: "#ffffff",
                    height: "3.6rem",
                    width: "2rem",   // ik its terrable gonna optimize latter
                    borderRadius: "10px",
                    marginBottom: "2px",   border:"solid 1px #1010108f",
                    display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        margin: "0px",
                        padding: "5px",
                }}>
                    <input ref={newColor} type="color" style={{ height: "1.8rem",
                         width: "1.8rem", 
                         borderRadius:"0.5rem",
                         padding: "0px",
                          appearance: "none",
                           border:"none"}}></input>
                    <button onClick={handleAddColorClick} style={{
                        border: "none",
                        fontSize: "1rem",
                        height: "1.8rem",
                        width: "1.8rem",
                        background: "blue",
                        borderRadius:"0.5rem",
                    
                    }}>+</button>
                </div>
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