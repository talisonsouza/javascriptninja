  (function(w,d){ 
    'use strict'

    var $input = d.querySelector('[data-js="resultValue"]');

    //buttons
    var $btn0 = d.querySelector('[data-number-js="0"]');
    var $btn1 = d.querySelector('[data-number-js="1"]');
    var $btn2 = d.querySelector('[data-number-js="2"]');
    var $btn3 = d.querySelector('[data-number-js="3"]');
    var $btn4 = d.querySelector('[data-number-js="4"]');
    var $btn5 = d.querySelector('[data-number-js="5"]');
    var $btn6 = d.querySelector('[data-number-js="6"]');
    var $btn7 = d.querySelector('[data-number-js="7"]');
    var $btn8 = d.querySelector('[data-number-js="8"]');
    var $btn9 = d.querySelector('[data-number-js="9"]');

    var $buttonsListCount = document.querySelectorAll('[data-number-js]').length;
	
	function callBack()
	{		
		alert(this.value);
	}

	for (var i = 0; i <= $buttonsListCount - 1; i++) 
	{

		var $btn = d.querySelector('[data-number-js="'+ i +'"]');	

		$btn.addEventListener('click', callBack);
	}
    

   /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;

- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;

- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);

- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;

- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  })(window,document);