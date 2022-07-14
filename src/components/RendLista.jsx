import React from 'react';
function RendLista({ itens }){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? //RENDERIZAÇÃO TERNARIA condição ? executa se for true : executa se for false
                itens.map((item, index) => ( //mapeia todos os itens do array que sera recebido pelo parametro itens e os exibe numa tag p
                    <p key={index}>  {item}</p>
                )) : (
                    <p>Não há itens na lista!</p>
                )
            }
        </>
    );
}

export default RendLista;