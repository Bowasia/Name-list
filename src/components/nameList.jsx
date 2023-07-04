import NameItem from "./NameItem"
export default function NameList(list) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
            {list? list.map(({firstName: FN, lastName: LN, ID}) => {
            <NameItem firstName={FN} lastName={LN} ID={ID} onDelete={handleDelete(ID)}/>
        }): 0}
                </tbody>
            </table>
        </div>
    
)}