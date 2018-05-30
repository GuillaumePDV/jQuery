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

// Etape 7
// 7.1 récup index li cliqué .index()
// 7.2 récup attr src de l'img qui a le même index eq()
// 7.3 modifier l'attr src de .lightbox img
// 7.4 Remove class sur toutes les puces
// 7.5 AddClass sur this Puce

$(function () {

    let index;
    let newSrc;
    let legend;
    let nbImg;
    let listPuces;

    nbImg = $('.galerie img').length;

    generatePuces = () => {
        listPuces = '<ul class="list-puces">';
        for (let i = 0; i < nbImg; i++) {
            listPuces += '<li></li>';
        }
        listPuces += '</ul>';
        $(".lightbox .cadre").append(listPuces);
    }

    generatePuces();

    activePuce = () => {
        $('.lightbox ul li').removeClass('puce-active');
        $('.lightbox ul li').eq(index).addClass('puce-active');
    }

    getImgDataLegend = () => {
        legend = $('.galerie img').eq(index).attr('data-legend');
        $('.lightbox figcaption').text(legend);
    }

    updateImg = () => {
        newSrc = $('.galerie img').eq(index).attr('src');
        $('.lightbox img').attr('src', newSrc);
        activePuce();
        getImgDataLegend();
    }

    $('.lightbox ul li').click(function () {
        index = $('.lightbox  ul li').index($(this));
        updateImg();
    });

    $('.galerie img').click(function () {
        $('.lightbox').fadeIn(500).css({
            'display': 'flex'
        });
        index = $('.galerie img').index($(this));
        updateImg();
    });

    $('.icon-navigate_next').click(function () {
        // if (index + 1 < nbImg) {
        //     index++;
        // } else {
        //     index = 0;
        // }
        index = (index + 1) % nbImg;
        updateImg();
    })

    $('.icon-navigate_before').click(function () {
        index = ((index - 1) + nbImg) % nbImg;
        updateImg();
    })
    
    $('.lightbox .icon-close').click(function () {
        $('.lightbox').fadeOut(500);
    });
    
    $('.lightbox').click(function(){
        $(this).fadeOut();
    })
    
    $('.lightbox .cadre').click(function(e){
        e.stopPropagation();
    })

}); // ne pas supprimer svp