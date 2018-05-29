$(function () {

    $('button:nth-child(1)').click(function () {
        $('ul').before('<p>Vive la Bretagne et les bretons !</p>');
    });

    $('button:nth-child(2)').click(function () {
        $('ul').after('<p>Vive la Bretagne et les bretonnes !</p>');
    });

    $('button:nth-child(3)').click(function () {
        $('ul').append('<li>item encore</li>');
    });

    $('button:nth-child(4)').click(function () {
        $('ul').prepend('<li>item encore plus</li>');
    });

    // Exercice 01
    // Pour le btn 5, quand on clique dessus, on veut ajouter un li avec item 1
    // Pour le btn 6, quand on clique dessus, on veut ajouter un li avec item 5
    $('button:nth-child(5)').click(function () {
        $('ul').prepend('<li>item 1</li>');
    });

    $('button:nth-child(6)').click(function () {
        $('ul').append('<li>item 5</li>');
    });

    // Exercice 02
    // Amélioration : quand on ajout un item au début de la liste, si on tente
    // d'aller en dessous de item 1, une alert affiche un message d'erreur.
    // Quand on ajoute un item en fin de liste, on demarre à 5 et on incrémente.
    // Si on tente d'aller au delà de 10, un message d'erreur s'affiche via une alert
    
    let I = 1;
    let IMin = 1;
    let i = I;
    $('button:nth-child(7)').click(function () {
        // une variable qui commence à 1
        // tester si variable === 1
        // ajouter un li avec item + mavariable
        // on décrémente mavariable
        // else
        // alert(message d'erreur)
        if (i === IMin) {
            $('ul').prepend(`<li>item ${i}</li>`);
            i--;
        } else {
            alert(`Warning: MIN = ${IMin}`);
        }
    });
    
    let J = 5;
    let JMax = 10;
    let j = J;
    $('button:nth-child(8)').click(function () {
        if (j <= JMax) {
            $('ul').append(`<li>item ${j}</li>`);
            j++;
        } else {
            alert(`Warning: MAX = ${JMax}`);
        }
    });
    
    // Exercice 03
    $('button:nth-child(9)').click(function () {
        // récupérer le dernier caractère dans li:first-child
        // caster ce dernier en numbr
        // si ce number est > 0
        // on ajoute un li devant avec item + mavar
        // else 
        // message d'erreur
        let n = $('ul li:first-child').text().substr($('ul li:first-child').text().length - 1);
        n = parseInt(n);
        if (n > 1) {
            $('ul').prepend(`<li>item ${n-1}</li>`);
        } else {
            alert(`Warning: MIN = 0`);
        }
    });
    
    $('button:nth-child(10)').click(function () {
        let n = $('ul li:last-child').text().substr($('ul li:last-child').text().length - 2);
        n = parseInt(n);
        if (n < 10) {
            $('ul').append(`<li>item ${n+1}</li>`);
        } else {
            alert(`Warning: MAX = 10`);
        }
    });




}); // ne pas supprimer svp