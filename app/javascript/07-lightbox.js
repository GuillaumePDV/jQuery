// Etape 1
// Quanb on clique sur une img de la galerie, on veut ouvrir la lightbox
// Etape 2
// Quand on clique sur .lightbox .icon-close on ferme la lightbox
// Etape 3
// Modifier click sur img de la galerie pour récupérer la valeur de son attr src
// et utiliser cette valeur pour l'attr src der .lightbox img
// Etape 4
// Pour passer d'une image à l'autre avec les flèches droite et gauche on doit 
// récupérer l'index de l'image cliquée
// Etape 5
// Maintenant qu'on a récupéré l'indsex de l'img cliquée, quand on clique sur btn next on doit récupérer dans une variable
// l'attribut src de l'img index+1 (si on clique sur next) et index-1 (si on clique sur previous)
// Etape 6
// Quand on clique sur prev ou next; on veut passer à l'img suivante ou précédente mais on ne connais pas le nombre d'img dans la galerie.
// On doit dabord récupérer dans une variable le nb total d'img, ainsi on pourra revenir à l'index 0 quand on aura atteint la dernièrer img
// et revenir à la dernière img quand on aura atteint l'index

$(function () {

    let index;
    let newSrc;
    let nbImg;

    nbImg = $('.galerie img').length;
    console.log(nbImg);

    $('.galerie img').click(function () {
        $('.lightbox').fadeIn(500).css({
            'display': 'flex'
        });
        newSrc = $(this).attr('src');
        $('.lightbox img').attr('src', newSrc);

        index = $('.galerie img').index($(this));
        console.log(index);

        // newSrc = $('.galerie img').eq(index + 1).attr('src');
        // console.log(newSrc);

    });

    $('.icon-navigate_next').click(function () {
        // if (index + 1 < nbImg) {
        //     index++;
        // } else {
        //     index = 0;
        // }
        index = (index + 1) % nbImg;
        newSrc = $('.galerie img').eq(index).attr('src');
        console.log(newSrc);
        $('.lightbox img').attr('src', newSrc);
    })

    $('.icon-navigate_before').click(function () {
        console.log(index);
        index = ((index - 1) + nbImg) % nbImg;
        newSrc = $('.galerie img').eq(index).attr('src');
        $('.lightbox img').attr('src', newSrc);
    })

    $('.lightbox .icon-close').click(function () {
        $('.lightbox').fadeOut(500);
    });


}); // ne pas supprimer svp