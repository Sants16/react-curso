import React, { useState } from "react";

function Condicional(){

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()


    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type='email' placeholder="Ex: user@email.com" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button> 
                {userEmail && ( // RENDERIZAÇÃO CONDICIONAL -- se o userEmail for preenchido renderiza esse elemento html:
                    <section>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </section>
                )}
            </form>
            
        </div>
    )
}

export default Condicional;