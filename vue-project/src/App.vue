<script setup>
import { reactive } from 'vue';


const state = reactive({
    operador: 'adicao',
    valor1: 0,
    valor2: 0,
    resultado:0

})

function handleValor1(e){
    state.valor1 = e.target.value;
    calcular()
}

function handleValor2(e){
    state.valor2 = e.target.value;
    calcular()
}

function mudarOperador(e){
    state.operador = e.target.value;
    calcular()
}


function calcular(){
    const { operador, valor1, valor2 } = state;

    switch (operador) {
    case 'adicao':
        state.resultado = parseInt(valor1) + parseInt(valor2);
        console.log(state.resultado);
        break;

    case 'subtracao':
        state.resultado = parseInt(valor1) - parseInt(valor2);
        console.log('sub');
        break;

    case 'multiplicacao':
        state.resultado = parseInt(valor1) * parseInt(valor2);
        console.log('mult');
        break;

    case 'divisao':
        state.resultado = parseInt(valor1) / parseInt(valor2);
        console.log('div');
        break;

    default:
        console.log('nao foi');
        break;
    }

}

</script>




<template>

<div class="container">


    <div class="inputs">
        <input @keyup="handleValor1" type="number">
        <select @change="mudarOperador" name="" id="">
            <option value="adicao">+</option>
            <option value="subtracao">-</option>
            <option value="multiplicacao">x</option>
            <option value="divisao">/</option>
        </select>
        <input @keyup="handleValor2" type="number">
    </div>




    <h1 class="resultado"> {{ state.resultado }} </h1>

    <div class="debug">
        {{ typeof(state.valor1) }}
        {{ typeof(state.valor2) }}
    </div>



</div>

</template>

<style scoped>
    .container{
        width: 800px;
        height: 600px;
        background-color: aliceblue;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>


//duvidas:  pq o tipo de dado da variavel no valor do input muda de number para string assim que coloco um numero?
            quando tento desestruturar a chave "resultado" do objeto de estados, nao consigo atribuir um valor novo dentro do switch. pq?????