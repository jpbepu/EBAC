const alunos = [
    {nome:'a' , nota:7 },
    {nome:'b' , nota:1 },
    {nome:'c' , nota:5 },
    {nome:'d' , nota:10 },
    {nome:'e' , nota:8 },
]


const aprovados = alunos.filter(item => item.nota >= 6);
console.log(aprovados);
