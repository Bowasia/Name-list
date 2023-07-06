import NameItem from "./NameItem"
export default function NameList({ list, handleDelete }) {
  console.log(list)
  console.log(typeof list)
  const renderName = list.map((data) => {
    return (
      <NameItem firstName={data.firstName} lastName={data.lastName} ID={data.ID} onDelete={handleDelete} key={data.ID} />
    )
  })

  return (
    <>
      {/* <table>
        
      <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>ID</th>
      </tr>
      </thead>
      <tbody> */}
      {renderName}
      {/* </tbody>
      </table> */}
    </>
  )
}