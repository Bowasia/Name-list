import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState([])
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    ID: 1
  })

  // const [firstName, setFirst] = useState("")
  // const [lastName, setLast] = useState("")
  // const [ID, setID] = useState(1)

  // list prototype
  // list = [
  //   {
  //     firstName: "firstname",
  //     lastName: "lastname"
  //   },
  //   ...
  // ]
  
  const onSubmited = (e) =>  {
    e.preventDefault(); // prevent a browser reload/refresh
    setData({...formData, ID: formData.ID})
    setList([...list, {firstName: formData.firstName, lastName: formData.lastName, id: formData.ID}])
    console.log(`Before setData\nID = ${formData.ID} firstName = ${formData.firstName}\nlastName = ${formData.lastName}`);
    console.log(`Current List:\n${list}`)
    console.log(`formData = ${formData}`)
    setData({
      firstName: "",
      lastName: "",
      ID: formData.ID + 1
    })
    console.log(list)
  }


  // const newList = list.filter((item) => item.id !== id); <-- Example when remove with ID

  // const onDelete = (id) => {
  //   console.log(`Delete this id: ${id}`)
  //   const newList = list.filter((item) => item.id !== id) // What it find id and exclude ?
  //   setList(newList)  
  // } 

  // const onChangeFirst = (e) => (setFirst(e.target.value));
  // const onChangeLast = (e) => (setLast(e.target.value));

  //POC <input value={firstName}/> ... force the input's value to match the state variable

  // const renderList = () => {
  //   return (
  //     <tr>
  //       <td>FM222</td>
  //       <t22h>LN222</t22h>
  //     </tr>
  //   )
  // }

  const renderAll = () => {
    const onDelete = (id) => {
      console.log(`Delete this id: ${id}`)
      const newList = list.filter((item) => item.id !== id) // What it find id and exclude ?
      setList(newList)  
    } 
    return list.map(({id, firstName, lastName}) => {
      return (
        <tr key={id}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{id}</td>
          <td>
            <button onClick={() => onDelete(id)}>Delete</button>
          </td>
        </tr>
      )
    }) 
  }

  // const renderList = () => {
  //   return (
  //     <tr>
  //       <td>2 example</td>
  //       <td>Last example</td>
  //     </tr>
  //   )
  // }


  return (
    <>
    <form onSubmit={onSubmited}>
      <div>
        <label>Firstname
        <input value={formData.firstName} name="first" required type="text" onChange={(e) => setData({...formData, firstName: e.target.value})}/>
        </label>
      </div>
      <div>
        <label>Lastname</label>
        <input value={formData.lastName} name="last" required type="text" onChange={(e) => setData({...formData, lastName: e.target.value})}/>
      </div>
    <button type='submit'>Submit</button>
    </form>

{/* Name list */}

    <table>
      <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>ID</th>
      </tr>
      </thead>
      <tbody>
      {/* <tr>
        <td>fName example</td>
        <td>lName example</td>
        <td>ID example</td>
      </tr> */}
      {renderAll()}
      </tbody>

    </table>
    </>
  )
}

export default App
