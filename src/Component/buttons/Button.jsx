import React from "react";

export default function ButtonComponent({color}){
    return(
        <button id={color} style={{backgroundColor:color}} className="py-3 px-5 text-blue-300 rounded-lg">{color}</button>
    )


}