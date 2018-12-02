$(document).ready(function () {

    $(function () {
        $.scrollIt();
        new WOW().init();
        baguetteBox.run('.compact-gallery', { animation: 'slideIn' });
    });

});

function openNav() {

    if ($(window).width() < 1200) {
        document.getElementById("mySidenav").style.width = "350px";
    }
    else {
        document.getElementById("mySidenav").style.width = "350px";
        document.getElementById("main").style.marginLeft = "350px";
    }
}

function closeNav() {
    if ($(window).width() < 1200) {
        if ($('#main').width() < $(window).width()) {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        }
        else {
            document.getElementById("mySidenav").style.width = "0";
        }
    }
    else {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}
