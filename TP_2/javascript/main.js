
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

$('#openlillecentre').click(function () {
    $("#lillemetro").css("display","none");
    $("#arras").css("display","none");
    $("#touquet").css("display","none");
    $("#lillecentre").toggle('show');
});


$('#openlillemetro').click(function () {
    $("#lillecentre").css("display","none");
    $("#arras").css("display","none");
    $("#touquet").css("display","none");
    $("#lillemetro").toggle('show');
});

$('#openarras').click(function () {
    $("#lillecentre").css("display","none");
    $("#lillemetro").css("display","none");
    $("#touquet").css("display","none");
    $("#arras").toggle('show');
});

$('#opentouquet').click(function () {
    $("#lillecentre").css("display","none");
    $("#lillemetro").css("display","none");
    $("#arras").css("display","none");
    $("#touquet").toggle('show');
});



/* Nav secteur responsive */

$('#openlillecentredeux').click(function () {
    $("#lillemetrodeux").css("display","none");
    $("#arrasdeux").css("display","none");
    $("#touquetdeux").css("display","none");
    $("#lillecentredeux").toggle('show');
});


$('#openlillemetrodeux').click(function () {
    $("#lillecentredeux").css("display","none");
    $("#arrasdeux").css("display","none");
    $("#touquetdeux").css("display","none");
    $("#lillemetrodeux").toggle('show');
});

$('#openarrasdeux').click(function () {
    $("#lillecentredeux").css("display","none");
    $("#lillemetrodeux").css("display","none");
    $("#touquetdeux").css("display","none");
    $("#arrasdeux").toggle('show');
});

$('#opentouquetdeux').click(function () {
    $("#lillecentredeux").css("display","none");
    $("#lillemetrodeux").css("display","none");
    $("#arrasdeux").css("display","none");
    $("#touquetdeux").toggle('show');
});

let position = 0;
let slidesToShow = 2;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

const containerdeux = document.querySelector('.slider-containerdeux');
    const trackdeux = document.querySelector('.slider-trackdeux');
    const btnPrevdeux = document.querySelector('.btn-prevdeux');
    const btnNextdeux = document.querySelector('.btn-nextdeux');
    const itemsdeux = document.querySelectorAll('.slider-itemdeux');

    const containertrois = document.querySelector('.slider-containertrois');
    const tracktrois = document.querySelector('.slider-tracktrois');
    const btnPrevtrois = document.querySelector('.btn-prevtrois');
    const btnNexttrois = document.querySelector('.btn-nexttrois');
    const itemstrois = document.querySelectorAll('.slider-itemtrois');

    const containerquatre = document.querySelector('.slider-containerquatre');
    const trackquatre = document.querySelector('.slider-trackquatre');
    const btnPrevquatre = document.querySelector('.btn-prevquatre');
    const btnNextquatre = document.querySelector('.btn-nextquatre');
    const itemsquatre = document.querySelectorAll('.slider-itemquatre');




items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
});

btnNext.addEventListener('click',() => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition()
    checkBtns()
});

btnPrev.addEventListener('click',() => {
    const itemsLeft = Math.abs(position) / itemWidth
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition()
    checkBtns()
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};
const checkBtns = () => {
    btnPrev.disabled = position === 0
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
};


    itemsdeux.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`
    });

    btnNextdeux.addEventListener('click',() => {
        const itemsdeuxLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsdeuxLeft >= slidesToScroll ? movePosition : itemsdeuxLeft * itemWidth;
        setPositiondeux()
        checkBtnsdeux()
    });
    
    btnPrevdeux.addEventListener('click',() => {
        const itemsdeuxLeft = Math.abs(position) / itemWidth
        position += itemsdeuxLeft >= slidesToScroll ? movePosition : itemsdeuxLeft * itemWidth;
        setPositiondeux()
        checkBtnsdeux()
    });
    const setPositiondeux = () => {
        trackdeux.style.transform = `translateX(${position}px)`
    };
    const checkBtnsdeux = () => {
        btnPrevdeux.disabled = position === 0
        btnNextdeux.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    };



    itemstrois.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`
    });

    btnNexttrois.addEventListener('click',() => {
        const itemstroisLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemstroisLeft >= slidesToScroll ? movePosition : itemstroisLeft * itemWidth;
        setPositiontrois()
        checkBtnstrois()
    });
    
    btnPrevtrois.addEventListener('click',() => {
        const itemstroisLeft = Math.abs(position) / itemWidth
        position += itemstroisLeft >= slidesToScroll ? movePosition : itemstroisLeft * itemWidth;
        setPositiontrois()
        checkBtnstrois()
    });
    const setPositiontrois = () => {
        tracktrois.style.transform = `translateX(${position}px)`
    };
    const checkBtnstrois = () => {
        btnPrevtrois.disabled = position === 0
        btnNexttrois.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    };


    itemsquatre.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`
    });

    btnNextquatre.addEventListener('click',() => {
        const itemsquatreLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsquatreLeft >= slidesToScroll ? movePosition : itemsquatreLeft * itemWidth;
        setPositionquatre()
        checkBtnsquatre()
    });
    
    btnPrevquatre.addEventListener('click',() => {
        const itemsquatreLeft = Math.abs(position) / itemWidth
        position += itemsquatreLeft >= slidesToScroll ? movePosition : itemsquatreLeft * itemWidth;
        setPositionquatre()
        checkBtnsquatre()
    });
    const setPositionquatre = () => {
        trackquatre.style.transform = `translateX(${position}px)`
    };
    const checkBtnsquatre = () => {
        btnPrevquatre.disabled = position === 0
        btnNextquatre.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
    };



    let slidesToShowDeux = 1;
    const containercinq = document.querySelector('.slider-containercinq');
    const trackcinq = document.querySelector('.slider-trackcinq');
    const btnPrevcinq = document.querySelector('.btn-prevcinq');
    const btnNextcinq = document.querySelector('.btn-nextcinq');
    const itemscinq = document.querySelectorAll('.slider-itemcinq');
    const itemsCountdeux = itemscinq.length;
    const itemWidthdeux = containercinq.clientWidth / slidesToShowDeux;
    const movePositiondeux = slidesToScroll * itemWidthdeux;

    const containersix = document.querySelector('.slider-containersix');
    const tracksix = document.querySelector('.slider-tracksix');
    const btnPrevsix = document.querySelector('.btn-prevsix');
    const btnNextsix = document.querySelector('.btn-nextsix');
    const itemssix = document.querySelectorAll('.slider-itemsix');

    const containersept = document.querySelector('.slider-containersept');
    const tracksept = document.querySelector('.slider-tracksept');
    const btnPrevsept = document.querySelector('.btn-prevsept');
    const btnNextsept = document.querySelector('.btn-nextsept');
    const itemssept = document.querySelectorAll('.slider-itemsept');

    const containerhuit = document.querySelector('.slider-containerhuit');
    const trackhuit = document.querySelector('.slider-trackhuit');
    const btnPrevhuit = document.querySelector('.btn-prevhuit');
    const btnNexthuit = document.querySelector('.btn-nexthuit');
    const itemshuit = document.querySelectorAll('.slider-itemhuit');


    itemscinq.forEach((item) => {
        item.style.minWidth = `${400}px`
    });

    btnNextcinq.addEventListener('click',() => {
        const itemscinqLeft = itemsCountdeux - (Math.abs(position) + slidesToShowDeux * itemWidthdeux) / itemWidthdeux;
        position -= itemscinqLeft >= slidesToScroll ? movePositiondeux : itemscinqLeft * itemWidthdeux;
        setPositioncinq()
        checkBtnscinq()
    });
    
    btnPrevcinq.addEventListener('click',() => {
        const itemscinqLeft = Math.abs(position) / itemWidthdeux
        position += itemscinqLeft >= slidesToScroll ? movePositiondeux : itemscinqLeft * itemWidthdeux;
        setPositioncinq()
        checkBtnscinq()
    });
    const setPositioncinq = () => {
        trackcinq.style.transform = `translateX(${position}px)`
    };
    const checkBtnscinq = () => {
        btnPrevcinq.disabled = position === 0
        btnNextcinq.disabled = position <= -(itemsCountdeux - slidesToShowDeux) * itemWidthdeux
    };




    itemssix.forEach((item) => {
        item.style.minWidth = `${400}px`
    });

    btnNextsix.addEventListener('click',() => {
        const itemssixLeft = itemsCountdeux - (Math.abs(position) + slidesToShowDeux * itemWidthdeux) / itemWidthdeux;
        position -= itemssixLeft >= slidesToScroll ? movePositiondeux : itemssixLeft * itemWidthdeux;
        setPositionsix()
        checkBtnssix()
    });
    
    btnPrevsix.addEventListener('click',() => {
        const itemssixLeft = Math.abs(position) / itemWidthdeux
        position += itemssixLeft >= slidesToScroll ? movePositiondeux : itemssixLeft * itemWidthdeux;
        setPositionsix()
        checkBtnssix()
    });
    const setPositionsix = () => {
        tracksix.style.transform = `translateX(${position}px)`
    };
    const checkBtnssix = () => {
        btnPrevsix.disabled = position === 0
        btnNextsix.disabled = position <= -(itemsCountdeux - slidesToShowDeux) * itemWidthdeux
    };



    itemssept.forEach((item) => {
        item.style.minWidth = `${400}px`
    });

    btnNextsept.addEventListener('click',() => {
        const itemsseptLeft = itemsCountdeux - (Math.abs(position) + slidesToShowDeux * itemWidthdeux) / itemWidthdeux;
        position -= itemsseptLeft >= slidesToScroll ? movePositiondeux : itemsseptLeft * itemWidthdeux;
        setPositionsept()
        checkBtnsept()
    });
    
    btnPrevsept.addEventListener('click',() => {
        const itemsseptLeft = Math.abs(position) / itemWidthdeux
        position += itemsseptLeft >= slidesToScroll ? movePositiondeux : itemsseptLeft * itemWidthdeux;
        setPositionsept()
        checkBtnsept()
    });
    const setPositionsept = () => {
        tracksept.style.transform = `translateX(${position}px)`
    };
    const checkBtnsept = () => {
        btnPrevsept.disabled = position === 0
        btnNextsept.disabled = position <= -(itemsCountdeux - slidesToShowDeux) * itemWidthdeux
    };



    itemshuit.forEach((item) => {
        item.style.minWidth = `${400}px`
    });

    btnNexthuit.addEventListener('click',() => {
        const itemshuitLeft = itemsCountdeux - (Math.abs(position) + slidesToShowDeux * itemWidthdeux) / itemWidthdeux;
        position -= itemshuitLeft >= slidesToScroll ? movePositiondeux : itemshuitLeft * itemWidthdeux;
        setPositionhuit()
        checkBtnshuit()
    });
    
    btnPrevhuit.addEventListener('click',() => {
        const itemshuitLeft = Math.abs(position) / itemWidthdeux
        position += itemshuitLeft >= slidesToScroll ? movePositiondeux : itemshuitLeft * itemWidthdeux;
        setPositionhuit()
        checkBtnshuit()
    });
    const setPositionhuit = () => {
        trackhuit.style.transform = `translateX(${position}px)`
    };
    const checkBtnshuit = () => {
        btnPrevhuit.disabled = position === 0
        btnNexthuit.disabled = position <= -(itemsCountdeux - slidesToShowDeux) * itemWidthdeux
    };


$('#iframlille').click(function () {
    $(".maptouquet").css("display","none");
    $(".maparras").css("display","none");
    $(".maplille").toggle('show');
});
$('#iframarras').click(function () {
    $(".maptouquet").css("display","none");
    $(".maplille").css("display","none");
    $(".maparras").toggle('show');
});
$('#iframtouquet').click(function () {
    $(".maplille").css("display","none");
    $(".maparras").css("display","none");
    $(".maptouquet").toggle('show');
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.navigation2').css("top","0");
    } else {
        $('.navigation2').css("top","-120px");
    }
});


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


//  Concerne le texte avant de passer la souris sur la photo//
let boite = document.getElementById('boite');
let a = document.getElementById('a');

a.addEventListener('mouseenter', function( event ) {
    event.target.style.opacity = "";
    boite.style.display = "none";

a.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    boite.style.display = "block";
})

});

let boite2 = document.getElementById('boite2');
let c = document.getElementById('c');

c.addEventListener('mouseenter', function( event ) {
    event.target.style.opacity = "";
    boite2.style.display = "none";

c.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    boite2.style.display = "block";
})
});

let boite3 = document.getElementById('boite3');
let d = document.getElementById('d');

d.addEventListener('mouseenter', function( event ) {
    event.target.style.opacity = "";
    boite3.style.display = "none";

d.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    boite3.style.display = "block";
})

});

let boite4 = document.getElementById('boite4');
let e = document.getElementById('e');

e.addEventListener('mouseenter', function( event ) {
    event.target.style.opacity = "";
    boite4.style.display = "none";

e.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    boite4.style.display = "block";
})

});

//  Concerne le texte en passant la souris sur la photo//

let text = document.getElementById('text');
let text2 = document.getElementById('text2');

a.addEventListener('mouseenter', function( event ) {
    event.target.style.display = "block";
    text.style.display = "block";
    text.style.fontSize = "17px";
    text.style.color = "white";
    text.style.fontWeight = "600";
    event.target.style.display = "block";
    text2.style.fontSize = "12px";
    text2.style.display = "block"
});
a.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    text.style.display = "none";
    event.target.style.opacity = "";
    text2.style.display = "";
});


let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4'); 

c.addEventListener('mouseenter', function( event ) {
    event.target.style.display = "block";
    text3.style.display = "block";
    text3.style.fontSize = "17px";
    text3.style.color = "white";
    text3.style.fontWeight = "600";
    event.target.style.display = "block";
    text4.style.fontSize = "12px";
    text4.style.display = "block"
});
c.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    text3.style.display = "none";
    event.target.style.opacity = "";
    text4.style.display = "";
});

let text5 = document.getElementById('text5');
let text6 = document.getElementById('text6'); 

d.addEventListener('mouseenter', function( event ) {
    event.target.style.display = "block";
    text5.style.display = "block";
    text5.style.fontSize = "17px";
    text5.style.color = "white";
    text5.style.fontWeight = "600";
    event.target.style.display = "block";
    text6.style.fontSize = "12px";
    text6.style.display = "block"
});
d.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    text5.style.display = "none";
    event.target.style.opacity = "";
    text6.style.display = "";
});

let text7 = document.getElementById('text7');
let text8 = document.getElementById('text8'); 

e.addEventListener('mouseenter', function( event ) {
    event.target.style.display = "block";
    text7.style.display = "block";
    text7.style.fontSize = "17px";
    text7.style.color = "white";
    text7.style.fontWeight = "600";
    event.target.style.display = "block";
    text8.style.fontSize = "12px";
    text8.style.display = "block"
});
e.addEventListener('mouseleave', function( event ) {
    event.target.style.opacity = "";
    text7.style.display = "none";
    event.target.style.opacity = "";
    text8.style.display = "";
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
$('#lightmode').click(function () {
    $("#lightmode").css("display","none");
    $("#darkmode").css("display","block");

    $(".navtop").hover(function(){
        $(this).css("color", "#daa520");
        }, function(){
        $(this).css("color", "white");
      });

    $("article").css("dbackground-color","#0e0e0e");
    $("#logoagence").css("display","none");
    $("#logoagencedark").css("display","block");
    $(".navigation").css("background-image","url(../images/headerdark.webp)");
    $("#imologolight").attr("src","../images/imogold.png");
    $("#nav2").css("background-color","#daa520");
    $(".navdeuxlogo").css("display","none");
    $(".navdeuxlogodark").css("display","block");
    $("#secteur").css("background-color","#daa520");
    $(".product-top article").css("background-color","#0e0e0e");
    $(".product-top article").css("border","solid 1px #daa520");
    $(".product-top article").css("border-top","0");
    $(".etoile h2").css("color","white");
    $(".product-top article span ").css("background-color","#daa520");
    $(".droiteslider h1").css("color","white");
    $(".droiteslider p").css("color","white");
    $(".boutonmaison").css("background-color","#daa520");

    $(".boutonmaison").hover(function(){
        $(this).css("background-color", "#b4840c");
        }, function(){
        $(this).css("background-color", "#daa520");
      });

    $(".boutontelecharger").css("background-color","#F06018");

    $(".boutontelecharger").hover(function(){
        $(this).css("background-color", "#a53a05");
        }, function(){
        $(this).css("background-color", "#F06018");
      });


    $(".darkville").css("color","white");
    $(".container_agent").css("background-image","url(../images/fondagentsdark.webp)");
    $(".b").css("background-color","#0e0e0e");
    $(".b").css("border","solid 1px #daa520");
    $("#a").css("border","solid 3px #daa520");
    $("#c").css("border","solid 3px #daa520");
    $("#d").css("border","solid 3px #daa520");
    $("#e").css("border","solid 3px #daa520");
    $("#boite p").css("color","white");
    $("#boite2 p").css("color","white");
    $("#boite3 p").css("color","white");
    $("#boite4 p").css("color","white");
    $("#trouver").css("background-color","#0e0e0e");
    $("#titrefooter").css("background-color","#daa520");
    $(".iframdark").css("background-color","#daa520");

    $(".iframdark").hover(function(){
        $(this).css("background-color", "#b4840c");
        }, function(){
        $(this).css("background-color", "#daa520");
      });
    
    $("#trouver p").css("color","white");  
    $(".mentiondark").css("color","#daa520");  
    $(".mapdark").css("border","solid 1px #daa520");
    $(".mapdark").css("border-right","solid 2px #daa520");
    $(".copyright").css("border-top","solid 1px #daa520");
    $("#logofooterdark").css("display","block");
    $("#logofooter").css("display","none");
    $("#scrolltop").css("background-image","url(../images/scrolltopdark.png)");

});


$('#darkmode').click(function () {
    $("#lightmode").css("display","block");
    $("#darkmode").css("display","none");

    $(".navtop").hover(function(){
        $(this).css("color", "#008aff");
        }, function(){
        $(this).css("color", "white");
      });

    $("article").css("dbackground-color","white");
    $("#logoagence").css("display","block");
    $("#logoagencedark").css("display","none");
    $(".navigation").css("background-image","url(../images/header.webp)");
    $("#imologolight").attr("src","../images/imoblanc.png");
    $("#nav2").css("background-color","#008aff");
    $(".navdeuxlogo").css("display","block");
    $(".navdeuxlogodark").css("display","none");
    $("#secteur").css("background-color","white");
    $(".product-top article").css("background-color","white");
    $(".product-top article").css("border","0");
    $(".etoile h2").css("color","#0e0e0e");
    $(".product-top article span ").css("background-color","#0e0e0e");
    $(".droiteslider h1").css("color","#0e0e0e");
    $(".droiteslider p").css("color","#0e0e0e");
    $(".boutonmaison").css("background-color","#008aff");

    $(".boutonmaison").hover(function(){
        $(this).css("background-color", "#045499");
        }, function(){
        $(this).css("background-color", "#008aff");
      });

      $(".boutontelecharger").css("background-color","red");

      $(".boutontelecharger").hover(function(){
          $(this).css("background-color", "#8a0101");
          }, function(){
          $(this).css("background-color", "red");
        });  

    $(".darkville").css("color","#0e0e0e");
    $(".container_agent").css("background-image","url(../images/fondagents.webp)");
    $(".b").css("background-color","white");
    $(".b").css("border","0");
    $("#a").css("border","0");
    $("#c").css("border","0");
    $("#d").css("border","0");
    $("#e").css("border","0");
    $("#boite p").css("color","#0e0e0e");
    $("#boite2 p").css("color","#0e0e0e");
    $("#boite3 p").css("color","#0e0e0e");
    $("#boite4 p").css("color","#0e0e0e");
    $("#trouver").css("background-color","white");
    $("#titrefooter").css("background-color","#008aff");
    $(".iframdark").css("background-color","#008aff");

    $(".iframdark").hover(function(){
        $(this).css("background-color", "#045499");
        }, function(){
        $(this).css("background-color", "#008aff");
      });
    
    $("#trouver p").css("color","#0e0e0e");  
    $(".mentiondark").css("color","#008aff");  
    $(".mapdark").css("border","solid 1px #0e0e0e");
    $(".mapdark").css("border-right","solid 2px #0e0e0e");
    $(".copyright").css("border-top","0");
    $(".copyrightdark").css("color","white");  
    $("#logofooterdark").css("display","none");
    $("#logofooter").css("display","block");
    $("#scrolltop").css("background-image","url(../images/scrolltop.png)");

});