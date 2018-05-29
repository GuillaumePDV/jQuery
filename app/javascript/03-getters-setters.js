$(function () {

    $('button:nth-child(1)').click(function () {
        let recup = $('ul').text(); // getter
        $('p').text(recup); // setter
    });

    $('button:nth-child(2)').click(function () {
        $('p').text('toujours rien pour l\'instant !'); // setter
    });

    $('button:nth-child(3)').click(function () {
        let content = $('ul').html(); // getter
        alert(content); // setter
    });

    $('button:nth-child(4)').click(function () {
        $('p').html('<strong>toujours rien pour l\'instant !</strong>'); // setter
    });

    $('button:nth-child(5)').click(function () {
        let srcImg = $('.img1').attr('src'); // getter
        console.log(srcImg);
    });

    $('button:nth-child(6)').click(function () {
        $('.img1').attr('src', 'img/gal3.jpg'); // setter
    });

    $('button:nth-child(7)').click(function () {
        let val = $('#name').val(); // getter
        console.log(val);
    });

    $('button:nth-child(8)').click(function () {
        $('#name').val('Cédric et Nadia'); // setter
    });

    // // Exercice 01
    // // Quand on clique sur l'img1, on change l'img2 pour afficher img1 à la place
    // // Quand on clique sur l'img2, on affiche 2 x img2 à la place de img1 et img2

    // $('.img1').click(function () {
    //     $('.img2').attr('src', 'img/gal1.jpg'); // setter
    //     $('.img1').attr('src', 'img/gal1.jpg'); // setter
    // });

    // $('.img2').click(function () {
    //     $('.img1').attr('src', 'img/gal2.jpg'); // setter
    //     $('.img2').attr('src', 'img/gal2.jpg'); // setter
    // });

    // Exercice 02
    // Quand on clique sur l'img1, on affiche img1  dans img3 (récupérer gal1.jpg dynaniquement)
    // Quand on clique sur l'img2, on affiche img2  dans img3 (récupérer gal2.jpg dynaniquement)

    // $('.img1').click(function () {
    //     $('.img3').attr('src', 'img/gal1.jpg'); // setter
    // });

    // $('.img2').click(function () {
    //     $('.img3').attr('src', 'img/gal2.jpg'); // setter
    // });
    $('img').click(function () {
        if (!$(this).hasClass('img3')) {
            // get attr src de $(this)
            let src = $(this).attr('src');
            // set attr src de $('.img3')
            $('.img3').attr('src', src);
        }
    });

    // stop propagation
    // quand on clique sur un li, on affiche son contenu html dans une alert
    $('li').click(function (e) {
        e.stopPropagation();
        alert($(this).html());
    });


}); // ne pas supprimer svp