/*
Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random
da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato
*/
$(document).ready(
  function(){
    for(var i = 0; i < 36; i++){
      var template = $('.template').find('.box').clone();
      $('.wrapper').append(template);
    }

    $(".box").click(function(){
      var box = this;
      $.ajax(
        {
          url: 'https://flynn.boolean.careers/exercises/api/random/int',
          method: 'GET',
          success: function(data){
            var numeroBox = parseInt(data.response);
            if(numeroBox <= 5){
              $(box).text(numeroBox);
              $(box).addClass('yellow');
              $(box).removeClass('green');
            } else {
              $(box).text(numeroBox);
              $(box).addClass('green');
              $(box).removeClass('yellow');
            }

          },
          error: function(){

          }
        }
      );
    });



  }
);
