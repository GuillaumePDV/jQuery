/**
 * MASQUER LES ICONS CHECK AU CHARGEMENT DE LA PAGE
 * Etape 1 : masquer les icon-check avec hide()
 * 
 * RECUPER VAL DE DATA-DEFAULT POUR L AFFICHER DANS CHAQUE CHAMPS
 * Etape 1 : pour chaque champs de saisie
 * - récupérer (variable) la val de l'attr data-default
 * - affecter au champ la valeur de l'attr data-default
 * 
 * VIDER UN CHAMPS DE SAISIE AU FOCUS SI PAR REMPLI
 * Etape 1 : au focus si user n'a pas deja saisi quelque chose
 * - on vide le champs
 * - sinon on laisse ce que l'user a saisi
 * 
 * REMETTRE VAL PAR DEFAUT DANS UN CHAMP SI NON REMPLI
 * Etape 1 : au blur, si champs non rempli par user
 * - on remet la valeur par defaut
 * - afficher le span .validation
 * - remplacer .icon-check par .icon-close
 * 
 * QUAND LE FORMULAIRE EST ENVOYE
 * Etape 1 : si un seul champs required n'est pas rempli
 * - on annule l'envoi du formulaire
 * - on affiche .icon-close dans les champs non remplis
 * Etape 2 : envoi des datas du formulaire avec ajax vers script php
 * 
 * FACTORISER LE CODE
 * Etape 1 : créer une fonction pour le changement des icons
 * et l'appeler dans notre code à chaque fois que nécessaire
 */

'use strict';

$(function () {

    let listInputs = $('.formulaire [data-default]');
    let listRequired = $('.formulaire [required]');

    listInputs.each(function () {
        $(this).val($(this).attr('data-default'));
    });

    listInputs.focus(function () {
        if ($(this).val() === $(this).attr('data-default')) {
            $(this).val('');
        }
    });

    listInputs.blur(function () {
        if ($(this).val() === ('')) {
            $(this).val($(this).attr('data-default'));
            if ($(this).prop('required')) {
                $(this).siblings('.formulaire .validation').addClass('icon-close');
            }
        } else {
            $(this).siblings('.formulaire .validation').removeClass('icon-close').addClass('icon-check');

        }
    });

    $('.formulaire').submit(function () {
        let valid = true;
        listRequired.each(function () {
            if ($(this).val() === $(this).attr('data-default')) {
                $(this).siblings('.formulaire .validation').addClass('icon-close');
                valid = false;
            }
        });

        if (valid) {
            $.ajax({
                method: 'POST',
                url: 'envoi-form.php',
                data: $('.formulaire').serialize()
            }).done(function (msg) {
                if (msg === 'yes'){
                    $('.formulaire .success').tex('email envoyé avec succès !').show();
                } else {
                    $('.formulaire .alert').tex('bah non !').show();
                }
            });
        }

        return false;
    });


}); // ne pas supprimer svp