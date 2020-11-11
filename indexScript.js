// Slideshow
function indexSlide(){
    document.body.style.transition = "5s";

    document.body.style.background = "url('Scene1.png')";
    setTimeout(s, 8000);

    function s(){
        document.body.style.background = "url('Scene2.png')";
        setTimeout(ss, 8000);
    }

    function ss(){
        document.body.style.background = "url('Scene3.png')";
        setTimeout(sss, 8000);
    }

    function sss(){
        document.body.style.background = "url('Scene4.png')";
        setTimeout(indexSlide, 8000);
    }
}

// Selection Event
function Fabito(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Fabito/home.html";
    }
}

function Corpuz(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Corpuz/corpuz.html";
    }
}

function Villanueva(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Villanueva/villanuevahome.html";
    }
}

function Amores(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Amores/home.html";
    }
}

function Esguerra(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Esguerra/Homepage.html";
    }
}

function Mulato(){
    document.getElementsByClassName("fadeBlack")[0].style.backgroundColor = "rgba(0, 0, 0)";
    document.getElementsByClassName("fadeBlack")[0].style.zIndex = "1";
    setTimeout(phase, 800);

    function phase(){
        window.location.href = "Mulato/Homepage.html";
    }
}