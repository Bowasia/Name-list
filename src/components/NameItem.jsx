export default function NameItem({ID, firstName, lastName, onDelete}) {
    const handleClick = () => {
        console.log(`This is handleClick`)
        onDelete(ID)
    }

    return (
        <tr key={ID}>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{ID}</td>
          <td>
            <button onClick={handleClick}>Delete</button>
          </td>
        </tr>
    )
}

