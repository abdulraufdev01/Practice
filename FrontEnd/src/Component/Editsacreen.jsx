import React from 'react'
import { useState } from 'react'

export default function Editsacreen() {
const[name ,setname]=useState('')
const[model,setmodel]=useState('')

function Savechanages() {
let data={name:name,model:model}
    
}

  return (
<>Edit Window Page

    <div>
      <input type='text'  placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)}/>
      <input type='text'  placeholder='enter model' value={model} onChange={(e)=>setmodel(e.target.value)}/>
      <button onClick={Savechanages} >Sava </button>
    </div>
    </>
  )
}
