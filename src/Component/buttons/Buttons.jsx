import React from "react";
import ButtonComponent from "./Button";
import '../buttons/Buttons.css';

export default function ButtonsComponent({setState}){
    let colors = ['red','blue','purple','olive','orange','black','pink','maroon']
    function handler(e){
        setState(e.target.id)
    }
    return(
        <div className=" bg-slate-50 py-3 px-4 ml-96 flex justify-around items-center rounded-lg btns" onClick={(e)=>handler(e)}>
            {
                colors.map(ele=>{
                   return <ButtonComponent color={ele}/>
                })

            }
        </div>
    )
}