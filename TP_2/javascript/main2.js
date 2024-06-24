var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}




//scrolltop//
$(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
        $('#scrolltop').fadeIn();
    } else {
        $('#scrolltop').fadeOut();
    }
});
$('#scrolltop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$('#voirplus').click(function () {
    $("#voirplus").css("display","none");
    $("#voirmoins").css("display","inline-block");
    $(".centerarticle2").css("display","block");
    $(".centerarticle").css("padding-bottom","0")
});
$('#voirmoins').click(function () {
    $("#voirmoins").css("display","none");
    $("#voirplus").css("display","inline-block");
    $(".centerarticle2").css("display","none");
    $(".centerarticle").css("padding-bottom","30")
});



/* BOUTON */
$('.js-scrollTo').on('click', function() {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate({
        scrollTop: $(page).offset().top
    }, speed);
    return false;
});



/*DARKMODE*/
$('#lightmode').click(function darkMode () {
    $("#lightmode").css("display","none");
    $("#darkmode").css("display","block");

    $(".navtop").hover(function(){
        $(this).css("color", "#daa520");
        }, function(){
        $(this).css("color", "white");
      });

    $("#logoagence").css("display","none");
    $("#logoagencedark").css("display","block");
    $(".navigation").css("background-image","url(../images/headerdark.webp)");
    $("#imologolight").attr("src","../images/imogold.png");
    $(".visiteréalitévirtuelle").css("background-color","#0e0e0e");
    $(".centervr h1").css("background-color","#daa520");
    $(".centervr p").css("background-color","#daa520");
    $(".centervr span").css("background-color","#daa520");
    $(".avisclient").css("background-color","#0e0e0e");
    $(".centeravis h1").css("background-color","#daa520");
    $(".note h2").css("color","white");
    $(".note p").css("color","white");
    $("#gris").css("background-color","white");
    $(".gauche p").css("color","white");
    $(".droite h2").css("color","white");
    $(".droite p").css("color","white");
    $(".date").css("color","#7a7a7a");
    $(".plusmoins").css("background-color","#daa520");

    $(".plusmoins").hover(function(){
        $(this).css("background-color", "#b4840c");
        }, function(){
        $(this).css("background-color", "#daa520");
      });

    $(".mentiondark").css("color","#daa520");  
    $(".copyright").css("border-top","solid 1px #daa520");
    $("#logofooterdark").css("display","block");
    $("#logofooter").css("display","none");
    $("#scrolltop").css("background-image","url(../images/scrolltopdark.png)");

});


$('#darkmode').click(function darkMode () {
    $("#lightmode").css("display","block");
    $("#darkmode").css("display","none");

    $(".navtop").hover(function(){
        $(this).css("color", "#008aff");
        }, function(){
        $(this).css("color", "white");
      });

    $("#logoagence").css("display","block");
    $("#logoagencedark").css("display","none");
    $(".navigation").css("background-image","url(../images/header.webp)");
    $("#imologolight").attr("src","../images/imoblanc.png");
    $(".visiteréalitévirtuelle").css("background-color","white");
    $(".centervr h1").css("background-color","#008aff");
    $(".centervr p").css("background-color","#008aff");
    $(".centervr span").css("background-color","#008aff");
    $(".avisclient").css("background-color","white");
    $(".centeravis h1").css("background-color","#008aff");
    $(".note h2").css("color","0e0e0e");
    $(".note p").css("color","0e0e0e");
    $("#gris").css("background-color","#cccccc");
    $(".gauche p").css("color","#0e0e0e");
    $(".droite h2").css("color","#0e0e0e");
    $(".droite p").css("color","#0e0e0e");
    $(".date").css("color","#7a7a7a");
    $(".plusmoins").css("background-color","#008aff");

    $(".plusmoins").hover(function(){
        $(this).css("background-color", "#045499");
        }, function(){
        $(this).css("background-color", "#008aff");
      });

    $(".mentiondark").css("color","#008aff");  
    $(".copyright").css("border-top","0");
    $("#logofooterdark").css("display","none");
    $("#logofooter").css("display","block");
    $("#scrolltop").css("background-image","url(../images/scrolltop.png)");

});