function Button({event, text}){ //desestruturando a props
    return <button onClick={event}>{text}</button> //passando a function que será ativada quando o botão for clicado por meio de props, o elemento filho pode ser acesso aos metodos(funções) do elemento pai
    //dessa forma podemos reaproveitar ainda mais o componente pois assim não o limitamos colocando funções especificas para interagir com um elemento pai especifico
}

export default Button