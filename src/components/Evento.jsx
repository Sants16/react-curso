import Button from "./evento/Button";

function Evento({ numero }){
    function meuEvento(){
        console.log(`O evento foi ativado ${numero}`)
    }

    function outroEvento(){
        console.log('Ativando outro evento')
    }

    return(
        <>
        <p>Clique para disparar um evento:</p>
        <Button event={meuEvento} text='Primeiro Evento'/>
        <Button event={outroEvento} text='Segundo Evento'/>
        {/*<button onClick={meuEvento}>Ativar!</button>*/}
        </>
    )
}

export default Evento;