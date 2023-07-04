import NameItem from "./NameItem"
export default function NameList(list) {
    if(list == undefined){
        return ("NON")
    }
    else{
        return ( list.map(({firstName: FN, lastName: LN, ID}) => {
                <NameItem firstName={FN} lastName={LN} ID={ID} onDelete={handleDelete(ID)}/>
            }))
    }
}


// TO BE CLARIFIED