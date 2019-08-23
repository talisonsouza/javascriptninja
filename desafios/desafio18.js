(function(){
	'use strict'

/*
flags
	g - global
	i - ignore case
	m - multline -- geralmente usado com ^ inicio de linha
	EX:	/^</gim
		<a>aaa</a>
		<a>aaa</a>
		<a>aaa</a>


[] - lista dos caracteres que estiverem ai dentro
() - grupo ou captura
\w - alfanumericos
\W - negação alfanumericos--W MAIUSCULO
\d - digitos numeros de 0-9
\D - qualquer caracter que nao seja numero - negacao
\t - tabulaçao
\s - espaco em branco
\S - qualquer caracter qie nao seja espaco em branco 
\n - quebra de linha
. - quanlquer caracter exto querbra de linha
^ - dentro de uma lista [] negação ex. [^abc] == tudo, exeto a b c
^ - fora de uma lista verifica caractere no começo da string  ex. ^<  
$ - match com fim de string
{n, m} - repetidores. ex: \d{2,5} = faz o metch procurando sequencia de 2 digitos ou no maximo 5
? - opcional ex: \s\d? um caracter seguido de um número opcional --- ultilizado com caracter
? - também pra captura nao gulosa - ultilizado após um repetidor 
?: - usa agrupamento sem captura, apenas match.  ultilizado no inicio do grupo ex  "julho e junho"  /ju(?:n|l)ho/
\1, \2 - referencia o match na propria regex
+ - representa uma ou mais ocorrencia do item anterior ex: /s+/ match  ssss
* - zero ou mais ocorrencia do item anterior
*/


/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );

function cleanCPF(cpf)
{
	return cpf.replace(/\D/g, '');
}

console.log(cleanCPF("049-214 3421-1"))
console.log(cleanCPF("210.458.522-05"))
console.log(cleanCPF("735 500 794 - 22"))
console.log(cleanCPF("101.123-131x32"))

/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );
console.log( cleanCPF("049-214 3421-1").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4" ));
console.log(cleanCPF("210.458.522-05").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4" ));
console.log(cleanCPF("735 500 794 - 22").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4" ));
console.log(cleanCPF("101.123-131x32").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4" ));


/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
var regex = /ju[nl]ho/g;
var frase = "Os meses de janeiro, junho e julho começam com a letra j.";
console.log(frase.match(regex));


/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
var r = /<\w+>/g;
var marcacao = "<div><section><blockquote>Texto <img /></blockquote></section></div>";
console.log(marcacao.match(r));

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
var r = /<\w+><\/\w+>/g;
var marcacao = "<div><ul><li></li><li></li><li><span></span></li></ul></div>";
console.log(marcacao.match(r));

/*
Vamos complicar um pouco agora :D

Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.

O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>

Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );

var regex = /<(\w+)>([^<]+)<\/\w+>/g;
var marcacao = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

console.log( marcacao.replace(regex, "<$1>O texto dentro da tag '$1' é '$2'</$1> \n"));

/*console.log( marcacao.replace(regex,
	 function(regex, tag, texto){

	 		return 'O texto dentro da tag ' + tag + ' é ' + texto + '\n';
	}) 
)*/


})();