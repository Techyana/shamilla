var home = document.getElementById("home");
var news = document.getElementById("news");
var playlist = document.getElementById("playlist");
var reviews = document.getElementById("reviews");
var contact = document.getElementById("contact");
var imgBorder = document.getElementById("imgBorder");

function showHome(){
    home.style.display = "block";
    imgBorderH.style.border = "3px solid #ffffff57";

    news.style.display = "none";
    imgBorderN.style.border = "0px solid";

    playlist.style.display = "none";
    imgBorderP.style.border = "0px solid";

    reviews.style.display = "none";
    imgBorderR.style.border = "0px solid";

    contact.style.display = "none";
    imgBorderC.style.border = "0px solid";
}

function showNews(){
    home.style.display = "none";
    imgBorderH.style.border = "0px solid";

    news.style.display = "block";
    imgBorderN.style.border = "3px solid #ffffff57";

    playlist.style.display = "none";
    imgBorderP.style.border = "0px solid";

    reviews.style.display = "none";
    imgBorderR.style.border = "0px solid";

    contact.style.display = "none";
    imgBorderC.style.border = "0px solid";
}

function showPlaylist(){
    home.style.display = "none";
    imgBorderH.style.border = "0px solid";

    news.style.display = "none";
    imgBorderR.style.border = "0px solid";

    playlist.style.display = "block";
    imgBorderP.style.border = "3px solid #ffffff57";

    reviews.style.display = "none";
    imgBorderR.style.border = "0px solid";

    contact.style.display = "none";
    imgBorderC.style.border = "0px solid";
}

function showReviews(){
    home.style.display = "none";
    imgBorderH.style.border = "0px solid";

    news.style.display = "none";
    imgBorderN.style.border = "0px solid";

    playlist.style.display = "none";
    imgBorderP.style.border = "0px solid";

    reviews.style.display = "block";
    imgBorderR.style.border = "3px solid #ffffff57";

    contact.style.display = "none";
    imgBorderC.style.border = "0px solid";
}

function showContactUs(){
    home.style.display = "none";
    imgBorderH.style.border = "0px solid";

    news.style.display = "none";
    imgBorderN.style.border = "0px solid";

    playlist.style.display = "none";
    imgBorderP.style.border = "0px solid";

    reviews.style.display = "none";
    imgBorderR.style.border = "0px solid";

    contact.style.display = "block";
    imgBorderC.style.border = "3px solid #ffffff57";
}