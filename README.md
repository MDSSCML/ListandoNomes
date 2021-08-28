
# ListandoNomes

## Foi usado o método Set.
* Sintaxe

__new Set([iterable])__;



__1. Método has()__

* Sintaxe

mySet.has(valor);

_O método has() retorna um valor booleano indicando se um elemento com o valor especificado existe em um objecto Set ou não._

__2. Método add()__

* sintaxe 

mySet.add(value);

_O método add() acrescenta um novo elemento com o valor especificado no final de um objeto Set._

__3. Método clear()__ 

* sintaxe

mySet.clear();

_O método clear() remove todos os elementos de um objeto Set._

__4. Método delete()__

*sintaxe 

mySet.delete(value);

_O método delete() remove o elemento especificado de um objeto Set._

__5. Método entries()__

*sintaxe

mySet.entries()

_O método entries() retorna um novo objeto Iterador (Iterator) que contém um array de [valor, valor] para cada elemento de um objeto Set em ordem de inserção. Os objetos Set não possuem chaves (key) como objetos do tipo Map. Entretanto, para manter a API similar a objetos Map, cada entrada (entry) tem o mesmo valor para sua chave (key) e valor (value), então uma matriz array [valor, valor] é retornado._


__6. Método values()__

*sintaxe

mySet.values();

_O método values() retorna um novo objeto Iterator que contem os valores para cada elemento dentro do objeto Set por ordem de inserção._

_O método keys() é um alias desse método (por similaridade com os objetos Map); ele se comporta exatamente da mesma forma e retorna os valores dos elementos do Set._
