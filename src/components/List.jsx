import Item from "./Item";

function List(){

    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='ferrari' lancamento={1985}/>
                <Item marca='fiat' lancamento={1964}/>
                <Item marca='renault'/>
            </ul>
        </>
    )

}

export default List;