import { useState } from 'react'

function Form(){

    function cadastrarUsuario(event){
        event.preventDefault()
        console.log('Usuário cadastrado')
        console.log(`O nome digitado foi '${name}' e a senha foi '${password}'`) /*foi digitado so para fazer o teste do vento onChange*/
    }

    const [name, setName] = useState('') //o useState() pré seta um valor para o campo
    const [password, setPassword] = useState('')

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}> 
                <div>
                    <label htmlFor="name">Nome:</label>
                        <input type="text" placeholder="Digite o seu nome" id="name" name="name" /*value={name} retire o comentário para ver o valor do campo pre setado presente no input*/ onChange={(e) => setName(e.target.value)} /* faz com que cada caracter digitado no input modifique o valor do useState que foi pré-definico com vazio, por isso chamammos o onChange pois esse funciona como listener dessa alteração do valor *//>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" placeholder="Digite uma senha" id="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form;