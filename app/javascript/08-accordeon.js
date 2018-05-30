/**
 * OUVRIR UN ITEM ET FERMER LES AUTRES
 * Etape 1 : quand on clique sur un h1, si celui ci n'a pas la class active, 
 * on ferme tous les p et on ouvre le p suivant le h1 cliqué
 * - si il a la class active, c'est qu'il est deja ouvert donc on fait rien
 
 * Etape 2 : on retire la class active de tous les h1 et on ajoute la class active sur 
 * le h1 cliqué
 * 
 * Etape 3 : on retire l'icon-down sur tous les h1 et on ajouter icon-right sur ts les h1
 * 
 * Etape 4 : on alterne les class icon-down et icon-right sur this h1 (celui cliqué) 
 */

'use strict';

$(function () {
    $('.accordeon h1').click(function () {
        if (!$(this).hasClass('active')) {
            $('.accordeon p').slideUp(200);
            $(this).next('p').slideDown();

            $('.accordeon h1').removeClass('active');
            $(this).addClass('active');

            $('.accordeon h1 span')
                .removeClass('icon-arrow_drop_down')
                .addClass('icon-navigate_next');

            // $(this).find('span')
            //     .removeClass('icon-navigate_next')
            //     .addClass('icon-arrow_drop_down');
            $(this).find('span')
                .toggleClass('icon-navigate_next icon-arrow_drop_down');

        }
    });



}); // ne pas supprimer svp