import NameItem from "./NameItem"
export default function NameList({list, handleDelete}) {
    console.log(list)
    console.log(typeof list)
    const renderName = list.map((data) => {
        return (
            <NameItem firstName={data.firstName} lastName={data.lastName} ID={data.ID} onDelete={handleDelete} key={data.ID}/>
    )})

    return (
        <>
            {renderName}
        </>
    )
}