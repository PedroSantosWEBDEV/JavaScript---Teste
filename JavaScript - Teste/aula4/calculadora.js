function calculadora() {
    const operacao = prompt('Escolha uma operacao:\n 1 - Soma (+)\n 2 - subtracao (-)\n 3 - multiplicaçao (*)\n 4 - Divisao (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciaca (**)');

    if (!operacao || operacao >= 7) {
        alert('Erro - Operacao invalida!');
        calculadora();
    }
    else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insirar o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parametros invalidos!');
            calculadora();
        } else {

            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao()
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`)
                novaOperacao()
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Ate Mais!!!");
                } else {
                    alert('Digite uma opcao valida!!!');
                    novaOperacao();
                }
            }
        }


        // if (operacao == 1) {
        //     soma();
        // } else if (operacao == 2) {
        //     subtracao();
        // } else if (operacao == 3) {
        //     multiplicacao();
        // } else if (operacao == 4) {
        //     divisaoReal();
        // } else if (operacao == 5) {
        //     divisaoInteira();
        // } else if (operacao == 6) {
        //     potenciacao();
        // }

        switch (key) {
            case 1:
                soma()
                break;
        
            default:
                break;
        }

    }
}
calculadora();