(function(w,d){ 
    
    'use strict'

    var $input = d.querySelector('[data-js="resultValue"]');
    var $buttonsNumbers = document.querySelectorAll('[data-number-js]');
    var $buttonsOperations = document.querySelectorAll('[data-operation-js]');  
    var $buttonCE =   document.querySelector('[data-js="btn-clean"]');  
    var $buttonExecOperation =   document.querySelector('[data-js="btn-result"]'); 
    var operations = {'+':'+','-':'-', x:'x','÷':'÷'};

    function cleanCalculator()
    {
        $input.value = "0";
    }
	
  	function clickNumberCallBack()
  	{		
          $input.value = $input.value.concat(this.value);		
  	}

    function clickOperationCallback()
    {        
        var value = $input.value;
        var clickValueOperation = this.value;
        var lastCharacter = value.charAt(value.length - 1);

        !operations[lastCharacter] ? $input.value += clickValueOperation : $input.value = $input.value.replace(/.$/, clickValueOperation);     
           
    }

    function calc()
    {
       $input.value.replace("x", "*");
    }

  	for (var i = 0; i <= $buttonsNumbers.length - 1; i++) 
  	{
    		var $btn = d.querySelector('[data-number-js="'+ i +'"]');	
    		$btn.addEventListener('click', clickNumberCallBack, false);
  	}    

    $buttonsOperations.forEach(function($btn, index, arr){

        $btn.addEventListener('click', clickOperationCallback, false);
    });

    $buttonCE.addEventListener('click', cleanCalculator, false);
    $buttonExecOperation.addEventListener('click', calc, false);

    

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