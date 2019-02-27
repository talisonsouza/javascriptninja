/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var arr = ["rodrigo", 7, true, '0', 77];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function retornaArr(args){
	return args;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
retornaArr([0,1,2,3])[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function retornarIndice(arr, indice){
	return arr[indice];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

var novoArr = ["teste", 7, false, {a:1, b:2}, [0,10,2]];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
retornarIndice(novoArr, 0)
retornarIndice(novoArr, 1)
retornarIndice(novoArr, 2)
retornarIndice(novoArr, 3)
retornarIndice(novoArr, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book(nomeLivro)
{
	var objLivros = 
	{
		harryPotter:{
			quantidadePaginas: 200,
			autor: "J. K. Rowling",
			editora: "Rocco"
		},
		origem:{
			quantidadePaginas: 300,
			autor: "Dan Brown",
			editora: "Editora x"	
		},
		oSennhorDosAneis :{
			quantidadePaginas: 1000,
			autor: "Tolkien",
			editora: "Editora y"	
		}
	};

	if(!nomeLivro)
		return objLivros;

	return objLivros[nomeLivro];

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var nomeLivro = "harryPotter";
"O livro "+ nomeLivro +" tem "+ book(nomeLivro).quantidadePaginas  +" páginas!"


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

"O autor do livro "+ nomeLivro +" é "+  book(nomeLivro).autor +"."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

"O livro " + nomeLivro + " foi publicado pela editora "+ book(nomeLivro).editora +"."