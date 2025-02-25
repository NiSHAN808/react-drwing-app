import React,{useState,createContext} from "react";
import DrawingApp from "./DrawingApp";
export const MyContext=createContext();
function ColorPlate(){

let [colors,setColors]=useState(["#41644A","#E53888","#443627","#27445D","#497D74"]);
//let x=colors[0];
let [x,setX]=useState(colors[0]);
function handleColorClick(index){
console.log(colors[index]);
//x=colors[index];
setX(colors[index]);
}
 

    return(
<>

<div className="color-palate">
    {colors.map((color,index)=> <div key={index} style={{background:color,
         height:"50px",
         width:"50px", 
         borderRadius:"10px",
         marginBottom:"2px"}}
         onClick={()=>handleColorClick(index)}
         >
         
         </div>)}
        
</div>
<MyContext.Provider value={x}>
         <DrawingApp/>
         </MyContext.Provider>
</>
    );
}
export default ColorPlate;