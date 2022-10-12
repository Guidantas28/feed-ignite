# Anotações aula

estado = variaveis que eu quero que o componente monitore

Programação imperativa -> O que deve ser feito (passo-a-passo) ex: receita de bolo
Programação declarativa (utilizada dentro do react) -> quais as condições para ter o resultado final

key no react
    por que unica?

    3 momentos em que um componente é renderizado novamente no react
    
    1. Quando o estado altera;
    2. Quando a propriedade altera
    3. Quando um componente pai renderiza novamente;
 
    -------

    precisa ser única pois o react precisa saber qual já estava em tela e qual não

    Por que não pode usar o indice do array?
      Pois ele é único


# CLousures no React 

```js

function Comment(props) {
  const [likes, setLikes] = useState(0)

  function addLike(){
    setLikes(likes+1)
    setLikes(likes+1)
  }
}

Comment(props, 0)
Comment(props, 1)

```

O react cria um outro contexto para atualizar esse valor, trazendo o valor antigo

Sempre que você for fazer uma alteração e ela utiliza o próprio padrão dela, sempre utiliza state


