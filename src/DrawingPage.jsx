import React,{useState} from "react";
import ColorPlate from "./ColorPalate";
import DrawingApp from "./DrawingApp";

function DrawingPage(){
let [colors,setColors]=useState(["#41644A", "#E53888", "#443627", "#27445D", "#497D74"]);
let [selectedColor, setSelectedColor] = useState(colors[0]);

return(
    <>
    <ColorPlate colors={colors} setSelectedColor={setSelectedColor}  />
<h1>{selectedColor}</h1>
    <DrawingApp selectedColor={selectedColor} />
    </>
)
}
export default DrawingPage;
