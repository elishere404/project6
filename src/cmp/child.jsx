import React from 'react'
import { useEffect } from 'react'

export default function Child(){

    useEffect(()=>{
        console.log('zis is child component')
    },[]
)
    

    

    return(
        <div style={{width:"300px", height:"300px", border:"2px solid black"}}>
            child
        </div>
    )
}