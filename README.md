# Teste de Unidade e Teste de Integração

> Automação de testes para backend NodeJS utilizando o framework Jest

## Executar aplicação

```sh
npm install
npm test
```

## Introdução

Mediante o crescimento do uso da computação no dia a dia das pessoas tornou-se cada vez mais difícil criar softwares de qualidade utilizando testes manuais. Os softwares ficam cada dia maiores e mais robustos, aumentando as chances de erros passarem despercebidos para a versão de produção.

Testes automatizados são scripts que utilizam as entradas e saídas de um software para simular um usuário ou um sistema. Desta forma, podemos ter uma grande área de cobertura dos testes que pode ser automatizada sem implicar em grandes custos.

Existem vários tipos de testes, mas para esse artigo utilizaremos os termos teste unitário e teste de integração. Neste contexto, são considerados testes unitários somente os testes que verificam funções puras, isto é, independente do número de vezes que rodarem uma mesma entrada, sempre irão retornar o mesmo resultado (exemplo: uma função que multiplica dois números, ela nunca pode retornar um número que não seja 6 ao receber 3 e 2). Por outro lado, são considerados testes de integração aqueles testes de software em que módulos são combinados e testados em grupo. Por exemplo, quando algum teste faz chamadas na API de um serviço em nuvem, fazendo uso das rotas do que pertencem a API deste backend, supõe-se que essas rotas sejam funções mais complexas, que podem envolver vários módulos para realizar a tarefa demandada.
