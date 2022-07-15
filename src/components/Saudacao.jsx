function Saudacao({nome}){

const gerarSaudacao = (algumNome) => {
    return `Olá, ${algumNome}, como vai?`;
}

    return(
        <>
            { nome ? <p>{gerarSaudacao(nome)}</p> : <p>Ainda não há um nome</p>} {/* RENDERIZAÇÃO CONDICIONAL, so ira renderizar o JSX  dando a saudação quando tiver um nome existente no state senão houver o usuario é notificado */}
        </>
    )
}

export default Saudacao;