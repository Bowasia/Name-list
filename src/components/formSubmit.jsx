import { useState } from "react";
export default function FormSubmit({ onSubmit }){
    const [formData, setData] = useState({
        firstName: "",
        lastName: "",
        ID: 1
      })

    const handleSubmit = (e) =>  {
    e.preventDefault(); // prevent a browser reload/refresh
    setData({...formData, ID: formData.ID})
    onSubmit(formData) // send data back
    console.log(`formData = ${formData}`)
    console.log(`formData.firstName = ${formData.firstName}`)
    setData({
        firstName: "",
        lastName: "",
        ID: formData.ID + 1
    })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
      
        <label>Firstname
        <input value={formData.firstName} name="first" required type="text" onChange={(e) => setData({...formData, firstName: e.target.value})}/>
        </label>
      
      
        <label>Lastname</label>
        <input value={formData.lastName} name="last" required type="text" onChange={(e) => setData({...formData, lastName: e.target.value})}/>
      
    <button type='submit'>Submit</button>
    </form>
        
        </>


    )
}