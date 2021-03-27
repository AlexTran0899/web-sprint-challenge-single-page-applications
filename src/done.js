import React from"react"
import { order } from './Pizza';

export default function help(order){
    console.log(order)
    return(
        <div>
            <h1> your pizza is on the way</h1>
            <div> 
                <p>Please scan the qr code for 100 percent off your next order</p>
                <img src='https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb' /> 
            </div>
        </div>
       
    )
}