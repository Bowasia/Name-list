import { useState } from 'react'
import './App.css'
import FormSubmit from './components/FormSubmit'
import NameList from './components/nameList'
import SearchBar from './components/SearchBar'
import { DSBox, DSTextStyle } from 'ttb-design-system-webview'



function App() {

  const [list, setList] = useState([])
  const [filterList, setFilter] = useState([])

  const handleAddName = (data) => {
    console.log(data)
    setList([...list, data])
    setFilter([...filterList, data])
    console.log(`list: ${list}`, "this is list handleAddname")
  }

  const handleDelete = (idDel) => {
    const newList = list.filter((item) => item.ID !== idDel)
    setList(newList)
    console.log(`idDel = ${idDel}`)
    setFilter(newList)
    setList(newList)
  }

  const handleSearch = (term) => {
    const filterList = list.filter((item) => {
      // console.log(`item in handleSearch ${item.firstName}`)
      return (item.firstName.toLowerCase().includes(term.toLowerCase()) || item.lastName.toLowerCase().includes(term.toLowerCase()))
    })
    console.log(`App.jsx term value = ${term}`)
    console.log(filterList)
    setFilter(filterList)
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
      <DSBox
        gap={32}
        px={8}
        py={4}
      >
        <DSTextStyle variant="specialH1">
          Registeration Form
        </DSTextStyle>

        <FormSubmit onSubmit={handleAddName} />
        <SearchBar onChange={handleSearch} />
        </DSBox>
        <NameList list={filterList} handleDelete={handleDelete} />
        {/* <NameItem firstName="dfdfdd" lastName="dfd" ID={3} onDelete={handleDelete}/> */}
        {/* </tbody>

    </table> */}

    </>
  )
}

export default App
