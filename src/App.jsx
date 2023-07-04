import { useState } from 'react'
import './App.css'
import FormSubmit from './components/FormSubmit'
import NameList from './components/nameList'

function App() {

  const [list, setList] = useState([])

  const handleAddName = (data) => {
    console.log(data)
    setList([...list, data])
    console.log(`list: ${list}`)
  }

  const handleDelete = (idDel) => {
    const newList = list.filter((item) => item.ID !== id) 
    setList(newList)
  }

  // const renderAll = () => {
  //   const onDelete = (id) => {
  //     console.log(`Delete this id: ${id}`)
  //     const newList = list.filter((item) => item.ID !== id) 
  //     setList(newList)  
  //   } 
  //   return list.map(({ID, firstName, lastName}) => {
  //     return (
  //       <tr key={ID}>
  //         <td>{firstName}</td>
  //         <td>{lastName}</td>
  //         <td>{ID}</td>
  //         <td>
  //           <button onClick={() => onDelete(ID)}>Delete</button>
  //         </td>
  //       </tr>
        
  //     )
  //   }) 
  // }

  return (
    <>
    <FormSubmit onSubmit={handleAddName}/>

{/* Name list */}

    {/* <table>
      <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>ID</th>
      </tr>
      </thead>
      <tbody> */}

      {/* <tr>
        <td>fName example</td>
        <td>lName example</td>
        <td>ID example</td>
      </tr> */}
      {/* {renderAll()} */}
      {/* </tbody>

    </table> */}

    <NameList list={list}/>

    
    </>
  )
}

export default App
