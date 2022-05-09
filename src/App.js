import { ItemList } from './components/ItemList';
import { Title } from './components/Title';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

function App() {
  return (
    <div className="App">
      <header>
        <Title title="cálculo de fatorial" />
      </header>

      <section>
        <dl>
          <ItemList
            title="O que é fatorial?"
            subtitle="O fatorial (!) de um número n, representado por n!, é a
            multiplicação de n por seus antecessores maiores ou iguais a 1. Essa operação é muito comum em análise combinatória. Definimos como n! (n fatorial) a multiplicação de n por todos os seus antecessores até chegar em 1. n! = n · (n – 1)· (n – 2) · … · 3 · 2 · 1."
            linkHref="https://brasilescola.uol.com.br/matematica/fatorial.htm"
          />

          <ItemList
            title="O que é recursão em ciência da computação?"
            subtitle="Em ciência da computação, a recursividade é a definição de uma
            sub-rotina (função ou método) que pode invocar a si mesma."
            linkHref="https://pt.wikipedia.org/wiki/Recursividade_(ci%C3%AAncia_da_computa%C3%A7%C3%A3o)"
          />
          <ItemList
            title="O que é o paradigma imperativo?"
            subtitle="Também é chamado de paradigma procedural. Nesse tipo de construção,
            as instruções devem ser passadas ao computador na sequência em que
            devem ser executadas."
            linkHref="https://blog.betrybe.com/tecnologia/paradigmas-de-programacao/"
          />
        </dl>
      </section>
    </div>
  );
}

export default App;
