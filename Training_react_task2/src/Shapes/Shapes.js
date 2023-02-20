import Circle from "./Circle"
import React from "react";
import Parallelogram from "./Parallelogram";
import Rhombus from "./Rhombus";
import Square from "./Square";
import Triangle from "./Traingle";
class Shapes extends React.Component{
    render(){
        return(
            <div>
            <Circle r='10'/>
            <br/>
            <Parallelogram b='5' h='5'/>
            <br/>
            <Rhombus p='5' q='5'/>
            <br/>
            <Square s='7'/>
            <br/>
            <Triangle b='4' h='6'/>
            </div>
        )
    }
}

export default Shapes;