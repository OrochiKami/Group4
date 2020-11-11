function buttonAppear(){
    setTimeout(appear, 1);
    
    function appear(){
        document.getElementById("backButton").style.top = "20px";
    }
}

function toIndex(){
    setTimeout(fastLoad, 500);
    document.getElementById("backButton").style.cursor = "wait";
    document.body.style.cursor = "progress";

    function fastLoad(){
        window.location.href = "../index.html";
    }
}

// Cheap Web Startup //
function cheapLod(){
    document.getElementById("omegaBlack").style.backgroundColor = "rgba(0, 0, 0, 0)";
    setTimeout(cheapAwey, 1000);
    setTimeout(buttonAppear, 500);
    
    function cheapAwey(){
    document.getElementById("omegaBlack").style.display = "none";
    }
}

// onclick Home //
function myHome() {
    document.getElementsByClassName("btn")[0].style.cursor = "wait";
    document.getElementsByClassName("btn")[1].style.cursor = "wait";
    document.getElementsByClassName("btn")[2].style.cursor = "wait";
    document.getElementsByClassName("btn")[3].style.cursor = "wait";
    document.getElementsByClassName("btn")[4].style.cursor = "wait";
    document.getElementById("cheapBlack").style.display = "block";
    document.getElementById("loader").style.display = "block";
    document.body.style.cursor = "progress";
    setTimeout(showHomPage, 5000);
    
    document.getElementById("iDbtn1").className = "bTactive gLactive btn btn1";
    
    function showHomPage(){
        window.location.href = "home.html";
    }
}

// onclick Personal Information //
function myPerso() {
    document.getElementsByClassName("btn")[0].style.cursor = "wait";
    document.getElementsByClassName("btn")[1].style.cursor = "wait";
    document.getElementsByClassName("btn")[2].style.cursor = "wait";
    document.getElementsByClassName("btn")[3].style.cursor = "wait";
    document.getElementsByClassName("btn")[4].style.cursor = "wait";
    document.getElementById("cheapBlack").style.display = "block";
    document.getElementById("loader").style.display = "block";
    document.body.style.cursor = "progress";
    setTimeout(showPerPage, 5000);
    
    document.getElementById("iDbtn1").className = "bTactive gLactive btn btn1";
    
    function showPerPage(){
        window.location.href = "persoInfo.html";
    }
}
    
// onclick Educational Background //
function myEduBg(){
    document.getElementsByClassName("btn")[0].style.cursor = "wait";
    document.getElementsByClassName("btn")[1].style.cursor = "wait";
    document.getElementsByClassName("btn")[2].style.cursor = "wait";
    document.getElementsByClassName("btn")[3].style.cursor = "wait";
    document.getElementsByClassName("btn")[4].style.cursor = "wait";
    document.getElementById("cheapBlack").style.display = "block";
    document.getElementById("loader").style.display = "block";
    document.body.style.cursor = "progress";
    setTimeout(showEduPage, 5000);
    
    document.getElementById("iDbtn2").className = "bTactive gLactive btn btn2";
    
    function showEduPage(){
        window.location.href = "educaBack.html";
    }
}

// onclick Hobbies and Interests //
function myHobnI(){
    document.getElementsByClassName("btn")[0].style.cursor = "wait";
    document.getElementsByClassName("btn")[1].style.cursor = "wait";
    document.getElementsByClassName("btn")[2].style.cursor = "wait";
    document.getElementsByClassName("btn")[3].style.cursor = "wait";
    document.getElementsByClassName("btn")[4].style.cursor = "wait";
    document.getElementById("cheapBlack").style.display = "block";
    document.getElementById("loader").style.display = "block";
    document.body.style.cursor = "progress";
    setTimeout(showHobPage, 5000);
    
    document.getElementById("iDbtn3").className = "bTactive gLactive btn btn3";
    
    function showHobPage(){
        window.location.href = "hobbyInte.html";
    }
}

// onclick Favourites Foods and Dishes //
function myFavFD(){
    document.getElementsByClassName("btn")[0].style.cursor = "wait";
    document.getElementsByClassName("btn")[1].style.cursor = "wait";
    document.getElementsByClassName("btn")[2].style.cursor = "wait";
    document.getElementsByClassName("btn")[3].style.cursor = "wait";
    document.getElementsByClassName("btn")[4].style.cursor = "wait";
    document.getElementById("cheapBlack").style.display = "block";
    document.getElementById("loader").style.display = "block";
    document.body.style.cursor = "progress";
    setTimeout(showFavPage, 5000);
    
    document.getElementById("iDbtn4").className = "bTactive gLactive btn btn4";
    
    function showFavPage(){
        window.location.href = "favorFoDi.html";
    }
}