import './App.css';
import HelloWorld from './components/HelloWorld';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'João';
  const n1 = 3;
  const n2 = 2;
  const url = 'https://via.placeholder.com/150';
  const fotoPessoa = 'https://via.placeholder.com/100';

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
      <img src={url} alt="quadrado cinza"/> {/* inserindo imagem no jsx utilizando a tag img e uma variavel no atributo src*/}
      <HelloWorld/>
      <SayMyName nome="Juliana"/> {/* inserindo a pros via atributo */}
      <SayMyName nome="Erlando"/> {/* reaproveitando o componente de forma dinâmica */}
      <SayMyName nome={name}/> {/* passando via variavel o valor da propriedade nome para o componente */}
      <Pessoa nome="Raissa" idade={17} profissao="Estudante" foto={fotoPessoa}
      />
      <h1>Testando CSS</h1>
      <p>\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\</p>
      <List/>
    </div>
  );
}

export default App;