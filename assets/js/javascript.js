// ==================COOKIES-CONSENT==================

function verificarCookies() {
    return document.cookie.indexOf('aceitouCookies=true') !== -1;
}

function exibirBanner() {
    if (!verificarCookies()) {
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }
}

function aceitarCookies() {
    document.getElementById('cookieConsentBanner').style.display = 'none';
    document.cookie = 'aceitouCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

window.onload = exibirBanner;

window.onscroll = function() {
    var button = document.getElementById('cookieConsentButton');
    var bannerHeight = document.getElementById('cookieConsentBanner').offsetHeight;

    
    button.style.bottom = bannerHeight + 15 + 'px';
};






// ===============LOGIN FORM==============

function createLoginForm(id){
    let loginNode = document.querySelector(id);
    let overlay = loginNode.querySelector(".overlay-login");
    let closeBtn = loginNode.querySelector(".cancel-btn");

    function openLogin(){
        loginNode.classList.add("active");
    }
    function closeLogin(){
        loginNode.classList.remove("active");
    }
    overlay.addEventListener("click", closeLogin)
    closeBtn.addEventListener("click", closeLogin)
    return openLogin
}

let login = createLoginForm("#login");
document.querySelector("#open-login").addEventListener("click", login)