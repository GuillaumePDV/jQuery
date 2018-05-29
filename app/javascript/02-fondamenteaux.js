$(function () {

    // cibler un element du DOM et invoquer une methode sur cet element
    // $('selecteur css').methodeJQuery(1 ou plusieurs args voir doc);

    // ecouteur d'envent sur un objet du DOM 
    // $('selecteur css').evenement(function(){
    //     // code a executer quand on declenche l'evenement sur cet objet
    // });

    $('p').css({
        'background': 'red',
        'color': 'blue',
        'fontStyle': 'bold'
    });

    $('button:nth-of-type(1)').click(function () {
        $('p').hide(3000);
    });

    $('button:nth-of-type(2)').click(function () {
        $('p').show(3000);
    });

    //ici on utilise une reference dans la boucle, ainsi le navigateur n'a pas besoin de parcourir le DOM 5000 x a la recherche d'un id
    // const elem = $('#btn').methode();
    // for (let i = 0; i < 5000 ; i++){
    //     // elem.methode();
    // }

    $('button:first-child').click(function () {
        alert($(this).text());
        // text() get text inside targeted element 
        // $(this) fait reference a ce boutton, celui sur lequel on clique
    });

    $('#btn').dblclick(function () {
        alert('Wouhouuuuuu, tu as double cliqué !');
    });

    $('button:nth-of-type(3)').mouseenter(function () {
        alert('Hummm tu es bien rentre');
    });

    $('button:nth-of-type(4)').mouseleave(function () {
        alert('bouuuuuuuu, tu m\'as quitté');
    });

    $('button:nth-of-type(5)').hover(function () {
        console.log('ça se déclenche quand tu rentres sur le bouton');
    }, function () {
        console.log('ça se déclenche quand tu quittes le bouton');
    });


}); // pas touche