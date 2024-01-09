$(document).ready(function () {

    //, Gestire le Proprietà di Visualizzazione

    //# hide()
    $("#hide-btn").click(function () {
        $(this).hide();
    });

    //# show()
    $("#show-btn").click(function () {
        $("#hide-btn").show();
    });

    //# toggle()
    $("#toggle-btn").click(function () {
        $("#hide-btn").toggle(500);
    });



    //, Aggiungere e Rimuovere Classi

    //# addClass()
    $("#add-class").click(function () {
        $(".text").addClass('added');
    });

    //# removeClass()
    $("#remove-class").click(function () {
        $(".text").removeClass('added');
    });

    //# toggleClass()
    $("#toggle-class").click(function () {
        $(".text").toggleClass('added');
    });



    //, Gestire le Proprietà CSS

    //# Ottenere il valore di una proprietà CSS
    $("#css-color").click(function () {
        var color = $(".paragraph").css('color');
        console.log(color); // rgb(138, 43, 226)


        var otherCSS = $(".paragraph").css([
            'background-color', 'padding', 'font-weight']);
        console.log(otherCSS);
        // Oggetto con le proprietà CSS
    });

    //# Impostare una proprietà CSS
    $("#css-new").click(function () {
        $(".paragraph").css('background-color', 'aqua');
    });


    //# Impostare più proprietà CSS contemporaneamente
    $("#css-multi").click(function () {
        $(".paragraph").css({
            'background-color': 'aqua',
            'color': 'red',
            'border': '5px dashed blue',
        });
    });

    //# Usare funzioni
    $('#css-fn').click(function () {
        $(".paragraph").css('font-size', function (index, currentSize) {
            return parseFloat(currentSize) * 1.2 + 'px';
        })
    });


    //# Impostazioni relative
    $("#css-bigger-font").click(function () {
        $(".paragraph").css('font-size', '+=10px');
    });

    $("#css-smaller-font").click(function () {
        $(".paragraph").css('font-size', '-=10px');
    });



    //, Gestire le dimensioni degli elementi


    $("#css-ele-1").click(function () {
        $(".sizes").width("10em").height("4em");
        // width: 10em, height: 4em
    });

    $("#css-ele-2").click(function () {
        $(".sizes").innerWidth(100).outerHeight(300);
        // width + padding: 100px, height + padding + border: 300px
    });

});