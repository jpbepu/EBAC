$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('input').val();
        const novoItem = $(`<li>${novaTarefa}</li>`);
        $('ul').append(novoItem);
    })

    $('ul').on('click', function(e){

        e.target.classList.toggle("completo");

    })

})

