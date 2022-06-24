import './App.css';

function App() {
  const name = 'João';
  const n1 = 3;
  const n2 = 2;
  const url = 'https://via.placeholder.com/150';

  function multi(n,m){
    return n*m;
  }

  return ( //tudo após o return ate o seu final é um JSX, JSX é o HTML do React entretando precisamos respeitar mais as regras da linguagem HTML no JSX do que no próprio HTML. Podemos também inserir atributos e valores para os atributos do JSX assim como no HTML porém com algumas diferentes, eles são escritos em camelCase EX: className.
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá eu sou o {name}</p> {/* interpolando o JSX o colocando entre chaves */}
      <p>A soma de {n1} + {n2} resulta em: {n1+n2}</p> {/* tudo que tiver entre {} esta executando funcionalidades do javascript */}
      <p>Multiplicação: {multi(5,5)}</p> {/* interpolando functions no jsx */}
      <img src={url} alt="vasco da gama"/> {/* inserindo imagem no jsx utilizando a tag img e uma variavel no atributo src*/}
    </div>
  );
}

export default App;