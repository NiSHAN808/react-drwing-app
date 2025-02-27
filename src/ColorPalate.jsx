import React, { useState, lazy, useEffect } from "react";


function ColorPlate({colors,setColors, setSelectedColor}) {
 
    let [lastClick,setLastClick]=useState(0);


    
   
    function handleColorClick(e, index) {
        console.log(lastClick);
      
           
        
        e.target.style.border = '3px solid #d3c8574a';

        setSelectedColor(colors[index]);
        setLastClick(index);
    }


    return (
        <>

            <div className="color-palate">
                {colors.map((color, index) => <div className="col" key={index}  style={lastClick === index ? {
                    background: color,
                    height: "50px",
                    width: "50px",
                    borderRadius: "10px",
                    marginBottom: "2px",
                    border:"3px solid #d3c8574a",
                    
                }:{       background: color,
                    height: "50px",
                    width: "50px",
                    borderRadius: "10px",
                    marginBottom: "2px",
                    
                    } } 
                    onClick={(e) => handleColorClick(e, index)}
                >
                
                </div>)}

            </div>
      
        </>
    );
}
export default ColorPlate;