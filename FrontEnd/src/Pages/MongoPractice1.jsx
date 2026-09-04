
import axios from 'axios'
import { useState } from "react";

export default function MongoPractice1() {
  let [name , setName] = useState('')
  let [designation , setDesig] = useState('')

  async function InsertData() {
    let data = {name : name, designation: designation}
    let serverRes = await axios.post("http://localhost:3000/insert", data)
    console.log(serverRes.data);
    
  }
  
  return (
    <div>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
      <input type="text" value={designation} onChange={(e)=> setDesig(e.target.value)}/>
      <h1 onClick={InsertData}>Hellow</h1>
    </div>
  )
}
