let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)

qualquer = 3.14
console.log (qualquer)
console.log(typeof qualquer)

const escola = "cod3r"
console.log("valor da quarta letra", escola.charAt(4))
console.log(escola.charAt(5))


console.log(escola.charCodeAt(3))//retorna valor da tabela UNICODE
console.log(escola.indexOf(3))// indice asssociado a variaval

console.log(escola.substring(1))//inclui indice 1 até o final 
console.log(escola.substring(0,3))//indice 0 a 2
console.log('escola ' .concat(escola).concat("!"))//Escola é um valor  do tipo literal, ou seja posso passar direto sem var

console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))// regex para substituir todos os digitos numericos dentro do texto por e 

console.log('Ana,Maria,Pedro'.split(','))//Conversão para array. Pode ser usado regex /,/

