import React, { useState, createContext, lazy } from "react";
import DrawingApp from "./DrawingApp";
export const MyContext = createContext();
function ColorPlate() {
    const containerStyle = {
        height: 44,
        width: 44,
        borderRadius: 10,
        marginBottom: 2,
        border: '3px solid #d3c8574a',
        boxShadow: 'inset 0px 0px 4px 3px #0000004a',
    };
    let [lastClick,setLastClick]=useState(0);
    let [colors, setColors] = useState(["#41644A", "#E53888", "#443627", "#27445D", "#497D74"]);
    //let x=colors[0];
    let [x, setX] = useState(colors[0]);
    function handleColorClick(e, index) {
        console.log(lastClick);
      
           // document.getElementsByClassName('col')[lastClick].style.border="none";
        
        e.target.style.border = '3px solid #d3c8574a';

        setX(colors[index]);
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
            <MyContext.Provider value={x}>
                <DrawingApp />
            </MyContext.Provider>
        </>
    );
}
export default ColorPlate;