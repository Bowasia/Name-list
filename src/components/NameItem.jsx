import { DSListAction, DSClickableIcon } from "ttb-design-system-webview"

export default function NameItem({ ID, firstName, lastName, onDelete }) {
  const handleClick = () => {

    console.log(`This is handleClick`)
    onDelete(ID)
  }

  return (
    <DSListAction
      avatar
      hover={false}
      iconRight={<DSClickableIcon icon="close" onClick={handleClick}/>}
      text={"ID: " + ID + " Name: " + firstName + " " + lastName}
    />
    // <tr key={ID}>
    //   <td>{firstName}</td>
    //   <td>{lastName}</td>
    //   <td>{ID}</td>
    //   <td>
    //     <button onClick={handleClick}>Delete</button>
    //   </td>
    // </tr>
  )
}

