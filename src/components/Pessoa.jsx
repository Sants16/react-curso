function Pessoa({nome, idade, profissao, foto}){ //dessa forma desestruturamos a props evitando a assim a repetição da sintaxe {props.xxxx}
    let ano = new Date().getFullYear();

    return(
        <>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Você nasceu em {ano - idade}</p> {/* faz calculo a partir da props */}
        </>
    )
}

export default Pessoa;