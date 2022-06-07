const menu= document.querySelector('#navbar');
menu.style.zIndex = "2";

window.onscroll = function () {
    let currentScroll = window.pageYOffset;
    if (currentScroll <= 100) {
      menu.classList.add('.uk-navbar-transparent');
      menu.style.backgroundColor = null;
    } else {
      menu.style.backgroundColor = '#202020'
    }
  }

 