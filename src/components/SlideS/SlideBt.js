import React from 'react'

function Button (props){
    const cStyle = {
        backgroundColor: "#000",
        width: "50px",
        height:"50px"       
    }
    return(
        <div 
            style={cStyle} 
            onClick={()=> props.handleNextImg(props.items.id)}
        />

        
    )
}

export default Button