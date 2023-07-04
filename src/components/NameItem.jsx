export default function NameItem({ID, firstName, lastName, onDelete}) {
    return (
        <tr key={ID}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{ID}</td>
          <td>
            <button onClick={onDelete(ID)}>Delete</button>
          </td>
        </tr>
    )
}

// receive data as an object then 
// data.ID
// data.firstName
// data.lastName