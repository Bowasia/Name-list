import { useState } from 'react'
import './App.css'
import FormSubmit from './components/FormSubmit'
import NameItem from './components/NameItem'
import NameList from './components/nameList'



function App() {

  const [list, setList] = useState([])

  const handleAddName = (data) => {
    console.log(data)
    setList([...list, data])
    console.log(`list: ${list}`,"this is list handleAddname")
  }

  const handleDelete = (idDel) => {
    const newList = list.filter((item) => item.ID !== idDel) 
    setList(newList)
    console.log(`idDel = ${idDel}`)
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

    <table>
      <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>ID</th>
      </tr>
      </thead>
      <tbody>

      {/* {renderAll()} */}

    <NameList list={list} handleDelete={handleDelete}/>
    {/* <NameItem firstName="dfdfdd" lastName="dfd" ID={3} onDelete={handleDelete}/> */}
      </tbody>

    </table>
    
    </>
  )
}

export default App
