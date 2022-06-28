# language: pt

@calculadora
Funcionalidade: Calculadora

  Contexto: 
    Dado que eu tenha uma calculadora

  @soma
  Cenário: somar - retornando os números com o resultado da soma
    Quando eu digitar os números "80" e "40" para a operação de "soma"
    Então devo receber o resultado igual a "120"

  @subtração
  Cenário: subtrair - retornando os números com o resultado da subtração
    Quando eu digitar os números "80" e "40" para a operação de "subtração"
    Então devo receber o resultado igual a "40"
  
  @multiplicação
  Cenário: multiplicar - retornando os números com o resultado da multiplicação
    Quando eu digitar os números "80" e "40" para a operação de "multiplicação"
    Então devo receber o resultado igual a "3200"

  @divisão
  Cenário: dividir - retornando os números com o resultado da divisão
    Quando eu digitar os números "80" e "40" para a operação de "divisão"
    Então devo receber o resultado igual a "2"



