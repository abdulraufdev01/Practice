const API_URL = import.meta.env.VITE_API_URL;ios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function MongoP2() {
    let [name, setname] = useState('')
    let [model, setmodel] = useState('')

    async function insertCar() {
        let data = {name : name, model: model}
        let serverRes = await axios.get(`${API_URL}/insertcar`, {params: data})
        console.log(serverRes.data);
        if (serverRes.data.status == 400) {
            alert(serverRes.data.message)
        }
        
    }
   async function find() {
    
    let serverRes =await axios.get(`${API_URL}/Carall`)
    console.log("data a gya hai ", serverRes.data);
    
  }
    return (
    <div>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="text" value={model} onChange={(e)=>setmodel(e.target.value)}/>
      <h1 onClick={insertCar}>mongodb practice 2</h1>
      <button onClick={find}>Find</button>
    </div>
  )
}
